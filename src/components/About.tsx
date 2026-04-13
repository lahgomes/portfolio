"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const TAGS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "SEO", "Performance Web", "UX", "Acessibilidade",
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="sobre"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-5 sm:px-8 bg-white"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Sobre mim" title="Prazer, sou a Larissa!" />

        <div
          className={`mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center fade-up ${inView ? "visible" : ""}`}
        >
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-rose-200 via-pink-100 to-rose-50 -z-10" />
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
                {/* ⚠️  Coloque sua foto em: public/profile.jpg */}
                <Image
                  src="/profile.jpg"
                  alt="Foto de perfil de Larissa Gomes"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-zinc-600 leading-relaxed">
              Sou desenvolvedora front-end com foco em criar produtos digitais
              que unem boa estética e alta performance. Trabalho principalmente
              com <strong className="text-zinc-800">React</strong>,{" "}
              <strong className="text-zinc-800">Next.js</strong> e{" "}
              <strong className="text-zinc-800">TypeScript</strong> — e me
              importo muito com SEO, acessibilidade e Core Web Vitals.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Sou formada pela{" "}
              <strong className="text-zinc-800">
                Universidade Federal de Ouro Preto (UFOP)
              </strong>{" "}
              e atualmente moro em Santos, SP. Gosto de colaborar com times de
              produto, aprender coisas novas todos os dias e construir
              interfaces que deixam gente feliz.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600"
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
                Baixar CV
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 hover:border-rose-200 hover:text-rose-500 transition-colors"
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

// ── Shared section heading component ────────────────────
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
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-1 h-1 w-10 rounded-full bg-gradient-to-r from-rose-400 to-pink-300" />
    </div>
  );
}
