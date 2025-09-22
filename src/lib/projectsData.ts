export type ProjectTag = "Web Design" | "Webflow Dev" | "Branding" | "UI/UX";

export type FeaturedProject = {
  client: string;                // "AI, US" | "Industrial Solutions, SA"
  slug: string;                  // rota do case
  cover: string;                 // /images/covers/gen.png
  tags: ProjectTag[];
  // classes tailwind para o fundo do cartão da direita
  backdrop: string;              // ex: "from-[#3c2a7a] to-[#1c2560]"
  backdropRing?: string;         // opcional: cor da moldura fina
};

export const featuredProjects: FeaturedProject[] = [
  {
    client: "AI, US",
    slug: "gen-platform",
    cover: "/images/covers/gen.png",
    tags: ["Web Design"],
    backdrop: "from-[#46307F] to-[#1F2A69]",         // roxo → azul escuro
    backdropRing: "ring-white/10",
  },
  {
    client: "Industrial Solutions, SA",
    slug: "evosolar",
    cover: "/images/covers/evosolar.png",
    tags: ["Web Design", "Webflow Dev"],
    backdrop: "from-[#E7E5D8] to-[#D8D6C7]",         // bege
    backdropRing: "ring-black/5",
  },
];
