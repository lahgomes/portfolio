export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Imagem principal — coloque em /public/projects/nome.png */
  image?: string;
  /** Imagens extras para galeria — coloque em /public/projects/ */
  images?: string[];
  github?: string;
  /** URL do deploy (Vercel, etc.) */
  live?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "TMJ — Track My Jobs",
    description:
      "Aplicação fullstack para organizar candidaturas de emprego. Registre vagas, acompanhe etapas do processo seletivo, adicione anotações por candidatura e controle o status em tempo real. Dashboard com visão geral completa.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Prisma"],
    image: "/projects/tmj.png",
    images: [
      "/projects/tmj.png",
      "/projects/tmj-landing-1.png",
      "/projects/tmj-project-2.png",
      "/projects/tmj-project-3.png",
    ],
    live: "https://tmj-project.vercel.app/",
    highlight: true,
  },
  // Adicione seus próximos projetos aqui! Exemplo:
  // {
  //   title: "Nome do Projeto",
  //   description: "Breve descrição do que o projeto faz e qual problema resolve.",
  //   tags: ["React", "TypeScript"],
  //   image: "/projects/nome.png",
  //   github: "https://github.com/lahgomes/nome",
  //   live: "https://nome.vercel.app",
  // },
];
