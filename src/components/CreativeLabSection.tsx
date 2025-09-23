"use client";

import { motion, easeOut } from "framer-motion";

const projectCards = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    description: "Redesign completo de identidade visual para startup de tecnologia",
    image: "/images/project1.jpg", // placeholder - would use actual project images
    tags: ["Branding", "Visual Identity"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Plataforma de vendas online com foco em conversão e experiência do usuário",
    image: "/images/project2.jpg", // placeholder - would use actual project images
    tags: ["UX/UI", "Development"]
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "App mobile para gestão de finanças pessoais com interface intuitiva",
    image: "/images/project3.jpg", // placeholder - would use actual project images
    tags: ["Mobile", "UI Design"]
  }
];

const phrases = [
  "Onde criatividade encontra estratégia",
  "Transformamos ideias em realidades digitais",
  "Cada projeto é uma nova descoberta"
];

const variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut }
  },
};

export default function CreativeLabSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.h2
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Creative Lab
        </motion.h2>

        <motion.p
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={variants}
          className="mt-3 max-w-2xl text-gray-600"
        >
          Onde ideias ganham forma
        </motion.p>

        {/* Phrases Block */}
        <motion.div
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 md:mt-16 space-y-6"
        >
          {phrases.map((phrase, index) => (
            <motion.div
              key={`phrase-${index}`}
              variants={variants}
              className="text-lg md:text-xl text-gray-700 font-light leading-relaxed"
            >
              {phrase}
            </motion.div>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          transition={{ staggerChildren: 0.1 }}
          className="mt-16 md:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectCards.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="group rounded-2xl border bg-white/70 backdrop-blur p-6 hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-gray-400 text-sm">Project Image</div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium leading-tight group-hover:text-gray-900 transition">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${project.id}-${tag}-${tagIndex}`}
                      className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
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