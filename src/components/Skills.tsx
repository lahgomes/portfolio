"use client";

import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

const SKILLS = [
  { name: "HTML & CSS", level: 95, color: "from-orange-400 to-rose-400" },
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
  { name: "React", level: 92, color: "from-cyan-400 to-sky-500" },
  { name: "Next.js", level: 88, color: "from-zinc-600 to-zinc-800" },
  { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
  { name: "SEO & Performance", level: 80, color: "from-rose-400 to-pink-500" },
  { name: "Git & GitHub", level: 85, color: "from-pink-500 to-rose-500" },
  { name: "Node.js", level: 65, color: "from-green-500 to-emerald-600" },
  { name: "Figma", level: 72, color: "from-violet-400 to-purple-500" },
];

const TOOLS = [
  "VS Code", "Vite", "pnpm", "ESLint", "Prettier",
  "Vitest", "React Testing Library", "Storybook",
  "Vercel", "REST APIs", "Postgres", "Prisma",
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
          className={`mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 fade-up ${inView ? "visible" : ""}`}
        >
          {SKILLS.map((skill, i) => (
            <div key={skill.name} className={`flex flex-col gap-2 delay-${Math.min(i + 1, 4)}`}>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-zinc-800">{skill.name}</span>
                <span className="text-zinc-400 tabular-nums">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-200 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-14 fade-up ${inView ? "visible delay-4" : ""}`}>
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-zinc-400">
            Ferramentas do dia a dia
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm hover:border-rose-200 hover:text-rose-500 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
