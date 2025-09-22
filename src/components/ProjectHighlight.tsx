"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import type { FeaturedProject } from "@/lib/projectsData";

// Animation variants for the component
const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

// Props interface extending FeaturedProject with additional props
interface ProjectHighlightProps extends FeaturedProject {
  number?: string;
  className?: string;
}

export default function ProjectHighlight({
  client,
  slug,
  cover,
  tags,
  backdrop,
  backdropRing,
  number,
  className = ""
}: ProjectHighlightProps) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0% -20% 0%" }}
      className={`grid gap-8 md:grid-cols-2 ${className}`}
    >
      {/* LEFT SIDE: title, line, chips, and number */}
      <div className="flex flex-col min-h-[280px]">
        <div className="flex items-start gap-3">
          <span className="mt-1 size-2 shrink-0 rounded-full bg-neutral-900" />
          <div className="min-w-0">
            <Link
              href={`/projects/${slug}`}
              className="block text-lg font-medium tracking-tight hover:underline underline-offset-2"
            >
              {client}
            </Link>

            {/* Thin line as in the mockup */}
            <span className="mt-6 block h-[2px] w-24 bg-black" />
          </div>
        </div>

        {/* Tags/chips */}
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
              aria-label={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Number at bottom right */}
        {number && (
          <span className="ml-auto mt-6 text-lg tabular-nums text-neutral-900/90">
            {number}
          </span>
        )}
      </div>

      {/* RIGHT SIDE: large card with gradient and image */}
      <Link href={`/projects/${slug}`} className="group block">
        <div
          className={`
            relative overflow-hidden rounded-[32px]
            bg-gradient-to-br ${backdrop}
            p-5 sm:p-6 md:p-8
            ring-1 ${backdropRing ?? "ring-black/5"}
            shadow-lg shadow-black/5
            transition-transform duration-300
            group-hover:scale-[1.02]
          `}
        >
          <div className="relative mx-auto w-full max-w-[900px]">
            {/* Mockup frame */}
            <div className="rounded-[14px] border border-black/20 bg-black/5 p-1 shadow-lg shadow-black/20">
              <div className="relative overflow-hidden rounded-[12px] bg-black/80">
                <Image
                  src={cover}
                  alt={client}
                  width={1280}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Soft glow effect on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: "radial-gradient(60% 60% at 60% 40%, rgba(255,255,255,.35), transparent 70%)" }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}