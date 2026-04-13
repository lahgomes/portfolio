export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string; // coloque em /public/projects/nome-do-arquivo.png
  github?: string;
  live?: string; // link da Vercel ou qualquer deploy
}

export const projects: Project[] = [
  // Adicione seus projetos aqui! Exemplo:
  // {
  //   title: "Meu Projeto",
  //   description: "Breve descrição do que o projeto faz e qual problema resolve.",
  //   tags: ["React", "TypeScript", "Tailwind"],
  //   image: "/projects/meu-projeto.png",
  //   github: "https://github.com/larissagomes/meu-projeto",
  //   live: "https://meu-projeto.vercel.app",
  // },
];
