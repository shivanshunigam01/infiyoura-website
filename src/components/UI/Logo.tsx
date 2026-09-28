"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGO_PATH, SITE } from "@/lib/site";

export function Logo() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-green)]"
    >
      {imgOk ? (
        <span className="relative block h-8 w-28 sm:h-9 sm:w-32">
          <Image
            src={LOGO_PATH}
            alt=""
            fill
            className="object-contain object-left"
            priority
            sizes="128px"
            onError={() => setImgOk(false)}
          />
        </span>
      ) : (
        <span>{SITE.name}</span>
      )}
      <span className="sr-only">{SITE.name}</span>
    </Link>
  );
}