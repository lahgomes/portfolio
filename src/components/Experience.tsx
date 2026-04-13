"use client";

import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

// ✏️  Edite com seus dados reais de experiência
const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Desenvolvedora Front-end",
    company: "Adicione sua empresa",
    period: "2024 — Presente",
    location: "Remoto",
    bullets: [
      "Desenvolvimento de interfaces com React e Next.js",
      "Implementação de melhorias de SEO e Core Web Vitals",
      "Colaboração com designers no Figma para entrega pixel-perfect",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Desenvolvedora Front-end Jr.",
    company: "Adicione sua empresa",
    period: "2022 — 2024",
    location: "Santos, SP",
    bullets: [
      "Criação de landing pages e dashboards responsivos",
      "Integração com APIs REST e gestão de estado com React Query",
      "Participação em code reviews e adoção de boas práticas",
    ],
    tags: ["React", "JavaScript", "CSS", "REST APIs"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experiencia"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-5 sm:px-8 bg-zinc-50"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Experiência" title="Trajetória profissional" />

        <div
          className={`mt-12 flex flex-col gap-0 fade-up ${inView ? "visible" : ""}`}
        >
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="relative flex gap-5 pb-10 last:pb-0">
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <div className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-rose-400 bg-white" />
                {i < EXPERIENCE.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-zinc-200" />
                )}
              </div>

              {/* Card */}
              <div className="w-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow mb-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900">{item.role}</h3>
                    <p className="text-sm font-semibold text-rose-500">{item.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-medium text-zinc-500">{item.period}</p>
                    <p className="text-xs text-zinc-400">{item.location}</p>
                  </div>
                </div>

                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
