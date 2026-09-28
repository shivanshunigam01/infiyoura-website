"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Button } from "@/components/UI/Button";
import { Logo } from "@/components/UI/Logo";
import { cn } from "@/lib/cn";

function isStoryPinned(): boolean {
  const story = document.getElementById("story");
  if (!story) return false;
  const r = story.getBoundingClientRect();
  const vh = window.visualViewport?.height ?? window.innerHeight;
  return r.top <= 1 && r.bottom > vh * 0.55;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onStory, setOnStory] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setOnStory(isStoryPinned());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** White logo + links on dark backgrounds (hero, or top of any dark page). */
  const lightNav = !open && (onStory || !scrolled);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[var(--safe-top)] transition-all duration-300",
        lightNav
          ? scrolled
            ? "border-b border-white/10 bg-black/35 py-2.5 backdrop-blur-md sm:py-3"
            : "bg-transparent py-4 sm:py-5"
          : scrolled
            ? "border-b border-zinc-200/80 bg-white/90 py-2.5 backdrop-blur-md sm:py-3"
            : "border-b border-white/10 bg-zinc-950/80 py-2.5 backdrop-blur-md sm:py-3",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
        <Logo light={lightNav} onLightBackground={!lightNav} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-medium uppercase tracking-[0.18em] transition",
                lightNav ? "text-white/75 hover:text-white" : "text-zinc-600 hover:text-zinc-950",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">Start a project</Button>
        </div>
        <button
          type="button"
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 transition", lightNav ? "bg-white" : "bg-zinc-900", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 transition", lightNav ? "bg-white" : "bg-zinc-900", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 transition", lightNav ? "bg-white" : "bg-zinc-900", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-white px-6 pt-[calc(6.5rem+var(--safe-top))] transition duration-500 sm:px-8 sm:pt-28 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="mb-8" onClick={() => setOpen(false)} role="presentation">
          <Logo size="nav" onLightBackground />
        </div>
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
          <Button href="/contact" className="w-full">Start a project</Button>
        </div>
        <p className="mt-auto pb-[max(2.5rem,var(--safe-bottom))] text-sm text-zinc-500">{SITE.tagline}</p>
      </div>
    </header>
  );
}
