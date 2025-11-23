"use client";
import React from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  items: string[];                 // textos que vão desfilar
  direction?: "left" | "right";
  speed?: number;                  // duração do loop em segundos
  className?: string;
  fadeEdges?: boolean;             // adiciona fade nas bordas
};

export default function Marquee({
  items,
  direction = "left",
  speed = 20,
  className = "",
  fadeEdges = true,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  
  // Duplicamos o conteúdo para loop contínuo - triplo para garantir fluidez
  const content = [...items, ...items, ...items];

  // Ajusta velocidade baseada na preferência de movimento reduzido
  const animationSpeed = shouldReduceMotion ? speed * 3 : speed;
  
  return (
    <div 
      className={`w-full overflow-hidden select-none ${fadeEdges ? 'edge-fade' : ''} ${className}`}
      style={fadeEdges ? { '--fade-x': '32px' } as React.CSSProperties : undefined}
    >
      <div
        className="marquee-track flex whitespace-nowrap will-change-transform"
        style={{
          animation: shouldReduceMotion 
            ? 'none'
            : `${direction === "left" ? "marquee-left" : "marquee-right"} ${animationSpeed}s linear infinite`,
        }}
        role="marquee"
        aria-label={`Scrolling text: ${items.join(', ')}`}
      >
        {content.map((text, i) => (
          <span
            key={i}
            className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide uppercase flex-shrink-0"
            aria-hidden={i >= items.length} // Oculta duplicatas do leitor de tela
          >
            / {text}
          </span>
        ))}
      </div>
    </div>
  );
}
