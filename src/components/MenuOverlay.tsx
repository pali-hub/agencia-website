"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { MenuSection, MenuItem } from "@/lib/menuData";

type Props = {
  open: boolean;
  onClose: () => void;
  groups: { label: string; sections: MenuSection[] }[];
};

// Função recursiva para renderizar itens e subgrupos
function renderMenuItems(items: (MenuSection | MenuItem)[], onClose: () => void) {
  return items.map((item) =>
    "items" in item ? (
      <li key={item.title} className="mt-2">
        <div className="px-2 pb-1 pt-2 text-xs uppercase tracking-wide text-neutral-500">
          {item.title}
        </div>
        <ul className="divide-y ml-2">{renderMenuItems(item.items, onClose)}</ul>
      </li>
    ) : (
      <li key={item.title}>
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex items-start gap-3 px-3 py-3 text-sm hover:bg-white ${
            item.highlight ? "bg-rose-50 ring-1 ring-rose-200" : ""
          }`}
        >
          <div className="mt-0.5 h-6 w-6 shrink-0 rounded-md bg-neutral-100" />
          <div>
            <div className="font-medium leading-tight">{item.title}</div>
            {item.desc && (
              <div className="text-neutral-500">{item.desc}</div>
            )}
          </div>
        </Link>
      </li>
    )
  );
}

export default function MenuOverlay({ open, onClose, groups }: Props) {
  // trava scroll do body quando aberto
  useEffect(() => {
    const cl = document.documentElement.classList;
    if (open) cl.add("overflow-hidden");
    else cl.remove("overflow-hidden");
    return () => cl.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur px-4 py-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="mb-6 block text-right text-sm text-neutral-500"
      >
        Fechar
      </button>
      {groups.map((group) => (
        <div key={group.label} className="mb-8">
          <div className="mb-2 text-base font-semibold text-neutral-700">
            {group.label}
          </div>
          {group.sections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <div className="px-2 pb-1 pt-2 text-xs uppercase tracking-wide text-neutral-500">
                  {section.title}
                </div>
              )}
              <ul className="divide-y">
                {renderMenuItems(section.items, onClose)}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
