import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
          Feito com{" "}
          <Heart size={12} className="text-rose-400 fill-rose-400" />{" "}
          por{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Larissa Gomes</span>
          {" "}·{" "}{year}
        </p>

        <div className="flex items-center gap-5 text-zinc-400 dark:text-zinc-500">
          <a
            href="https://github.com/lahgomes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/larissagomes19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
