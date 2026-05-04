"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { twJoin } from "tailwind-merge";

const TAGS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "SEO Técnico", "Core Web Vitals", "Performance Web", "SSR",
  "Design System", "Styled-Components", "Node.js", "Python"
];

function ProfilePhoto() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-100 to-pink-50 text-7xl select-none">
        👩‍💻
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Foto de Larissa Gomes"
      fill
      sizes="(max-width: 640px) 288px, 320px"
      className="object-cover object-center"
      priority
      onError={() => setError(true)}
    />
  );
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="sobre"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 px-5 sm:px-8 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Sobre mim" title="Prazer, sou a Larissa!" />

        <div
          className={twJoin("mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center fade-up", inView && "visible")}
        >

          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-linear-to-br from-rose-200 via-pink-100 to-rose-50 dark:from-rose-900/40 dark:via-pink-900/20 dark:to-zinc-800 -z-10" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full sm:h-80 sm:w-80">
                <ProfilePhoto />
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-5">
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Sou desenvolvedora front-end com 4 anos de experiência em{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">React, Next.js e TypeScript</strong>,
              construindo produtos web com foco em performance, SEO técnico e experiência do usuário.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Já atuei na evolução de produtos e arquitetura de componentes,
              implementei estratégias de{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">Core Web Vitals</strong>{" "}
              que melhoraram a performance do site e também já construi um {" "}
              <strong className="text-zinc-800 dark:text-zinc-100">Design System</strong>{" "}

            </p>

            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Atualmente, estou expandindo meus conhecimentos como desenvolvedora <strong className="text-zinc-800 dark:text-zinc-100">Full Stack</strong> com{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">Node.js, Banco de Dados e Python</strong>. </p>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed"> Além disso, estou me especializando
              cursando uma pós-graduação em{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">Inteligência Artificial e Ciência de Dados</strong>{" "} </p>



            <div className="flex flex-wrap gap-2 pt-1">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rose-100 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-900/20 px-3 py-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/cv-larissa-gomes.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-200 hover:bg-rose-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Currículo
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:border-rose-200 hover:text-rose-500 transition-colors"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
        {label}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-1 h-1 w-10 rounded-full bg-linear-to-r from-rose-400 to-pink-300" />
    </div>
  );
}
