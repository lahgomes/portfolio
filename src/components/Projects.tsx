"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ExternalLink, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";
import { projects } from "@/data/projects";

function ProjectGallery({ images, alt }: { images?: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const list = images && images.length > 0 ? images : [];

  if (list.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-50 to-pink-100 text-rose-200">
        <ImageOff size={36} />
      </div>
    );
  }

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c - 1 + list.length) % list.length);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c + 1) % list.length);
  };

  return (
    <>
      <Image
        key={list[current]}
        src={list[current]}
        alt={`${alt} — imagem ${current + 1}`}
        fill
        className="object-cover object-top transition-opacity duration-300"
      />

      {list.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md border border-zinc-200 hover:bg-rose-50 hover:border-rose-200 transition-colors"
          >
            <ChevronLeft size={18} className="text-zinc-700" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-md border border-zinc-200 hover:bg-rose-50 hover:border-rose-200 transition-colors"
          >
            <ChevronRight size={18} className="text-zinc-700" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 pb-2.5 pt-6 bg-linear-to-t from-black/40 to-transparent">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-5 bg-white shadow" : "w-2 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const showArrows = projects.length > 2;

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });
  };

  if (projects.length === 0) {
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

  return (
    <section
      id="projetos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading label="Projetos" title="O que eu construí" />
      </div>

      <div className={`relative mt-12 fade-up ${inView ? "visible" : ""}`}>
        {showArrows && (
          <>
            <button
              onClick={() => scroll("left")}
              aria-label="Projeto anterior"
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-8 z-10 h-10 w-10 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-md hover:border-rose-200 hover:bg-rose-50 transition-colors"
            >
              <ChevronLeft size={18} className="text-zinc-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Próximo projeto"
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-8 z-10 h-10 w-10 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-md hover:border-rose-200 hover:bg-rose-50 transition-colors"
            >
              <ChevronRight size={18} className="text-zinc-700" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 sm:px-8 md:px-16 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={`snap-start shrink-0 flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg w-[85vw] sm:w-80 md:w-96 ${
                project.highlight
                  ? "border-rose-200 shadow-sm shadow-rose-100"
                  : "border-zinc-200"
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 shrink-0">
                <ProjectGallery images={project.images ?? (project.image ? [project.image] : [])} alt={project.title} />
                {project.highlight && (
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-rose-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                    Destaque
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-bold text-zinc-900">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-100 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1 border-t border-zinc-100 mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-rose-500 transition-colors"
                    >
                      <GithubIcon size={13} />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-rose-500 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Ver ao vivo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center px-5 sm:px-8">
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
    </section>
  );
}
