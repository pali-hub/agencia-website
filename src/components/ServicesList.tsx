"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { servicesMenu } from "@/lib/menuData";
import { flattenAllSections } from "@/lib/flattenMenu";

// Animation variants consistent with other components
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesList() {
  const serviceCategories = flattenAllSections(servicesMenu);

  return (
    <section
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Header section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
        variants={staggerContainer}
      >
        {/* Marker above title */}
        <motion.span 
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-2"
        >
          <span className="size-1.5 rounded-full bg-neutral-900" />
          Our services
        </motion.span>

        {/* Visual breathing space */}
        <div className="h-4" />

        {/* Main heading */}
        <motion.h2
          variants={fadeUp}
          id="services-heading"
          className="mb-8 text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl"
        >
          We create solutions but most
          <br className="hidden sm:block" />
          importantly we identify problems.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-12 max-w-2xl text-base text-neutral-600"
        >
          From strategic branding to cutting-edge development, our comprehensive services 
          are designed to elevate your digital presence and drive meaningful results.
        </motion.p>
      </motion.div>

      {/* Service categories */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="space-y-16"
      >
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div key={category.title} variants={fadeUp}>
            {/* Category title */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                {category.title}
              </h3>
              <div className="h-px bg-gradient-to-r from-neutral-200 to-transparent" />
            </div>

            {/* Services list for this category */}
            <ul role="list" className="space-y-1">
              {category.items.map((service, serviceIndex) => {
                const globalIndex = categoryIndex * 10 + serviceIndex + 1;
                return (
                  <li key={service.href} className="group">
                    <Link
                      href={service.href}
                      aria-label={`Ver ${service.title}`}
                      className="
                        flex items-center justify-between gap-4 py-4 px-4 -mx-4
                        rounded-xl outline-none transition-all duration-200
                        hover:bg-neutral-50/80 hover:backdrop-blur
                        focus-visible:ring-2 focus-visible:ring-neutral-900/20
                        focus-visible:bg-neutral-50/80
                      "
                    >
                      <div className="flex items-center gap-6">
                        <span className="
                          w-8 text-sm tabular-nums text-neutral-400
                          transition-colors duration-200 group-hover:text-neutral-600
                        ">
                          {String(globalIndex).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <span className="
                            text-base font-medium text-neutral-900 block
                            transition-colors duration-200 group-hover:text-neutral-700
                          ">
                            {service.title}
                          </span>
                          {service.desc && (
                            <span className="
                              text-sm text-neutral-500 block mt-1
                              transition-colors duration-200 group-hover:text-neutral-600
                            ">
                              {service.desc}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {service.highlight && (
                          <span className="
                            inline-flex items-center px-2 py-1 rounded-full text-xs
                            bg-neutral-100 text-neutral-600 font-medium
                            transition-all duration-200
                            group-hover:bg-neutral-200 group-hover:text-neutral-700
                          ">
                            Featured
                          </span>
                        )}
                        <span
                          aria-hidden
                          className="
                            text-xl leading-none transition-all duration-200
                            text-neutral-400 group-hover:text-neutral-600
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 text-center"
      >
        <p className="text-sm text-neutral-500 mb-4">
          Need something specific? Let&apos;s discuss your project.
        </p>
        <Link
          href="#contato"
          className="
            inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
            rounded-xl border border-neutral-300 text-neutral-900
            transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400
            focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:outline-none
          "
        >
          Get in touch
          <span aria-hidden className="text-base">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
