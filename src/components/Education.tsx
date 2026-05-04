"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";
import { twJoin } from "tailwind-merge";

const FORMATION = [
  {
    icon: <GraduationCap size={20} />,
    degree: "Pós-Graduação em IA e Ciência de Dados",
    institution: "Universidade Anhembi Morumbi — SP",
    period: "2026 — 2027 (cursando)",
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
];

const COURSES = [
  {
    icon: <BookOpen size={20} />,
    degree: "Claude Code in Action",
    institution: "Anthropic",
    period: "2026",
    description:
      "Desenvolvimento de aplicações com Claude Code e integração de fluxos de desenvolvimento assistidos por IA.",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "Backend com Node.js",
    institution: "Origamid",
    period: "2026",
    description:
      "Backend com Node, criação de APIs que repondem a JSON, Rotas, Autenticação, Middlewares e Streams",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "Imersão Front-end",
    institution: "Alura",
    period: "2024",
    description:
      "Intensivo de front-end com React, boas práticas de desenvolvimento web e criação de um chat de conversas ao vivo com Supabase.",
  },
    {
    icon: <BookOpen size={20} />,
    degree: "JavaScript ES6",
    institution: "Origamid",
    period: "2022",
    description:
      "Fundamentos modernos de JavaScript, Node.js e layout responsivo com CSS Flexbox.",
  },
   {
    icon: <BookOpen size={20} />,
    degree: "CSS Flexbox",
    institution: "Origamid",
    period: "2021",
    description:
      "Fundamentos do CSS e layout responsivo com CSS Flexbox.",
  },
  {
    icon: <BookOpen size={20} />,
    degree: "HTML, Git e Lógica de Programação",
    institution: "DIO",
    period: "2021",
    description:
      "Fundamentos de desenvolvimento web: HTML estrutural, versionamento com Git e lógica de programação.",
  },
];

const TABS = ["Formação Acadêmica", "Cursos & Certificados"] as const;
type Tab = (typeof TABS)[number];

export default function Education() {
  const { ref, inView } = useInView();
  const [activeTab, setActiveTab] = useState<Tab>("Formação Acadêmica");

  const items = activeTab === "Formação Acadêmica" ? FORMATION : COURSES;

  return (
    <section
      id="educacao"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 px-5 sm:px-8 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Educação" title="Formação & Cursos" />

        <div className="mt-10 flex w-fit mx-auto gap-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={twJoin(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                activeTab === tab
                  ? "bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className={twJoin("mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 fade-up", inView && "visible")}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-6 hover:border-rose-200 hover:shadow-md transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-500">{item.period}</p>
                <h3 className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.degree}</h3>
                <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">{item.institution}</p>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
