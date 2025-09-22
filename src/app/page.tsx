"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import ServicesList from "@/components/ServicesList";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70svh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Experiências digitais claras e bonitas
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-6 max-w-[38rem] text-base sm:text-lg text-gray-600 mx-auto px-2"
          >
            Estratégia, design e desenvolvimento para marcas que querem
            modernidade sem complicação.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contato"
            className="mt-6 sm:mt-8 inline-block rounded-xl border border-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-100 transition"
          >
            Falar agora
          </motion.a>
        </motion.div>
      </section>

      {/* FAIXA MARQUEE */}
      <Marquee
        items={[
          "Strategic experiences",
          "Results driven solutions",
          "Business value",
          "Purposeful design",
        ]}
        direction="left"
        speed={28}
        className="border-y"
      />

      <div className="hidden sm:block">
        <Marquee
          items={["Branding", "Web design", "UI • UX", "Development"]}
          direction="right"
          speed={26}
          className="border-b bg-white/60 backdrop-blur"
        />
      </div>

      <ServicesList />
    </main>
  );
}
