"use client";
import { motion, easeOut } from "framer-motion";

const items = [
  { title: "Website Design", desc: "UI • UX • Sites performáticos", href: "/services/website-design" },
  { title: "Branding", desc: "Identidade e sistemas visuais", href: "/services/branding" },
  { title: "UX/UI Design", desc: "Interfaces que convertem", href: "/services/ux-ui" },
  { title: "Subscription", desc: "Assinatura mensal flexível", href: "/services/subscription" },

  { title: "Creative Subscription", desc: "Assinatura mensal flexível", href: "/retainer/creative-subscription" },
  { title: "Content Design & Social", desc: "Conteúdo e redes sociais", href: "/retainer/content-social" },
  { title: "Website as a Service", desc: "Site como serviço", href: "/retainer/website-service" },
  { title: "Marketing Content", desc: "Conteúdo para marketing", href: "/retainer/marketing-content" },

  { title: "Templates e kits", desc: "Templates e kits prontos", href: "/ready-made/templates", highlight: true },
  { title: "Branding Pack", desc: "Pacote de identidade visual", href: "/ready-made/branding-pack" },
  { title: "Superdesign.space", desc: "Design rápido e acessível", href: "/ready-made/design-space" },

  { title: "Creative Direction", desc: "Direção criativa e storytelling", href: "/other-creative-services/creative-direction" },
  { title: "Packaging", desc: "Design de embalagens impactantes", href: "/other-creative-services/packaging" },
];

const variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

export default function Services() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Serviços
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={variants}
          className="mt-3 max-w-2xl text-gray-600"
        >
          Estratégia, design e desenvolvimento com foco em resultado.
        </motion.p>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.06 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div key={it.title} variants={variants}>
              <a
                href={it.href}
                className="group rounded-2xl border bg-white/70 backdrop-blur p-5 hover:bg-white transition block"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium leading-tight">{it.title}</h3>
                  <span className="rounded-full border px-2 py-0.5 text-xs opacity-70 group-hover:opacity-100 transition">
                    Ver
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
