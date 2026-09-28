"use client";

import { useEffect, useRef, useState } from "react";
import { STORY_OVERLAYS } from "@/lib/content";
import {
  ScrollImageSequence,
  type ScrollImageSequenceHandle,
} from "@/components/ScrollImageSequence/ScrollImageSequence";
import { cn } from "@/lib/cn";

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const seqRef = useRef<ScrollImageSequenceHandle>(null);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduced) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      seqRef.current?.setScrollProgress(p);
      setProgress(p);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  const active = STORY_OVERLAYS.find((o) => progress >= o.start && progress < o.end);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative bg-zinc-950"
      style={{ height: reduced ? "auto" : "min(420vh, 400vh)" }}
      aria-label="Infiyoura product story"
    >
      <div className={cn("sticky top-0 h-screen w-full overflow-hidden", reduced && "relative h-auto min-h-[56vw]")}>
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10">
          <div className="relative h-full w-full max-w-[1600px] overflow-hidden rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <ScrollImageSequence
              ref={seqRef}
              className="h-full w-full"
              reducedMotion={reduced}
              representativeFrame={300}
              onLoadProgress={(n) => setLoaded(n)}
              onReady={() => setReady(true)}
            />
            {!ready && !reduced ? (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950/80">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-[var(--brand-green)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Loading experience · {Math.round((loaded / 300) * 100)}%
                </p>
              </div>
            ) : null}
            {active ? (
              <div
                key={active.title}
                className="pointer-events-none absolute bottom-8 left-6 max-w-xs opacity-100 transition-opacity duration-500 sm:bottom-12 sm:left-10 sm:max-w-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">
                  {active.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">{active.body}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
