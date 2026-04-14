"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectImages({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const list = project.images?.length
    ? project.images
    : project.image
    ? [project.image]
    : [];

  if (list.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-50 to-pink-100 text-rose-200">
        <ImageOff size={40} />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        key={list[current]}
        src={list[current]}
        alt={`${project.title} — imagem ${current + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-opacity duration-300"
      />
      {list.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + list.length) % list.length); }}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft size={14} className="text-zinc-700" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % list.length); }}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight size={14} className="text-zinc-700" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-1.5 pb-2 pt-5 bg-linear-to-t from-black/50 to-transparent">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const total = projects.length;

  if (total === 0) {
    return (
      <section id="projetos" className="py-8 px-5 sm:px-8 bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl">
          <SectionHeading label="Projetos" title="O que eu construí" />
          <p className="mt-8 text-center text-zinc-400 dark:text-zinc-500 text-sm">
            Em breve — adicione seus projetos em{" "}
            <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-xs font-mono text-rose-500">
              src/data/projects.ts
            </code>
          </p>
        </div>
      </section>
    );
  }

  const project = projects[active];
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section
      id="projetos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 px-5 sm:px-8 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center items-center  mb-10">
          <SectionHeading label="Projetos" title="O que já construí" />

        </div>

        <div className={`fade-up ${inView ? "visible" : ""}`}>
          <div
            className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative h-60 w-full shrink-0 overflow-hidden md:h-auto md:w-1/2">
                <ProjectImages project={project} />

              </div>

              <div className="flex flex-1 flex-col justify-between gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-rose-100 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-rose-500 transition-colors"
                    >
                      <GithubIcon size={15} />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      <ExternalLink size={15} />
                      Ver projeto
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {total > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Projeto anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:border-rose-300 hover:text-rose-500 transition-colors text-zinc-600 dark:text-zinc-300"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Projeto ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-2.5 bg-rose-500"
                        : "w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Próximo projeto"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:border-rose-300 hover:text-rose-500 transition-colors text-zinc-600 dark:text-zinc-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/lahgomes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:border-rose-200 hover:text-rose-500 transition-colors"
          >
            <GithubIcon size={15} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
