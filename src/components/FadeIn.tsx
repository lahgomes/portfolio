"use client";

import { useInView } from "@/hooks/useInView";
import { twJoin } from "tailwind-merge";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={twJoin("fade-up", inView && "visible", delay && "delay-1", className)}
    >
      {children}
    </div>
  );
}
