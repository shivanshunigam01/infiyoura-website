/** Sticky tall-section progress (0–1). Uses layout position, not scrollY (works when body/html scroll). */
export function storySectionProgress(sectionEl: HTMLElement, viewportHeight: number): number {
  const vh = Math.max(1, viewportHeight);
  const total = sectionEl.offsetHeight - vh;
  if (total <= 1) return 0;
  const top = sectionEl.getBoundingClientRect().top;
  return Math.max(0, Math.min(1, -top / total));
}
