"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

function AnimatedName() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  const text = "larissa gomes";
  const letters = text.split("");
  const total = letters.length;

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMouseX((e.clientX - rect.left) / rect.width);
  };

  const handleMouseLeave = () => setMouseX(null);

  return (
    <h1
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-item cursor-default text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
    >
      {letters.map((letter, i) => {
        const letterPos = i / (total - 1);
        const dist = mouseX !== null ? Math.abs(mouseX - letterPos) : 1;
        const colored = dist < 0.18;
        return letter === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className={`transition-colors duration-150 ${
              colored ? "text-rose-500" : "text-zinc-900"
            }`}
          >
            {letter}
          </span>
        );
      })}
      <span className="text-rose-500">.</span>
    </h1>
  );
}

function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, 55);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-0.5 h-[0.85em] bg-rose-400 ml-0.5 align-middle ${
          done ? "animate-pulse" : ""
        }`}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20 text-center sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 h-150 w-150 rounded-full bg-rose-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-112.5 w-112.5 rounded-full bg-pink-100/40 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-5">

        <AnimatedName />

        <p className="hero-item text-lg font-medium text-zinc-500 sm:text-xl">
          <Typewriter text="Desenvolvedora Front-end" delay={900} />
        </p>

        <p className="hero-item max-w-lg text-zinc-500 leading-relaxed">
          4 anos de experiência construindo produtos web com React, Next.js e
          TypeScript — com foco em performance, SEO técnico e experiências que
          encantam usuários.
        </p>

        <div className="hero-item flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href="#projetos"
            className="rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-200 hover:bg-rose-600 transition-colors active:scale-95"
          >
            Ver projetos
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-700 hover:border-rose-300 hover:text-rose-500 transition-colors active:scale-95"
          >
            Sobre mim
          </a>
        </div>

        <div className="hero-item flex items-center gap-4 pt-1 text-zinc-400">
          <a
            href="https://github.com/lahgomes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-rose-500 transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <span className="h-4 w-px bg-zinc-200" />
          <a
            href="https://www.linkedin.com/in/larissagomes19/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-rose-500 transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-300 hover:text-rose-400 transition-colors"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
