"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "./About";

const LINKS = [
  {
    icon: <Mail size={20} />,
    label: "E-mail",
    value: "lahgomes19@gmail.com",
    href: "mailto:lahgomes19@gmail.com",
    description: "Meu e-mail direto — respondo normalmente em até 24h.",
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "larissagomes19",
    href: "https://www.linkedin.com/in/larissagomes19/",
    description: "Me encontre no LinkedIn para networking e oportunidades.",
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "lahgomes",
    href: "https://github.com/lahgomes",
    description: "Veja meus repositórios e projetos open source.",
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-8 px-5 sm:px-8 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Contato" title="Vamos conversar?" />

        <p
          className={`mt-5 text-center text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto fade-up ${inView ? "visible" : ""}`}
        >
          Estou aberta a oportunidades, freelas e bate-papos sobre tecnologia.
          Escolha o canal que preferir e me manda mensagem!
        </p>

        <div
          className={`mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 fade-up ${inView ? "visible delay-1" : ""}`}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 hover:border-rose-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-zinc-300 dark:text-zinc-600 group-hover:text-rose-400 transition-colors"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {link.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {link.value}
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
