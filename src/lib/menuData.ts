export type MenuItem = {
  title: string;
  desc?: string;
  href: string;
  highlight?: boolean;
};

export type MenuSection = {
  title?: string;
  items: (MenuItem | MenuSection)[];
};

export const aboutMenu: MenuSection[] = [
  { title: "About", items: [
    { title: "Our Approach", desc: "How we work", href: "/about/approach" },
    { title: "Team", desc: "People behind the work", href: "/about/team" },
    { title: "Careers", desc: "Join us", href: "/about/careers" },
  ]},
];

export const projectsMenu: MenuSection[] = [
  {
    title: "Projects",
    items: [
      { title: "Case Studies", desc: "Selected work", href: "/projects" },
      { title: "Industries", desc: "What we focus on", href: "/industries" },
    ],
  },
];

export const servicesMenu: MenuSection[] = [
  { title: "Services",   items: [
    { title: "Website Design", desc: "UI • UX • Sites performáticos", href: "/services/website-design", highlight: true },
    { title: "Branding", desc: "Identidade e sistemas visuais", href: "/services/branding" , highlight: true},
    { title: "UX/UI Design", desc: "Interfaces que convertem", href: "/services/ux-ui", highlight: true },
    { title: "Subscription", desc: "Assinatura mensal flexível", href: "/services/subscription" , highlight: true},
  ]},
  { title: "Retainer Services", items: [
    { title: "Creative Subscription", desc: "Assinatura mensal flexível", href: "/retainer/creative-subscription", highlight: true },
    { title: "Content Design & Social", desc: "Conteúdo e redes sociais", href: "/retainer/content-social", highlight: true },
    { title: "Website as a Service", desc: "Site como serviço", href: "/retainer/website-service", highlight: true },
    { title: "Marketing Content", desc: "Conteúdo para marketing", href: "/retainer/marketing-content", highlight: true },
  ]},
  { title: "Ready-Made Solutions", items: [
    { title: "Templates e kits", desc: "Templates e kits prontos", href: "/ready-made/templates", highlight: true },
    { title: "Branding Pack", desc: "Pacote de identidade visual", href: "/ready-made/branding-pack", highlight: true },
    { title: "Superdesign.space", desc: "Design rápido e acessível", href: "/ready-made/design-space", highlight: true },
  ]},
  { title: "Other Creative Services", items: [
    { title: "Creative Direction", desc: "Direção criativa e storytelling", href: "/other-creative-services/creative-direction", highlight: true },
    { title: "Packaging", desc: "Design de embalagens impactantes", href: "/other-creative-services/packaging", highlight: true },
  ]},
];
