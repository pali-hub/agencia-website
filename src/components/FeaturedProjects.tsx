"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type FeaturedProject = {
  client: string;
  slug: string;
  tags: string[];
  backdrop: string;
  backdropRing?: string;
  cover: string;
  description?: string;
};

const covers = [
  { json: "/images/covers/img1.json", img: "/images/covers/img1.JPG" },
  { json: "/images/covers/img2.json", img: "/images/covers/img2.JPG" },
  // Adicione mais arquivos aqui!
];

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);

  useEffect(() => {
    Promise.all(
      covers.map(async ({ json, img }) => {
        const data = await fetch(json).then((res) => res.json());
        return { ...data, cover: img };
      })
    ).then(setProjects);
  }, []);

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-2xl border bg-white/70 backdrop-blur overflow-hidden hover:bg-white transition-all group shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.client}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <div className="text-gray-500 mb-2 text-sm">• {project.client}</div>
                <h2 className="font-bold text-xl mb-3 text-gray-800">{project.client}</h2>
                <p className="mb-4 text-gray-700 text-sm leading-relaxed">{project.description || ""}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
