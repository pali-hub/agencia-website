"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const imageVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const cards = [
  {
    title: "Experimentação",
    description: "Testamos novas abordagens criativas e tecnológicas para encontrar soluções únicas.",
    image: "/images/projects/img1.png",
    alt: "Projeto de experimentação criativa"
  },
  {
    title: "Inovação", 
    description: "Desenvolvemos conceitos originais que destacam sua marca no mercado.",
    image: "/images/projects/img2.png",
    alt: "Projeto de inovação em design"
  },
  {
    title: "Prototipagem",
    description: "Criamos protótipos rápidos para validar ideias antes da implementação final.",
    image: "/images/projects/img3.png",
    alt: "Projeto de prototipagem rápida"
  }
];

export default function CreativeLabSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Creative Lab
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl text-gray-600"
          >
            Onde experimentamos, criamos e desenvolvemos ideias inovadoras para transformar sua marca.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={imageVariant}
                className="rounded-2xl border bg-white/70 backdrop-blur overflow-hidden hover:bg-white transition group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">
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