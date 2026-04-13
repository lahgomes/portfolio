"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

const EDUCATION = [
  {
    icon: <GraduationCap size={20} />,
    degree: "Sistemas de Informação",
    institution: "UFOP — Universidade Federal de Ouro Preto",
    period: "2019 — 2024",
    description:
      "Formação com ênfase em desenvolvimento de software, banco de dados, engenharia de software e experiência do usuário.",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "Desenvolvimento React — Avançado",
    institution: "Curso Online",
    period: "2022",
    description:
      "Padrões avançados de React, Context API, hooks customizados, performance e testing com Vitest.",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "Next.js & TypeScript na prática",
    institution: "Curso Online",
    period: "2023",
    description:
      "App Router, Server Components, TypeScript avançado, SEO, deploy na Vercel e otimizações de Core Web Vitals.",
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
