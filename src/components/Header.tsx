"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { twJoin } from "tailwind-merge";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={twJoin(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-rose-100/60 dark:border-zinc-700/60 shadow-sm shadow-rose-100/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 sm:px-8">
        <a
          href="#"
          className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-rose-500 transition-colors"
          aria-label="Voltar ao topo"
        >
          larissa<span className="text-rose-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-rose-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="rounded-full p-2 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-rose-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block">
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block dark:hidden">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          </button>
          <a
            href="/cv-larissa-gomes.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Currículo
          </a>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="rounded-full p-2 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-rose-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block">
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block dark:hidden">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-rose-500 transition-colors"
            aria-label="Abrir menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-100 dark:border-zinc-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg px-5 pb-4 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-rose-50 dark:hover:bg-zinc-800 hover:text-rose-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv-larissa-gomes.pdf"
            download
            className="mt-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-center text-sm font-semibold text-rose-600"
          >
            Baixar CV
          </a>
        </div>
      )}
    </header>
  );
}
