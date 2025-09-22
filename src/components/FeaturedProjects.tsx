"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FeaturedProject } from "@/lib/projectsData";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }
};

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects;
  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-[28px] border border-black/[.06] bg-white/50 backdrop-blur">
        <div className="p-5 sm:p-8 md:p-10">
          <span className="inline-flex items-center gap-2 text-sm text-neutral-600">
            <span className="size-2 rounded-full bg-neutral-900" />
            Featured projects
          </span>
          <h2 id="featured-title" className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
            Selected work built for real people and outcomes.
          </h2>
        </div>

        <ul role="list" className="flex flex-col divide-y divide-black/[.06]">
          {featuredProjects.map((p, i) => (
            <li key={p.slug} className="p-5 sm:p-8 md:p-10">
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0% -20% 0%" }}
                className="grid gap-8 md:grid-cols-2"
              >
                {/* LADO ESQUERDO: título, linha, chips e número */}
                <div className="flex min-h-[280px] flex-col">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-neutral-900" />
                    <div className="min-w-0">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="block text-lg font-medium tracking-tight hover:underline underline-offset-2"
                      >
                        {p.client}
                      </Link>

                      {/* linha fina como no mock */}
                      <span className="mt-6 block h-[2px] w-24 bg-black" />
                    </div>
                  </div>

                  {/* chips */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm"
                        aria-label={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* número ao canto inferior direito */}
                  <span className="ml-auto mt-6 text-lg tabular-nums text-neutral-900/90">
                    {String(50 + (featuredProjects.length - i) * 2)}{/* só pra ter um número estiloso; troque por real se quiser */}
                  </span>
                </div>

                {/* LADO DIREITO: cartão grande com gradiente e imagem */}
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div
                    className={`
                      relative overflow-hidden rounded-[32px]
                      bg-gradient-to-br ${p.backdrop}
                      p-5 sm:p-6 md:p-8
                      ring-1 ${p.backdropRing ?? "ring-black/5"}
                    `}
                  >
                    <div className="relative mx-auto w-full max-w-[900px]">
                      {/* moldura da mockup */}
                      <div className="rounded-[14px] border border-black/20 bg-black/5 p-1 shadow-lg shadow-black/20">
                        <div className="relative overflow-hidden rounded-[12px] bg-black/80">
                          <Image
                            src={p.cover}
                            alt={p.client}
                            width={1280}
                            height={800}
                            className="h-auto w-full object-cover"
                            priority={i === 0}
                          />
                        </div>
                      </div>

                      {/* brilho suave ao passar o mouse */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                        style={{ background: "radial-gradient(60% 60% at 60% 40%, rgba(255,255,255,.35), transparent 70%)" }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
