"use client";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import {
  FRAME_COUNT,
  STORY_ANIMATION_MAX_PROGRESS,
  getFramePath,
  getScrollFrameSet,
  type ScrollFrameSet,
} from "@/lib/site";
import { cn } from "@/lib/cn";
import { getDeviceTier, getMaxCanvasDpr, getSupersampleScale } from "@/lib/viewport";

export type ScrollImageSequenceHandle = { setScrollProgress: (p: number) => void };
type Props = {
  className?: string;
  onLoadProgress?: (n: number, t: number) => void;
  onReady?: () => void;
  reducedMotion?: boolean;
  representativeFrame?: number;
  fit?: "cover" | "contain";
};
/** 1 = frames locked to scroll position (scroll-scrub hero). */
const SCROLL_FRAME_LERP = 1;
const DRAW_FILTER = "contrast(1.1) saturate(1.12) brightness(1.04)";

function paintFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
  fit: "cover" | "contain",
) {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const scale = fit === "cover" ? Math.max(cw / iw, ch / ih) : Math.min(cw / iw, ch / ih);
  const dw = Math.round(iw * scale);
  const dh = Math.round(ih * scale);
  const dx = Math.round((cw - dw) / 2);
  const dy = Math.round((ch - dh) / 2);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, cw, ch);
  ctx.filter = DRAW_FILTER;
  ctx.drawImage(img, dx, dy, dw, dh);
  ctx.filter = "none";
}

