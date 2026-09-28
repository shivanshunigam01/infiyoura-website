"use client";



import { useEffect, useRef, useState } from "react";

import { STORY_OVERLAYS } from "@/lib/content";

import {

  FRAME_COUNT,

  SITE,

  STORY_ANIMATION_MAX_PROGRESS,

  STORY_TEXT_MAX_PROGRESS,

  STORY_SCROLL_HEIGHT_VH,

  STORY_SCROLL_HEIGHT_VH_MOBILE,

  STORY_SCROLL_HEIGHT_VH_TABLET,

} from "@/lib/site";

import {

  ScrollImageSequence,

  type ScrollImageSequenceHandle,

} from "@/components/ScrollImageSequence/ScrollImageSequence";

import { Button } from "@/components/UI/Button";

import { cn } from "@/lib/cn";
import { getViewportHeight } from "@/lib/viewport";



const STATIC_STORY_FRAME = Math.max(1, Math.floor(STORY_ANIMATION_MAX_PROGRESS * (FRAME_COUNT - 1)));

const HERO_FADE_END = 0.14;

const HERO_PILLS = ["Web & Apps", "Social & Brand", "SEO & Ads"] as const;



function getScrollHeightVh(): number {

  if (typeof window === "undefined") return STORY_SCROLL_HEIGHT_VH;

  const w = window.innerWidth;

  if (w < 640) return STORY_SCROLL_HEIGHT_VH_MOBILE;

  if (w < 1024) return STORY_SCROLL_HEIGHT_VH_TABLET;

  return STORY_SCROLL_HEIGHT_VH;

}



