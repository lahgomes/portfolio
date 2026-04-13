export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  github?: string;
  live?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "TMJ — Track My Jobs",
    description:
      "Aplicação fullstack para organizar candidaturas de emprego. Registre vagas, acompanhe etapas do processo seletivo, adicione anotações por candidatura e controle o status em tempo real. Dashboard com visão geral completa.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Prisma"],
    images: [
      "/projects/tmj-landing-1.png",
      "/projects/tmj.png",
      "/projects/tmj-project-2.png",
      "/projects/tmj-project-3.png",
    ],
    live: "https://tmj-project.vercel.app/",
    highlight: true,
  },
];