export const ScrollImageSequence = forwardRef<ScrollImageSequenceHandle, Props>(
  function ScrollImageSequence(
    { className, onLoadProgress, onReady, reducedMotion, representativeFrame = 150, fit = "cover" },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const scratchRef = useRef<HTMLCanvasElement | null>(null);
    const imgs = useRef(new Map<number, HTMLImageElement>());
    const loading = useRef(new Set<number>());
    const scrollP = useRef(0);
    const cur = useRef(1);
    const tgt = useRef(1);
    const raf = useRef(0);
    const tier = useRef<ReturnType<typeof getDeviceTier>>("desktop");
    const frameSet = useRef<ScrollFrameSet>("desktop");
    const ready = useRef(false);
    const lastPaint = useRef({ idx: -1, w: 0, h: 0 });
    const drawRef = useRef<() => void>(() => {});

    const load = useCallback(
      (i: number, hi?: boolean) => {
        if (i < 1 || i > FRAME_COUNT || imgs.current.has(i) || loading.current.has(i)) return;
        loading.current.add(i);
        const img = new Image();
        img.decoding = hi ? "sync" : "async";
        img.src = getFramePath(i, frameSet.current);
        const done = () => {
          loading.current.delete(i);
          if (!img.naturalWidth) return;
          imgs.current.set(i, img);
          onLoadProgress?.(imgs.current.size, FRAME_COUNT);
          if (!ready.current && i === 1) {
            ready.current = true;
            onReady?.();
          }
          if (i === Math.round(cur.current)) {
            lastPaint.current.idx = -1;
            drawRef.current();
          }
        };
        img.onload = () => void (img.decode?.().then(done).catch(done) ?? done());
        img.onerror = () => loading.current.delete(i);
      },
      [onLoadProgress, onReady],
    );

    const preload = useCallback(
      (c: number) => {
        const isMobile = tier.current === "mobile";
        const win = isMobile ? 28 : tier.current === "tablet" ? 40 : 56;
        const max = isMobile ? 8 : tier.current === "tablet" ? 12 : 16;
        let n = loading.current.size;
        for (let k = 0; k <= win && n < max; k++) {
          for (const i of k === 0 ? [c] : [c - k, c + k]) {
            if (i >= 1 && i <= FRAME_COUNT && !imgs.current.has(i)) {
              load(i, i === c);
              n++;
              if (n >= max) break;
            }
          }
        }
      },
      [load],
    );

    const applySectionProgress = useCallback(
      (sectionProgress: number) => {
        const animP = Math.max(0, Math.min(1, sectionProgress * STORY_ANIMATION_MAX_PROGRESS));
        scrollP.current = animP;
        const frame = 1 + animP * (FRAME_COUNT - 1);
        tgt.current = frame;
        cur.current = frame;
        lastPaint.current.idx = -1;
        preload(Math.round(frame));
      },
      [preload],
    );

    useImperativeHandle(
      ref,
      () => ({
        setScrollProgress(sectionProgress: number) {
          if (reducedMotion) return;
          applySectionProgress(sectionProgress);
          drawRef.current();
        },
      }),
      [applySectionProgress, reducedMotion],
    );

    const draw = useCallback(() => {
      const c = canvasRef.current;
      const b = boxRef.current;
      if (!c || !b) return;
      const ctx = c.getContext("2d", { alpha: false, desynchronized: true });
      if (!ctx) return;
      const r = b.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;

      const dpr = getMaxCanvasDpr(tier.current);
      const w = Math.max(1, Math.floor(r.width * dpr));
      const h = Math.max(1, Math.floor(r.height * dpr));
      if (c.width !== w || c.height !== h) {
        c.width = w;
        c.height = h;
        c.style.width = `${r.width}px`;
        c.style.height = `${r.height}px`;
        lastPaint.current = { idx: -1, w: 0, h: 0 };
      }

      const idx = reducedMotion ? representativeFrame : Math.max(1, Math.round(cur.current));
      const img = imgs.current.get(idx);
      if (!img?.naturalWidth) {
        if (!reducedMotion) load(idx, true);
        return;
      }

      if (lastPaint.current.idx === idx && lastPaint.current.w === w && lastPaint.current.h === h) {
        return;
      }
      lastPaint.current = { idx, w, h };

      const ss = getSupersampleScale(tier.current);
      if (ss > 1) {
        const sw = Math.max(1, Math.floor(w * ss));
        const sh = Math.max(1, Math.floor(h * ss));
        if (!scratchRef.current) scratchRef.current = document.createElement("canvas");
        const scratch = scratchRef.current;
        if (scratch.width !== sw || scratch.height !== sh) {
          scratch.width = sw;
          scratch.height = sh;
        }
        const sctx = scratch.getContext("2d", { alpha: false });
        if (!sctx) return;
        paintFrame(sctx, img, sw, sh, fit);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(scratch, 0, 0, sw, sh, 0, 0, w, h);
      } else {
        paintFrame(ctx, img, w, h, fit);
      }
    }, [fit, load, reducedMotion, representativeFrame]);

    useEffect(() => {
      drawRef.current = draw;
    }, [draw]);

    const syncViewport = useCallback(() => {
      const w = window.innerWidth;
      tier.current = getDeviceTier(w);
      const nextSet = getScrollFrameSet(w);
      if (nextSet !== frameSet.current) {
        frameSet.current = nextSet;
        imgs.current.clear();
        loading.current.clear();
        ready.current = false;
        load(1, true);
        preload(Math.round(cur.current));
      }
      lastPaint.current = { idx: -1, w: 0, h: 0 };
    }, [load, preload]);

    useEffect(() => {
      syncViewport();
      load(1, true);
      preload(1);

      const ro = new ResizeObserver(() => draw());
      if (boxRef.current) ro.observe(boxRef.current);

      const tick = () => {
        if (!reducedMotion) {
          tgt.current = 1 + scrollP.current * (FRAME_COUNT - 1);
          if (SCROLL_FRAME_LERP >= 1) {
            cur.current = tgt.current;
          } else {
            cur.current += (tgt.current - cur.current) * SCROLL_FRAME_LERP;
            if (Math.abs(tgt.current - cur.current) < 0.02) cur.current = tgt.current;
          }
          preload(Math.round(cur.current));
        }
        draw();
        raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);

      const onResize = () => {
        syncViewport();
        draw();
      };
      addEventListener("resize", onResize);
      window.visualViewport?.addEventListener("resize", onResize);

      return () => {
        removeEventListener("resize", onResize);
        window.visualViewport?.removeEventListener("resize", onResize);
        ro.disconnect();
        cancelAnimationFrame(raf.current);
      };
    }, [draw, load, preload, reducedMotion, syncViewport]);

    return (
      <div
        ref={boxRef}
        className={cn("story-touch-scroll", className)}
        style={{ width: "100%", height: "100%", minHeight: "100%" }}
      >
        <canvas ref={canvasRef} className="story-frame-canvas block h-full w-full" aria-hidden />
      </div>
    );
  },
);
