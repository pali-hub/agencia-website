"use client";

import { motion, easeOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

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
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:bg-white transition">
              <h3 className="text-lg font-medium mb-2">Experimentação</h3>
              <p className="text-sm text-gray-600">
                Testamos novas abordagens criativas e tecnológicas para encontrar soluções únicas.
              </p>
            </div>

            <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:bg-white transition">
              <h3 className="text-lg font-medium mb-2">Inovação</h3>
              <p className="text-sm text-gray-600">
                Desenvolvemos conceitos originais que destacam sua marca no mercado.
              </p>
            </div>

            <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:bg-white transition">
              <h3 className="text-lg font-medium mb-2">Prototipagem</h3>
              <p className="text-sm text-gray-600">
                Criamos protótipos rápidos para validar ideias antes da implementação final.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}