"use client";

import { useEffect, useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import { FeaturedProject } from "@/lib/projectsData";

export default function FeaturedProjectsContainer() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/featured-projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section aria-labelledby="featured-title" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[28px] border border-black/[.06] bg-white/50 backdrop-blur">
          <div className="p-5 sm:p-8 md:p-10">
            <span className="inline-flex items-center gap-2 text-sm text-neutral-600">
              <span className="size-2 rounded-full bg-neutral-900" />
              Loading featured projects...
            </span>
          </div>
        </div>
      </section>
    );
  }

  return <FeaturedProjects projects={projects} />;
}