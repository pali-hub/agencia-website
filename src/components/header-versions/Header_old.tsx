"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MegaMenu from "@/components/MegaMenu";
import MenuOverlay from "@/components/MenuOverlay";
import { aboutMenu, projectsMenu, servicesMenu } from "@/lib/menuData";

export default function Header() {
  // desktop: qual mega menu está aberto
  const [open, setOpen] = useState<null | "about" | "projects" | "services">(null);
  // mobile: overlay aberto/fechado
  const [mobileOpen, setMobileOpen] = useState(false);

  // grupos para o overlay mobile
 const groups = [
  { label: "Menu", sections: projectsMenu },
  { label: "Services", sections: servicesMenu },
  { label: "About", sections: aboutMenu },
];


  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="font-semibold text-lg">
            suaLogo
          </Link>

          {/* Navegação Desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {/* About */}
            <li
              onMouseEnter={() => setOpen("about")}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                className="text-sm hover:opacity-80"
                aria-haspopup="true"
                aria-expanded={open === "about"}
                aria-controls="menu-about"
              >
                About
              </button>
              <AnimatePresence>
                {open === "about" && (
                  <MegaMenu id="menu-about" sections={aboutMenu} />
                )}
              </AnimatePresence>
            </li>

            {/* Projects */}
            <li
              onMouseEnter={() => setOpen("projects")}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                className="text-sm hover:opacity-80"
                aria-haspopup="true"
                aria-expanded={open === "projects"}
                aria-controls="menu-projects"
              >
                Projects
              </button>
              <AnimatePresence>
                {open === "projects" && (
                  <MegaMenu id="menu-projects" sections={projectsMenu} />
                )}
              </AnimatePresence>
            </li>

            {/* Services */}
            <li
              onMouseEnter={() => setOpen("services")}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                className="text-sm hover:opacity-80"
                aria-haspopup="true"
                aria-expanded={open === "services"}
                aria-controls="menu-services"
              >
                Services
              </button>
              <AnimatePresence>
                {open === "services" && (
                  <MegaMenu id="menu-services" sections={servicesMenu} />
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Botão Mobile */}
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

      {/* Overlay Mobile */}
      <MenuOverlay
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        groups={groups}
      />
    </>
  );
}
