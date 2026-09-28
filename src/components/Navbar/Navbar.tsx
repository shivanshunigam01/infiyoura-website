"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Button } from "@/components/UI/Button";
import { Logo } from "@/components/UI/Logo";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-zinc-200/80 bg-white/85 py-3 backdrop-blur-md" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 transition hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#contact">Start a project</Button>
        </div>
        <button
          type="button"
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 bg-zinc-900 transition", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-zinc-900 transition", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-zinc-900 transition", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-white px-8 pt-28 transition duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold tracking-tight text-zinc-900"
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-10">
          <Button href="#contact" className="w-full">
            Start a project
          </Button>
        </div>
        <p className="mt-auto pb-10 text-sm text-zinc-500">{SITE.tagline}</p>
      </div>
    </header>
  );
}
