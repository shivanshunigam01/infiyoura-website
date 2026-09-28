import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function PageHeader({ eyebrow, title, description, className, dark = true }: Props) {
  return (
    <header
      className={cn(
        "border-b pt-[calc(6.5rem+var(--safe-top))] pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20",
        dark ? "border-white/10 bg-zinc-950" : "border-zinc-200 bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">{eyebrow}</p>
        ) : null}
        <h1 className={cn("text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl", dark ? "text-white" : "text-zinc-950")}>
          {title}
        </h1>
        {description ? (
          <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-zinc-400" : "text-zinc-600")}>{description}</p>
        ) : null}
      </div>
    </header>
  );
}
