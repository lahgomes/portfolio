"use client";

import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

const SKILLS = [
  {
    category: "Frontend",
    items: [
      "HTML5", "CSS3", "JavaScript", "TypeScript",
      "React", "Next.js", "Tailwind CSS",
      "Styled-Components", "SASS", "React Query", "React Hooks",
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
    category: "Ferramentas",
    items: [
      "Git & GitHub", "Figma", "Storybook", "Sentry",
      "Jest", "GitHub Actions", "Docker", "Canva", "Scrum / Kanban",
    ],
  },
  {
    category: "Em evolução",
    items: ["Python", "Node.js", "Flask", "PostgreSQL"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-5 sm:px-8 bg-zinc-50"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Skills" title="Tecnologias & Ferramentas" />

        <div
          className={`mt-12 flex flex-col gap-8 fade-up ${inView ? "visible" : ""}`}
        >
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm hover:border-rose-200 hover:text-rose-500 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
