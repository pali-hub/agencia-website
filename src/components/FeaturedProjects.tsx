"use client";

import { useEffect, useState } from "react";

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
  // Adicione mais arquivos aqui caso existam!
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
    <section className="grid md:grid-cols-2 gap-10 py-12">
      {projects.map((project, idx) => (
        <div
          key={project.slug}
          className={`rounded-3xl p-6 bg-gradient-to-br ${project.backdrop} ring-8 ${project.backdropRing} flex flex-col md:flex-row gap-6 items-center`}
        >
          <img
            src={project.cover}
            alt={project.client}
            className="w-full md:w-2/3 rounded-2xl shadow-lg"
          />
          <div className="flex-1">
            <div className="text-gray-500 mb-2">• {project.client}</div>
            <h2 className="font-bold text-xl mb-2">{project.client}</h2>
            <p className="mb-3">{project.description || ""}</p>
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
        </div>
      ))}
    </section>
  );
}
