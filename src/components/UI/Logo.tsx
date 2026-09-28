"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGO_ALT, LOGO_PATH, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const SIZE_CLASS = {
  nav: "h-9 w-[9.5rem] sm:h-10 sm:w-[10.5rem]",
  footer: "h-12 w-44 sm:h-[3.25rem] sm:w-52",
  wide: "h-14 w-52 sm:h-16 sm:w-60",
} as const;

type LogoProps = {
  light?: boolean;
  /** White logo on transparent PNG — use on light headers/menus so text reads as dark. */
  onLightBackground?: boolean;
  size?: keyof typeof SIZE_CLASS;
  className?: string;
  linked?: boolean;
};

export function Logo({
  light = false,
  onLightBackground = false,
  size = "nav",
  className,
  linked = true,
}: LogoProps) {
  const [imgOk, setImgOk] = useState(true);

  const image = imgOk ? (
    <span className={cn("relative block shrink-0 bg-transparent", SIZE_CLASS[size], className)}>
      <Image
        src={LOGO_PATH}
        alt={LOGO_ALT}
        fill
        className={cn("object-contain object-left bg-transparent", onLightBackground && "brightness-0")}
        priority={size === "nav"}
        sizes={size === "nav" ? "(max-width: 640px) 152px, 168px" : "(max-width: 640px) 176px, 208px"}
        onError={() => setImgOk(false)}
      />
    </span>
  ) : (
    <span className={cn("text-sm font-semibold uppercase tracking-[0.25em]", light ? "text-white" : "text-zinc-950")}>
      {SITE.name}
    </span>
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-green)]"
    >
      {image}
    </Link>
  );
}
