"use client";

import Image from "next/image";
import { ExternalLink, Github, ImageOff } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";
import { projects } from "@/data/projects";

function ProjectImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-50 to-pink-100 text-rose-200">
        <ImageOff size={36} />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

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
      className="py-24 px-5 sm:px-8 bg-white"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Projetos" title="O que eu construí" />

        <div
          className={`mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 fade-up ${inView ? "visible" : ""}`}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg ${
                project.highlight
                  ? "border-rose-200 shadow-sm shadow-rose-100"
                  : "border-zinc-200"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden bg-zinc-100 shrink-0">
                <ProjectImage src={project.image} alt={project.title} />
                {project.highlight && (
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-rose-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                    Destaque
                  </span>
                )}
              </div>

              {/* Content */}
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
                      <Github size={13} />
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

        <div className="mt-10 text-center">
          <a
            href="https://github.com/lahgomes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-600 hover:border-rose-200 hover:text-rose-500 transition-colors"
          >
            <Github size={15} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
