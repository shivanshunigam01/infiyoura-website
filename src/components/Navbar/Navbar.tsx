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
    window.visualViewport?.addEventListener("resize", onScroll);
    window.visualViewport?.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("resize", onScroll);
      window.visualViewport?.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const lock = open && window.matchMedia("(max-width: 1023px)").matches;
    document.body.style.overflow = lock ? "hidden" : "";
    document.documentElement.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const lightNav = !open && (onStory || !scrolled);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 pt-[var(--safe-top)] transition-all duration-300",
          open ? "z-[120] border-b border-white/10 bg-zinc-950 py-3" : "z-50",
          !open &&
            (lightNav
              ? scrolled
                ? "border-b border-white/10 bg-black/35 py-2.5 backdrop-blur-md sm:py-3"
                : "bg-transparent py-4 sm:py-5"
              : scrolled
                ? "border-b border-zinc-200/80 bg-white/90 py-2.5 backdrop-blur-md sm:py-3"
                : "border-b border-white/10 bg-zinc-950/80 py-2.5 backdrop-blur-md sm:py-3"),
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <Logo light={open || lightNav} onLightBackground={!open && !lightNav} />
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
            className={cn(
              "relative z-[130] flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
              open || lightNav
                ? "border-white/15 bg-black/25"
                : "border-zinc-300/80 bg-white/80",
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full transition duration-300",
                  open || lightNav ? "bg-white" : "bg-zinc-900",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 rounded-full transition duration-300",
                  open || lightNav ? "bg-white" : "bg-zinc-900",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-5 rounded-full transition duration-300",
                  open || lightNav ? "bg-white" : "bg-zinc-900",
                  open && "top-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[110] flex flex-col bg-zinc-950 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div
            className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(2rem,var(--safe-bottom))] pt-[calc(var(--nav-height)+var(--safe-top)+1.25rem)] sm:px-8"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white transition hover:text-[var(--brand-green)] sm:py-5 sm:text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-10">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </div>

            <p className="mt-auto pt-10 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
              {SITE.tagline}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