export function StorySection() {

  const sectionRef = useRef<HTMLElement>(null);

  const seqRef = useRef<ScrollImageSequenceHandle>(null);

  const [progress, setProgress] = useState(0);

  const [loaded, setLoaded] = useState(0);

  const [ready, setReady] = useState(false);

  const [reduced, setReduced] = useState(false);

  const [storyKey, setStoryKey] = useState(0);

  const [scrollHeightVh, setScrollHeightVh] = useState(STORY_SCROLL_HEIGHT_VH);

  const [compact, setCompact] = useState(false);



  useEffect(() => {

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => setReduced(mq.matches);

    apply();

    mq.addEventListener("change", apply);

    return () => mq.removeEventListener("change", apply);

  }, []);



  useEffect(() => {

    const onResize = () => {

      setScrollHeightVh(getScrollHeightVh());

      setCompact(window.innerWidth < 640);

    };

    onResize();

    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };

  }, []);



  useEffect(() => {

    const el = sectionRef.current;

    if (!el || reduced) return;



    const update = () => {

      const rect = el.getBoundingClientRect();

      const vh = getViewportHeight();

      const total = el.offsetHeight - vh;

      if (total <= 0) return;

      const p = Math.max(0, Math.min(1, -rect.top / total));

      seqRef.current?.setScrollProgress(p * STORY_ANIMATION_MAX_PROGRESS);

      setProgress(p);

    };



    update();

    window.addEventListener("scroll", update, { passive: true });

    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };

  }, [reduced, scrollHeightVh]);



  const active =

    progress < STORY_TEXT_MAX_PROGRESS

      ? STORY_OVERLAYS.find((o) => progress >= o.start && progress < o.end)

      : undefined;

  const activeTitle = active?.title ?? "";



  useEffect(() => {

    if (activeTitle) setStoryKey((k) => k + 1);

  }, [activeTitle]);



  const heroOpacity = Math.max(0, 1 - progress / HERO_FADE_END);

  const storyOpacity = progress >= HERO_FADE_END * 0.65 ? Math.min(1, (progress - HERO_FADE_END * 0.5) / 0.12) : 0;

  const scrollHintOpacity = progress < 0.06 ? 1 - progress / 0.06 : 0;

  const heroLift = progress * (compact ? -14 : -28);

  const storyLift = (progress - 0.1) * (compact ? -8 : -16);



  return (

    <section

      id="story"

      ref={sectionRef}

      className="story-scroll-section relative bg-zinc-950"

      style={{ height: reduced ? "auto" : `${scrollHeightVh}vh` }}

      aria-label="Infiyoura product story"

    >

      <div

        className={cn(

          "touch-pan-y sticky top-0 z-0 h-[100dvh] max-h-[100dvh] min-h-[100svh] w-full max-w-[100vw] overflow-hidden overscroll-none",

          reduced && "relative min-h-[100svh]",

        )}

      >

        <div className="absolute inset-0 h-full w-full">

          <ScrollImageSequence

            ref={seqRef}

            className="h-full w-full"

            fit="cover"

            reducedMotion={reduced}

            representativeFrame={STATIC_STORY_FRAME}

            onLoadProgress={(n) => setLoaded(n)}

            onReady={() => setReady(true)}

          />

        </div>



        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] shadow-[inset_0_0_90px_rgba(0,0,0,0.72)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_70%_at_50%_42%,rgba(0,0,0,0.62),transparent_72%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/30 via-[38%] to-black/75"
          aria-hidden
        />

        {!ready && !reduced ? (

          <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-zinc-950/75">

            <div className="relative h-12 w-12">

              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[var(--brand-green)]/30" />

              <div className="relative h-12 w-12 animate-spin rounded-full border-2 border-white/15 border-t-[var(--brand-green)]" />

            </div>

            <p className="px-4 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-400 sm:text-xs sm:tracking-[0.3em]">

              Loading experience · {Math.round((loaded / FRAME_COUNT) * 100)}%

            </p>

          </div>

        ) : null}



        <div

          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pt-[calc(var(--nav-height)+var(--safe-top)+0.5rem)] text-center sm:px-10 md:px-12"

          style={{

            opacity: heroOpacity,

            transform: reduced ? undefined : `translateY(${heroLift}px)`,

          }}

        >

          {ready ? (

            <>

              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]",
                  !reduced && "animate-fade-up",
                )}
              >

                {SITE.name} · Digital Studio

              </p>

              <h1

                className={cn(

                  "mt-3 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.95)] sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl",

                  !reduced && "animate-fade-up animate-fade-up-d1",

                )}

              >

                <span className="block">YOUR IDEAS.</span>

                <span className="mt-1 block text-emerald-100">

                  OUR TECHNOLOGY.

                </span>

              </h1>

              <p

                className={cn(

                  "mt-4 max-w-2xl text-sm font-medium leading-relaxed text-zinc-100 drop-shadow-[0_1px_14px_rgba(0,0,0,0.9)] sm:mt-6 sm:text-base md:text-lg",

                  !reduced && "animate-fade-up animate-fade-up-d2",

                )}

              >

                Premium websites, mobile apps, social media, and digital marketing—engineered for ambitious brands in

                India and worldwide.

              </p>

              <ul

                className={cn(

                  "mt-6 flex flex-wrap justify-center gap-2 sm:gap-3",

                  !reduced && "animate-fade-up animate-fade-up-d2",

                )}

              >

                {HERO_PILLS.map((pill) => (

                  <li

                    key={pill}

                    className="rounded-full border border-white/35 bg-black/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_2px_12px_rgba(0,0,0,0.5)] backdrop-blur-md sm:text-xs"

                  >

                    {pill}

                  </li>

                ))}

              </ul>

              <div

                className={cn(

                  "pointer-events-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4",

                  !reduced && "animate-fade-up animate-fade-up-d3",

                )}

              >

                <Button

                  href="/contact"

                  className="w-full px-5 py-3.5 sm:w-auto sm:shadow-[0_0_40px_rgba(0,199,107,0.35)] sm:transition-transform sm:hover:scale-[1.03]"

                >

                  Start a project

                </Button>

                <Button

                  href="/services"

                  variant="secondary"

                  className="w-full border-white/40 bg-white/10 px-5 py-3.5 text-white backdrop-blur-md sm:w-auto sm:transition-transform sm:hover:scale-[1.03] sm:hover:border-white sm:hover:bg-white/20"

                >

                  Explore services

                </Button>

              </div>

            </>

          ) : null}

        </div>



        {active && storyOpacity > 0 ? (

          <div

            key={storyKey}

            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-[calc(var(--nav-height)+var(--safe-top))] text-center sm:px-8"

            style={{

              opacity: storyOpacity,

              transform: reduced ? undefined : `translateY(${storyLift}px)`,

            }}

          >

            <div className={cn("max-w-3xl", !reduced && "animate-story-enter")}>

              <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-[var(--brand-green)] to-transparent" />

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">

                {active.title}

              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">{active.body}</p>

            </div>

          </div>

        ) : null}



        {!reduced ? (

          <>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-1 bg-white/10" aria-hidden>

              <div

                className="h-full bg-gradient-to-r from-[var(--brand-green)] to-emerald-300 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(0,199,107,0.5)]"

                style={{ width: `${progress * 100}%` }}

              />

            </div>

            <div

              className="pointer-events-none absolute bottom-[max(1.25rem,var(--safe-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 animate-float-soft sm:bottom-10 sm:gap-3"

              style={{ opacity: scrollHintOpacity }}

            >

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Scroll to explore
              </span>

              <span className="h-10 w-px bg-white/60">

                <span className="block h-full w-full origin-top bg-white animate-scroll-indicator" />

              </span>

            </div>

          </>

        ) : null}

      </div>

    </section>

  );

}


