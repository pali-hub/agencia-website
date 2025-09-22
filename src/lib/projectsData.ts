export type ProjectTag = "Web Design" | "Webflow Dev" | "Branding" | "UI/UX";

export type FeaturedProject = {
  client: string;
  slug: string;
  cover: string; // caminho da imagem
  tags: ProjectTag[];
  backdrop: string;
  backdropRing?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    client: "Nome do Cliente",
    slug: "slug-do-projeto",
    cover: "/images/covers/img1.png", // ou img2.jpg, img3.webp
    tags: ["Web Design", "Branding"],
    backdrop: "from-[#46307F] to-[#1F2A69]",
    backdropRing: "ring-white/10"
  },
  {
    client: "Outro Cliente",
    slug: "slug-do-outro",
    cover: "/images/covers/img2.jpg",
    tags: ["UI/UX"],
    backdrop: "from-[#E7E5D8] to-[#D8D6C7]",
    backdropRing: "ring-black/5"
  },
  // Adicione outros projetos conforme necessário
];
