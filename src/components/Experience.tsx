import { SectionHeading } from "./About";
import { FadeIn } from "./FadeIn";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Desenvolvedora Front-end",
    company: "Promobit",
    period: "Mar 2022 — Fev 2026",
    bullets: [
      "Desenvolveu e evoluiu funcionalidades em React.js e Next.js em plataforma de alto tráfego, contribuindo para escalabilidade front-end, reutilização de componentes e evolução da experiência do usuário;",
      "Implementou estratégias de SEO técnico e otimizações de Core Web Vitals utilizando SSR, JSON-LD e análises via Lighthouse, Search Console e SEMrush, contribuindo para evolução do tráfego orgânico e experiência do usuário;",
      "Atuou na criação e evolução do Design System da empresa via Storybook, aumentando reutilização de componentes e garantindo consistência visual entre squads de produto e engenharia;",
      "Participou da migração de estilização de Emotion para Tailwind CSS, contribuindo para redução de runtime JavaScript, melhoria de performance da aplicação;",
      "Implementou estratégias de testes A/B com controle via cookies para validação de hipóteses e análise de impacto em métricas de produto;",
      "Estruturou monitoramento e observabilidade front-end utilizando Sentry e AWS Lambda, melhorando rastreabilidade de erros e reduzindo tempo de identificação e resolução de incidentes;",
      "Desenvolveu e manteve o projeto Pricer, uma ferramenta interna em Python para web scraping e validação de ofertas de lojas, utilizando Flask, Selenium, proxies Webshare, Docker e arquitetura modular baseada em crawlers e serviços, resultando no aumento da confiabilidade e escalabilidade do processo de entrada e validação de ofertas no site.",
    ],
    tags: ["Next.js", "Tailwind CSS", "TanStack React Query", "TypeScript", "Storybook", "Sentry", "Python", "Docker", "SemRush", "Testes A/B", "SEO Técnico", "Core Web Vitals", "AWS Lambda", "GitHub Actions"],
  },
  {
    role: "Desenvolvedora Front-end Jr",
    company: "Projeto Toraline",
    period: "Out 2021 — Fev 2022",
    bullets: [
      "Desenvolveu uma plataforma educacional com React e Next.js",
      "Criou landing pages e interfaces responsivas mobile-first",
      "Integrou com APIs REST e gestão de estado",
    ],
    tags: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Scrum"],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-8 px-5 sm:px-8 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Experiência" title="Trajetória profissional" />

        <FadeIn className="mt-12 flex flex-col gap-0">
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
        </FadeIn>
      </div>
    </section>
  );
}
