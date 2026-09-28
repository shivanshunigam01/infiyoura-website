"use client";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { FRAME_COUNT, getFramePath } from "@/lib/site";

export type ScrollImageSequenceHandle = { setScrollProgress: (p: number) => void };
type Props = {
  className?: string;
  onLoadProgress?: (n: number, t: number) => void;
  onReady?: () => void;
  reducedMotion?: boolean;
  representativeFrame?: number;
};
const SMOOTH = 0.42;

export const ScrollImageSequence = forwardRef<ScrollImageSequenceHandle, Props>(
  function ScrollImageSequence(
    { className, onLoadProgress, onReady, reducedMotion, representativeFrame = 150 },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const imgs = useRef(new Map<number, HTMLImageElement>());
    const loading = useRef(new Set<number>());
    const scrollP = useRef(0);
    const cur = useRef(1);
    const tgt = useRef(1);
    const raf = useRef(0);
    const mobile = useRef(false);
    const ready = useRef(false);

    useImperativeHandle(ref, () => ({
      setScrollProgress(p: number) {
        scrollP.current = Math.max(0, Math.min(1, p));
      },
    }));

    const load = useCallback(
      (i: number, hi?: boolean) => {
        if (i < 1 || i > FRAME_COUNT || imgs.current.has(i) || loading.current.has(i)) return;
        loading.current.add(i);
        const img = new Image();
        img.decoding = hi ? "sync" : "async";
        img.src = getFramePath(i);
        const done = () => {
          loading.current.delete(i);
          if (!img.naturalWidth) return;
          imgs.current.set(i, img);
          onLoadProgress?.(imgs.current.size, FRAME_COUNT);
          if (!ready.current && i === 1) {
            ready.current = true;
            onReady?.();
          }
        };
        img.onload = () => void (img.decode?.().then(done).catch(done) ?? done());
        img.onerror = () => loading.current.delete(i);
      },
      [onLoadProgress, onReady],
    );

    const preload = useCallback(
      (c: number) => {
        const win = mobile.current ? 24 : 48;
        const max = mobile.current ? 4 : 8;
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

    const draw = useCallback(() => {
      const c = canvasRef.current;
      const b = boxRef.current;
      if (!c || !b) return;
      const ctx = c.getContext("2d", { alpha: false });
      if (!ctx) return;
      const r = b.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(r.width * dpr));
      const h = Math.max(1, Math.floor(r.height * dpr));
      if (c.width !== w || c.height !== h) {
        c.width = w;
        c.height = h;
        c.style.width = `${r.width}px`;
        c.style.height = `${r.height}px`;
      }
      const idx = reducedMotion ? representativeFrame : Math.max(1, Math.round(cur.current));
      const img = imgs.current.get(idx);
      if (!img?.naturalWidth) {
        if (!reducedMotion) load(idx, true);
        return;
      }
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const s = Math.min(w / iw, h / ih);
      const dw = iw * s;
      const dh = ih * s;
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    }, [load, reducedMotion, representativeFrame]);

    useEffect(() => {
      mobile.current = matchMedia("(max-width:768px)").matches;
      load(1, true);
      preload(1);
      const tick = () => {
        if (!reducedMotion) {
          tgt.current = 1 + Math.floor(scrollP.current * (FRAME_COUNT - 1));
          cur.current += (tgt.current - cur.current) * SMOOTH;
          if (Math.abs(tgt.current - cur.current) < 0.05) cur.current = tgt.current;
          preload(Math.round(cur.current));
        }
        draw();
        raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
      const rs = () => {
        mobile.current = matchMedia("(max-width:768px)").matches;
      };
      addEventListener("resize", rs);
      return () => {
        removeEventListener("resize", rs);
        cancelAnimationFrame(raf.current);
      };
    }, [draw, load, preload, reducedMotion]);

    return (
      <div ref={boxRef} className={className} style={{ width: "100%", height: "100%" }}>
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    );
  },
);
