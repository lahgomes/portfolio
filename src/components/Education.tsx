"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

const EDUCATION = [
  {
    icon: <GraduationCap size={20} />,
    degree: "Pós-Graduação em IA e Ciência de Dados",
    institution: "Universidade Anhembi Morumbi — SP",
    period: "2025 — 2027 (cursando)",
    description:
      "Especialização em inteligência artificial, machine learning e análise de dados, com aplicação prática em projetos reais.",
  },
  {
    icon: <GraduationCap size={20} />,
    degree: "Bacharelado em Arquitetura e Urbanismo",
    institution: "UFOP — Universidade Federal de Ouro Preto",
    period: "Concluído em 2018",
    description:
      "Formação multidisciplinar com foco em projeto, planejamento urbano e pensamento sistêmico — base sólida para UX e design de interfaces.",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "Cursos de Especialização",
    institution: "Anthropic · Origamid · Alura · DIO",
    period: "2021 — 2025",
    description:
      "Claude Code in Action (Anthropic), Node.js, JS ES6 e CSS Flexbox (Origamid), Imersão Front-end (Alura), HTML, Git e Lógica de Programação (DIO).",
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section
      id="educacao"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-5 sm:px-8 bg-white"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Educação" title="Formação & Cursos" />

        <div
          className={`mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 fade-up ${inView ? "visible" : ""}`}
        >
          {EDUCATION.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 hover:border-rose-200 hover:shadow-md transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-500">{item.period}</p>
                <h3 className="mt-1 text-sm font-bold text-zinc-900">{item.degree}</h3>
                <p className="mt-0.5 text-xs text-zinc-400">{item.institution}</p>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
