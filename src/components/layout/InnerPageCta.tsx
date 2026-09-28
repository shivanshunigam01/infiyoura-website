import { Button } from "@/components/UI/Button";

type Props = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function InnerPageCta({
  title,
  description,
  buttonLabel = "Start a project",
  buttonHref = "/contact",
}: Props) {
  return (
    <section className="border-t border-white/10 bg-zinc-900/50 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-zinc-400">{description}</p>
        <Button href={buttonHref} className="mt-8">{buttonLabel}</Button>
      </div>
    </section>
  );
}
