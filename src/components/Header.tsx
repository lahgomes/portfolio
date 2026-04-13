"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-rose-100/60 shadow-sm shadow-rose-100/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-base font-bold tracking-tight text-zinc-900 hover:text-rose-500 transition-colors"
          aria-label="Voltar ao topo"
        >
          larissa<span className="text-rose-500">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-500 hover:text-rose-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/cv-larissa-gomes.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100 transition-colors"
        >
          Baixar CV
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-1.5 text-zinc-600 hover:text-rose-500 transition-colors"
          aria-label="Abrir menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white/95 backdrop-blur-lg px-5 pb-4 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
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
