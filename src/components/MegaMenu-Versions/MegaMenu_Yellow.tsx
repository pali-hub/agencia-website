"use client";

import { useRef, useEffect } from "react";
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

// Mapeo de iconos
function getIconConfig(title: string) {
  const iconMap: Record<string, { icon: any }> = {
    "Website Design": { icon: Layout },
    "Branding": { icon: Palette },
    "UX/UI Design": { icon: Sparkles },
    "Subscription": { icon: Zap },
    "Creative Subscription": { icon: Zap },
    "Content Design & Social": { icon: PenTool },
    "Website as a Service": { icon: Rocket },
    "Marketing Content": { icon: Target },
    "Templates e kits": { icon: Package },
    "Branding Pack": { icon: Palette },
    "Superdesign.space": { icon: Sparkles },
    "Creative Direction": { icon: Briefcase },
    "Packaging": { icon: Package },
    "Our Approach": { icon: Target },
    "Team": { icon: Users },
    "Careers": { icon: GraduationCap },
    "Case Studies": { icon: FolderOpen },
    "Industries": { icon: Briefcase },
  };

  return iconMap[title] || { icon: Sparkles };
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
          className={`group flex items-start gap-3 rounded-xl border border-neutral-200/60 bg-white/40 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-amber-50/70 hover:shadow-lg ${
            currentPath === item.href ? 'ring-2 ring-amber-400/50' : ''
          }`}
        >
          {/* Icon Container - cambia a amarillo en hover */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200/60 bg-white/80 text-neutral-500 shadow-sm transition-all group-hover:border-amber-300/70 group-hover:bg-amber-100/80 group-hover:text-amber-700">
            {(() => {
              const IconComponent = getIconConfig(item.title).icon;
              return <IconComponent className="h-5 w-5" />;
            })()}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="text-sm font-semibold text-neutral-800 transition-colors group-hover:text-amber-900">
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
  const pathname = usePathname();
  
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