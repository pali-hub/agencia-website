import Link from "next/link";
import { servicesMenu } from "@/lib/menuData"; // onde você declarou
import { flattenFirstSection } from "@/lib/flattenMenu";

export default function ServicesList() {
  const services = flattenFirstSection(servicesMenu); // ou flattenMenuHighlights / flattenMenu

  return (
    <section
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* marcador acima do título, sempre visível */}
      <span className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-2">
        <span className="size-1.5 rounded-full bg-neutral-900" />
        Our services
      </span>

      {/* espaço de respiro visual */}
      <div className="h-4" />

      <h2
        id="services-heading"
        className="mb-8 text-2xl font-medium tracking-tight sm:text-3xl"
      >
        We create solutions but most
        <br className="hidden sm:block" />
        importantly we identify problems.
      </h2>

      <ul role="list" className="divide-y divide-neutral-200">
        {services.map((s, i) => (
          <li key={s.href} className="group">
            <Link
              href={s.href}
              aria-label={`Ver ${s.title}`}
              className="
                flex items-center justify-between gap-4 py-5 outline-none
                focus-visible:ring-2 focus-visible:ring-neutral-900/20
              "
            >
              <div className="flex items-center gap-6">
                <span className="w-8 text-sm tabular-nums text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium text-neutral-900">
                  {s.title}
                </span>
              </div>
              <span
                aria-hidden
                className="
                  text-xl leading-none transition-transform duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
            {s.desc && (
              <p className="pl-[calc(2rem+1.5ch)] pb-4 -mt-3 text-sm text-neutral-500">
                {s.desc}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
