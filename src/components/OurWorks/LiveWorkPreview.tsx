"use client";

import { useCallback, useState } from "react";

function buildScreenshotSources(url: string): string[] {
  const encoded = encodeURIComponent(url);
  const host = url.replace(/^https?:\/\//, "");
  return [
    `https://s.wordpress.com/mshots/v1/${encoded}?w=1280&h=800`,
    `https://image.thum.io/get/width/1280/noanimate/https://${host}`,
  ];
}

const MAX_MSHOTS_RETRIES = 4;
const MSHOTS_PLACEHOLDER_WIDTH = 400;

type Props = {
  url: string;
  title: string;
};

export function LiveWorkPreview({ url, title }: Props) {
  const sources = buildScreenshotSources(url);
  const [srcIndex, setSrcIndex] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [cacheBust, setCacheBust] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const isMshots = sources[srcIndex].includes("mshots");
  const currentSrc =
    isMshots && cacheBust > 0 ? `${sources[srcIndex]}&retry=${cacheBust}` : sources[srcIndex];

  const advanceProvider = useCallback(() => {
    setSrcIndex((i) => {
      if (i < sources.length - 1) {
        setRetryCount(0);
        setCacheBust(0);
        return i + 1;
      }
      setFailed(true);
      return i;
    });
  }, [sources.length]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-[16/10] min-h-[200px] overflow-hidden rounded-t-2xl bg-zinc-900"
    >
      {!loaded && !failed ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800/80 to-zinc-950" />
      ) : null}

      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <span className="text-5xl font-black tracking-tight text-white/90">{initials}</span>
        </div>
      ) : null}

      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element -- external screenshot providers
        <img
          key={`${srcIndex}-${cacheBust}`}
          src={currentSrc}
          alt={`${title} live preview`}
          loading="lazy"
          decoding="async"
          onLoad={(e) => {
            const img = e.currentTarget;
            if (
              isMshots &&
              img.naturalWidth > 0 &&
              img.naturalWidth <= MSHOTS_PLACEHOLDER_WIDTH + 20
            ) {
              if (retryCount < MAX_MSHOTS_RETRIES) {
                const next = retryCount + 1;
                window.setTimeout(() => {
                  setRetryCount(next);
                  setCacheBust(next);
                }, 2500);
                return;
              }
              advanceProvider();
              return;
            }
            setLoaded(true);
          }}
          onError={advanceProvider}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-white/10" />
    </a>
  );
}
