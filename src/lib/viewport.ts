/** Live viewport height (handles mobile browser chrome / iOS safe areas). */
export function getViewportHeight(): number {
  if (typeof window === "undefined") return 800;
  return window.visualViewport?.height ?? window.innerHeight;
}

export type DeviceTier = "mobile" | "tablet" | "desktop";

export function getDeviceTier(width = typeof window !== "undefined" ? window.innerWidth : 1280): DeviceTier {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

/** Higher DPR = sharper frames on retina (balanced for performance). */
export function getMaxCanvasDpr(tier: DeviceTier): number {
  const native = typeof devicePixelRatio === "number" ? devicePixelRatio : 1;
  const cap = tier === "mobile" ? 2 : tier === "tablet" ? 2.75 : 3.5;
  return Math.min(native, cap);
}

/** Internal supersample before downscale to display (desktop/tablet only). */
export function getSupersampleScale(tier: DeviceTier): number {
  if (tier === "desktop") return 1.22;
  if (tier === "tablet") return 1.12;
  return 1;
}
