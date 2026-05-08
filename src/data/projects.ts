export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "TMJ — Track My Jobs",
    description:
      "Aplicação fullstack para organizar candidaturas de emprego. Registre vagas, acompanhe etapas do processo seletivo, controle o status e adicione anotações por candidatura. Um dashboard para te ajudar a gerenciar suas vagas de forma eficiente.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "Prisma", "PostgreSQL", "API Routes", "Zod"],
    images: [
      "/projects/track-my-jobs/tmj-landing-1.png",
      "/projects/track-my-jobs/tmj.png",
      "/projects/track-my-jobs/tmj-project-2.png",
      "/projects/track-my-jobs/tmj-project-3.png",
    ],
    live: "https://tmj-project.vercel.app/",
  },
    {
    title: "Pokédex",
    description:
      "Esse é o clássico projeto da Pokédex. Uma aplicação front-end para explorar e buscar informações sobre diferentes Pokémons utilizando a API do PokeAPI. Salve seus Pokémons favoritos, visualize informações detalhadas sobre cada um deles e filtre a listagem por tipo.",
    tags: ["React.js", "TypeScript", "Vite", "Styled-Components", "Jest", "React Testing Library"],
    images: [
      "/projects/pokedex/pokedex-1.png",
      "/projects/pokedex/pokedex-2.png",
      "/projects/pokedex/pokedex-3.png",
      "/projects/pokedex/pokedex-4.png",
    ],
    live: "https://pokedex-desafio-frontend.vercel.app/",
  },
];
