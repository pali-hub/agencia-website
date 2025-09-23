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
    <section className="flex flex-col gap-10 py-12 px-2 sm:px-0">
      {projects.map((project) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl bg-white/30 border border-gray-200 backdrop-blur shadow-lg flex flex-col md:flex-row gap-6 items-center p-6 mx-auto max-w-3xl"
        >
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={project.cover}
              alt={project.client}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="text-gray-500 mb-2">• {project.client}</div>
            <h2 className="font-bold text-2xl mb-2 text-gray-800">{project.client}</h2>
            <p className="mb-3 text-gray-700">{project.description || ""}</p>
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
    </section>
  );
}
