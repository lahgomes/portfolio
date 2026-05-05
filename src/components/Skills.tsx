import { SectionHeading } from "./About";
import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    category: "Frontend",
    items: [
      "HTML5", "CSS3", "JavaScript", "TypeScript",
      "React", "Next.js", "Tailwind CSS", "Vite",
      "Styled-Components", "SASS", "React Query", "React Hooks", "Git","Jest", "React Testing Library", "Server-Side Rendering (SSR)", "API REST"
    ],
  },
  {
    category: "Performance & SEO",
    items: [
      "Core Web Vitals", "SEO Técnico", "Google Lighthouse",
      "Google Search Console", "Google Analytics", "SEMrush",
    ],
  },
  {
    category: "Ferramentas & Observabilidade",
    items: [
      "GitHub", "Figma", "Storybook", "Sentry", "GitHub Actions", "Docker", "CI/CD"
    ],
  },
   {
    category: "Metodologias Ágeis",
    items: [
      "Scrum", "Kanban"
    ],
  },
  {
    category: "Em evolução",
    items: ["Python", "Node.js", "Express", "Banco de Dados", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-8 px-5 sm:px-8 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Skills" title="Tecnologias & Ferramentas" />

        <FadeIn className="mt-12 flex flex-col gap-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 shadow-sm hover:border-rose-200 hover:text-rose-500 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
