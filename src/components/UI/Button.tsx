import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({ href, variant = "primary", className, children, type = "button", disabled }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)] disabled:opacity-50 active:scale-[0.98]";
  const v = {
    primary: "bg-[var(--brand-green)] text-white hover:brightness-110",
    secondary: "border border-zinc-300 bg-white hover:border-zinc-900",
    ghost: "text-zinc-600 hover:text-zinc-900",
  };
  const cls = cn(base, v[variant], className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
