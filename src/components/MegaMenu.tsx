// src/components/MegaMenu.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion, easeOut, easeIn } from "framer-motion";
import Link from "next/link";
import type { MenuSection, MenuItem } from "@/lib/menuData";
import { useOnClickOutside } from "@/lib/useOnClickOutside";

const panelVariants = {
  hidden: { opacity: 0, y: -8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.18, ease: easeOut, when: "beforeChildren", staggerChildren: 0.04 } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.12, ease: easeIn } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.18, ease: easeOut } },
};

// Função recursiva para renderizar itens e subgrupos
function renderMenuItems(items: (MenuSection | MenuItem)[]) {
  return items.map((item) =>
    "items" in item ? (
      <li key={item.title} className="mb-2">
        <div className="font-semibold text-neutral-700 mb-1 hover:text-rose-700 hover:bg-rose-50 hover:ring-1 hover:ring-rose-200 rounded-lg transition cursor-pointer px-2 py-1">
          {item.title}
        </div>
        <ul className="space-y-1.5 ml-2">{renderMenuItems(item.items)}</ul>
      </li>
    ) : (
      <motion.li key={item.title} variants={itemVariants}>
        <Link
          href={item.href}
          className={`hover-lift flex items-start gap-3 rounded-xl p-3 transition hover:bg-white ${
            item.highlight ? "hover:bg-rose-50 hover:ring-1 hover:ring-rose-200" : ""
          }`}
        >
          <div className="h-8 w-8 shrink-0 rounded-lg bg-neutral-100" />
          <div>
            <div className={`font-medium leading-tight ${item.highlight ? "hover:text-rose-700" : ""}`}>
              {item.title}
            </div>
            {item.desc && (
              <div className="text-sm text-neutral-500">{item.desc}</div>
            )}
          </div>
        </Link>
      </motion.li>
    )
  );
}

export default function MegaMenu({
  id,
  sections,
  onClose,
}: {
  id: string;
  sections: MenuSection[];
  onClose?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => onClose?.());

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      id={id}
      role="menu"
      aria-label="submenu"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={panelVariants}
      className="fixed left-1/2 top-16 z-50 w-[min(1100px,92vw)] -translate-x-1/2 rounded-2xl border panel-glass shadow-2xl edge-fade-xy [--fade-x:16px] md:[--fade-x:28px] [--fade-y:16px]"
      ref={ref}
    >
      <div className="grid gap-6 p-6 md:grid-cols-3">
        {sections.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.title && (
              <div className="mb-2 text-sm font-medium text-neutral-500">{col.title}</div>
            )}
            <ul className="space-y-1.5">
              {renderMenuItems(col.items)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
