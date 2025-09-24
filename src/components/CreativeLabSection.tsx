"use client";

import { motion, easeOut, useReducedMotion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const imageVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

// Reduced motion variants
const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const imageVariantReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const cards = [
  {
    title: "Experimentação",
    description: "Testamos novas abordagens criativas e tecnológicas para encontrar soluções únicas.",
    image: "/images/projects/img1.png",
    alt: "Projeto de experimentação criativa",
    badge: "Lab"
  },
  {
    title: "Inovação", 
    description: "Desenvolvemos conceitos originais que destacam sua marca no mercado.",
    image: "/images/projects/img2.png",
    alt: "Projeto de inovação em design",
    badge: "Creative"
  },
  {
    title: "Prototipagem",
    description: "Criamos protótipos rápidos para validar ideias antes da implementação final.",
    image: "/images/projects/img3.png",
    alt: "Projeto de prototipagem rápida",
    badge: "Rapid"
  }
];

export default function CreativeLabSection() {
  // Detect if user prefers reduced motion
  const shouldReduceMotion = useReducedMotion();
  
  // Select appropriate animation variants based on user preference
  const fadeVariant = shouldReduceMotion ? fadeUpReduced : fadeUp;
  const cardVariant = shouldReduceMotion ? imageVariantReduced : imageVariant;
  
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ staggerChildren: shouldReduceMotion ? 0.02 : 0.08 }}
        >
          <motion.h2
            variants={fadeVariant}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Creative Lab
          </motion.h2>

          <motion.p
            variants={fadeVariant}
            className="mt-3 max-w-2xl text-gray-600"
          >
            Onde experimentamos, criamos e desenvolvemos ideias inovadoras para transformar sua marca.
          </motion.p>

          <motion.div
            variants={fadeVariant}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="group rounded-2xl border bg-white/70 backdrop-blur overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                tabIndex={0}
                role="article"
                aria-labelledby={`card-title-${index}`}
                aria-describedby={`card-description-${index}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className={`object-cover transition-all ${
                      shouldReduceMotion 
                        ? 'group-hover:brightness-105' 
                        : 'duration-500 group-hover:scale-105 group-hover:brightness-110'
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0} // Prioritize loading the first image
                  />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 
                      id={`card-title-${index}`}
                      className="text-lg font-medium leading-tight"
                    >
                      {card.title}
                    </h3>
                    <span className="rounded-full border px-2 py-0.5 text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      Explorar
                    </span>
                  </div>
                  <p 
                    id={`card-description-${index}`}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}