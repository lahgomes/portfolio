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
      <section id="projetos" className="py-24 px-5 sm:px-8 bg-white">
        <div className="mx-auto max-w-5xl">
          <SectionHeading label="Projetos" title="O que eu construí" />
          <p className="mt-8 text-center text-zinc-400 text-sm">
            Em breve — adicione seus projetos em{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-rose-500">
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
      className="py-24 px-5 sm:px-8 bg-white"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="Projetos" title="O que eu construí" />
          {total > 1 && (
            <span className="text-sm font-mono text-zinc-400 pb-1 shrink-0">
              {String(active + 1).padStart(2, "0")}{" "}
              <span className="text-zinc-200">/</span>{" "}
              {String(total).padStart(2, "0")}
            </span>
          )}
        </div>

        <div className={`fade-up ${inView ? "visible" : ""}`}>
          <div
            className={`overflow-hidden rounded-2xl border bg-zinc-50 ${
              project.highlight ? "border-rose-200 shadow-md shadow-rose-100/60" : "border-zinc-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative h-60 w-full shrink-0 overflow-hidden md:h-auto md:w-1/2">
                <ProjectImages project={project} />
                {project.highlight && (
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-rose-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                    Destaque
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-rose-100 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 hover:text-rose-500 transition-colors"
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
                      Ver ao vivo
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm hover:border-rose-300 hover:text-rose-500 transition-colors text-zinc-600"
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
                        : "w-2.5 h-2.5 bg-zinc-200 hover:bg-zinc-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Próximo projeto"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm hover:border-rose-300 hover:text-rose-500 transition-colors text-zinc-600"
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
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-600 hover:border-rose-200 hover:text-rose-500 transition-colors"
          >
            <GithubIcon size={15} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
