"use client";

import { useRef, useEffect, useState } from "react";
import { motion, easeOut, easeIn } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  Palette, 
  Layout, 
  Zap,
  Users,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Target,
  Package,
  PenTool,
  Rocket
} from "lucide-react";
import type { MenuSection, MenuItem } from "@/lib/menuData";
import { useOnClickOutside } from "@/lib/useOnClickOutside";

const panelVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: easeOut, 
      when: "beforeChildren", 
      staggerChildren: 0.03 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -4, 
    transition: { duration: 0.2, ease: easeIn } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 4 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: easeOut } 
  },
};

// Mapeo de iconos con colores sutiles
function getIconConfig(title: string) {
  const iconMap: Record<string, { icon: any; color: string; bgHover: string }> = {
    "Website Design": { icon: Layout, color: "group-hover:text-blue-600", bgHover: "group-hover:border-blue-200 group-hover:bg-blue-50/50" },
    "Branding": { icon: Palette, color: "group-hover:text-purple-600", bgHover: "group-hover:border-purple-200 group-hover:bg-purple-50/50" },
    "UX/UI Design": { icon: Sparkles, color: "group-hover:text-pink-600", bgHover: "group-hover:border-pink-200 group-hover:bg-pink-50/50" },
    "Subscription": { icon: Zap, color: "group-hover:text-amber-600", bgHover: "group-hover:border-amber-200 group-hover:bg-amber-50/50" },
    "Creative Subscription": { icon: Zap, color: "group-hover:text-amber-600", bgHover: "group-hover:border-amber-200 group-hover:bg-amber-50/50" },
    "Content Design & Social": { icon: PenTool, color: "group-hover:text-emerald-600", bgHover: "group-hover:border-emerald-200 group-hover:bg-emerald-50/50" },
    "Website as a Service": { icon: Rocket, color: "group-hover:text-sky-600", bgHover: "group-hover:border-sky-200 group-hover:bg-sky-50/50" },
    "Marketing Content": { icon: Target, color: "group-hover:text-rose-600", bgHover: "group-hover:border-rose-200 group-hover:bg-rose-50/50" },
    "Templates e kits": { icon: Package, color: "group-hover:text-violet-600", bgHover: "group-hover:border-violet-200 group-hover:bg-violet-50/50" },
    "Branding Pack": { icon: Palette, color: "group-hover:text-fuchsia-600", bgHover: "group-hover:border-fuchsia-200 group-hover:bg-fuchsia-50/50" },
    "Superdesign.space": { icon: Sparkles, color: "group-hover:text-indigo-600", bgHover: "group-hover:border-indigo-200 group-hover:bg-indigo-50/50" },
    "Creative Direction": { icon: Briefcase, color: "group-hover:text-orange-600", bgHover: "group-hover:border-orange-200 group-hover:bg-orange-50/50" },
    "Packaging": { icon: Package, color: "group-hover:text-teal-600", bgHover: "group-hover:border-teal-200 group-hover:bg-teal-50/50" },
    "Our Approach": { icon: Target, color: "group-hover:text-cyan-600", bgHover: "group-hover:border-cyan-200 group-hover:bg-cyan-50/50" },
    "Team": { icon: Users, color: "group-hover:text-blue-600", bgHover: "group-hover:border-blue-200 group-hover:bg-blue-50/50" },
    "Careers": { icon: GraduationCap, color: "group-hover:text-green-600", bgHover: "group-hover:border-green-200 group-hover:bg-green-50/50" },
    "Case Studies": { icon: FolderOpen, color: "group-hover:text-purple-600", bgHover: "group-hover:border-purple-200 group-hover:bg-purple-50/50" },
    "Industries": { icon: Briefcase, color: "group-hover:text-slate-600", bgHover: "group-hover:border-slate-200 group-hover:bg-slate-50/50" },
  };

  return iconMap[title] || { 
    icon: Sparkles, 
    color: "group-hover:text-neutral-700",
    bgHover: "group-hover:border-neutral-200 group-hover:bg-neutral-50/50"
  };
}

// Función recursiva para renderizar items
function renderMenuItems(items: (MenuSection | MenuItem)[], currentPath: string) {
  return items.map((item) =>
    "items" in item ? (
      <li key={item.title} className="mb-5">
        <div className="mb-3 px-2 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-700">
          {item.title}
        </div>
        <ul className="space-y-2">{renderMenuItems(item.items, currentPath)}</ul>
      </li>
    ) : (
      <motion.li key={item.title} variants={itemVariants}>
        <Link
          href={item.href}
          className={`group flex items-start gap-3 rounded-xl border p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
            currentPath === item.href
              ? 'border-amber-300/70 bg-amber-50/80 shadow-sm'
              : `border-neutral-200/60 bg-white/40 ${getIconConfig(item.title).bgHover}`
          }`}
        >
          {/* Icon Container */}
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-sm transition-all ${
            currentPath === item.href
              ? 'border-amber-300/70 bg-amber-100/90 text-amber-700'
              : `border-neutral-200/60 bg-white/80 text-neutral-500 ${getIconConfig(item.title).color}`
          }`}>
            {(() => {
              const IconComponent = getIconConfig(item.title).icon;
              return <IconComponent className="h-5 w-5" />;
            })()}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className={`text-sm font-semibold transition-colors ${
              currentPath === item.href
                ? 'text-amber-900'
                : 'text-neutral-800 group-hover:text-neutral-900'
            }`}>
              {item.title}
            </div>
            {item.desc && (
              <div className="mt-0.5 text-[11px] leading-tight text-neutral-400 transition-colors group-hover:text-neutral-500">
                {item.desc}
              </div>
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
  const pathname = usePathname(); // Hook para obtener la ruta actual
  
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
      className="absolute left-1/2 top-12 z-50 w-[min(1200px,92vw)] -translate-x-1/2 rounded-2xl border border-neutral-200/70 bg-white/90 shadow-2xl backdrop-blur-md"
      ref={ref}
    >
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/30 to-neutral-50/40 pointer-events-none" />
      
      <div className="relative grid gap-8 p-8 md:grid-cols-4">
        {sections.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.title && (
              <div className="mb-5 px-2">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  {col.title}
                </div>
                <div className="mt-2 h-px w-12 bg-gradient-to-r from-neutral-300 to-transparent" />
              </div>
            )}
            <ul className="space-y-2">
              {renderMenuItems(col.items, pathname)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
