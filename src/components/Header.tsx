"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MegaMenu from "@/components/MegaMenu";
import MenuOverlay from "@/components/MenuOverlay";
import { aboutMenu, projectsMenu, servicesMenu } from "@/lib/menuData";

export default function Header() {
  const [open, setOpen] = useState<null | "about" | "projects" | "services">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(menu: "about" | "projects" | "services") {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(menu);
  }

  function handleMouseLeave() {
    closeTimeout.current = setTimeout(() => setOpen(null), 120);
  }

  const closeMenus = useCallback(() => setOpen(null), []);

  const groups = [
    { label: "Menu", sections: projectsMenu },
    { label: "Services", sections: servicesMenu },
    { label: "About", sections: aboutMenu },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-semibold text-lg">
            suaLogo
          </Link>
          {/* Wrapper centralizado e relativo */}
          <div
            className="flex-1 flex justify-center relative"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
            }}
          >
            <ul className="hidden items-center gap-8 md:flex">
              <li onMouseEnter={() => handleMouseEnter("about")}>
                <button className="hover-underline text-sm">About</button>
              </li>
              <li onMouseEnter={() => handleMouseEnter("projects")}>
                <button className="hover-underline text-sm">Projects</button>
              </li>
              <li onMouseEnter={() => handleMouseEnter("services")}>
                <button className="hover-underline text-sm">Services</button>
              </li>
            </ul>
            {/* MegaMenu dentro do mesmo wrapper */}
            <AnimatePresence>
              {open === "about" && (
                <MegaMenu id="menu-about" sections={aboutMenu} onClose={closeMenus} />
              )}
              {open === "projects" && (
                <MegaMenu id="menu-projects" sections={projectsMenu} onClose={closeMenus} />
              )}
              {open === "services" && (
                <MegaMenu id="menu-services" sections={servicesMenu} onClose={closeMenus} />
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-sm px-2 py-1 rounded border"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </nav>
      </header>

      <MenuOverlay
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        groups={groups}
      />
    </>
  );
}
