"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
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
    closeTimeout.current = setTimeout(() => setOpen(null), 150);
  }

  const closeMenus = useCallback(() => setOpen(null), []);

  const groups = [
    { label: "Projects", sections: projectsMenu },
    { label: "Services", sections: servicesMenu },
    { label: "About", sections: aboutMenu },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10 text-xl font-semibold tracking-tight text-neutral-900 transition-colors hover:text-neutral-600"
          >
            eloquint
          </Link>

          {/* Desktop Navigation - Centered */}
          <div
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
            }}
          >
            <ul className="flex items-center gap-1">
              <li onMouseEnter={() => handleMouseEnter("about")}>
                <button className="hover-underline px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900">
                  About
                </button>
              </li>
              <li onMouseEnter={() => handleMouseEnter("projects")}>
                <button className="hover-underline px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900">
                  Projects
                </button>
              </li>
              <li onMouseEnter={() => handleMouseEnter("services")}>
                <button className="hover-underline px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900">
                  Services
                </button>
              </li>
            </ul>

            {/* MegaMenu Dropdown */}
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

          {/* Right Side - CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg md:block"
            >
              Let's chat 👋
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <MenuOverlay
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        groups={groups}
      />
    </>
  );
}