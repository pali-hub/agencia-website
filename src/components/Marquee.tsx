"use client";
import React from "react";

type Props = {
  items: string[];                 // textos que vão desfilar
  direction?: "left" | "right";
  speed?: number;                  // duração do loop em segundos
  className?: string;
};

export default function Marquee({
  items,
  direction = "left",
  speed = 20,
  className = "",
}: Props) {
  // Duplicamos o conteúdo para loop contínuo
  const content = [...items, ...items];

  return (
    <div className={`w-full overflow-hidden select-none ${className}`}>
      <div
        className="marquee-track flex whitespace-nowrap will-change-transform"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
        }}
      >
        {content.map((t, i) => (
          <span
            key={i}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl md:text-2xl tracking-wide uppercase"
          >
            / {t}
          </span>
        ))}
      </div>
    </div>
  );
}
