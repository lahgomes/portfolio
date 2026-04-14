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

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Desenvolvedora Front-end",
    company: "Promobit",
    period: "Mar 2022 — Fev 2026",
    location: "Remoto",
    bullets: [
      "Evolução de Produto: desenvolvimento e otimização de funcionalidades na plataforma web, melhoria de arquitetura de componentes, UX e validação via testes A/B orientados a métricas.",
      "Performance e SEO: implementação de estratégias de Core Web Vitals e SEO técnico com SemRush e Google Search Console para melhorar o ranqueamento orgânico.",
      "Design System: desenvolvimento e manutenção do Design System da empresa via Storybook, garantindo consistência visual entre times de UI/UX e engenharia.",
      "Monitoramento e observabilidade: gestão de bugs e observabilidade em tempo real com Sentry, reduzindo o tempo de resposta a incidentes.",
      "Projeto interno 'Pricer': desenvolvimento em Python para scraping de lojas e validação de ofertas, com arquitetura modular (crawlers, serviços e rede), Web API em Flask, Selenium, proxies Webshare e monitoramento com Sentry.",
    ],
    tags: ["Next.js", "Tailwind CSS", "React Query", "TypeScript", "Storybook", "Sentry", "Python", "Docker"],
  },
  {
    role: "Desenvolvedora Front-end Jr.",
    company: "Projeto Toraline",
    period: "Out 2021 — Fev 2022",
    location: "Santos, SP",
    bullets: [
      "Desenvolvimento de plataforma educacional com React e Next.js",
      "Criação de landing pages e interfaces responsivas mobile-first",
      "Integração com APIs REST e gestão de estado",
    ],
    tags: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Scrum"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experiencia"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 px-5 sm:px-8 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Experiência" title="Trajetória profissional" />

        <div
          className={`mt-12 flex flex-col gap-0 fade-up ${inView ? "visible" : ""}`}
        >
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-rose-400 bg-white dark:bg-zinc-900" />
                {i < EXPERIENCE.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
                )}
              </div>

              <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-sm hover:shadow-md transition-shadow mb-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                    <p className="text-sm font-semibold text-rose-500">{item.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.period}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">{item.location}</p>
                  </div>
                </div>

                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 text-[11px] font-medium text-rose-600 dark:text-rose-400"
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
