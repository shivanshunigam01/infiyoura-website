import Image from "next/image";
import {
  OUR_WORK_CATEGORY_STYLES,
  OUR_WORKS_PROJECTS,
  type OurWorkProject,
} from "@/lib/our-works";
import { LiveWorkPreview } from "@/components/OurWorks/LiveWorkPreview";

function CategoryBadge({ category }: { category: string }) {
  const style =
    OUR_WORK_CATEGORY_STYLES[category] ??
    "bg-white/10 text-zinc-200 ring-1 ring-white/15";
  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${style}`}>
      {category}
    </span>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-green)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden />
      Live
    </span>
  );
}

function PreviewBadges({ category }: { category: string }) {
  return (
    <>
      <div className="absolute left-4 top-4 z-10">
        <CategoryBadge category={category} />
      </div>
      <div className="pointer-events-none absolute right-4 top-4 z-10">
        <LiveBadge />
      </div>
    </>
  );
}

function StaticPreview({ project }: { project: OurWorkProject }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-[16/10] min-h-[200px] overflow-hidden rounded-t-2xl bg-zinc-900"
    >
      <Image
        src={project.previewImage!}
        alt={`${project.title} preview`}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-white/10" />
      <PreviewBadges category={project.category} />
    </a>
  );
}

function WorkCard({ project }: { project: OurWorkProject }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-[var(--brand-green)]/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
      <div className="relative">
        {project.previewImage ? (
          <StaticPreview project={project} />
        ) : (
          <>
            <LiveWorkPreview url={project.url} title={project.title} />
            <PreviewBadges category={project.category} />
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-xl font-semibold text-white transition group-hover:text-[var(--brand-green)] sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Key features</p>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" aria-hidden />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
        >
          View live site
          <span className="ml-2" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export function OurWorksGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 pb-20 lg:grid-cols-2 lg:px-8">
      {OUR_WORKS_PROJECTS.map((project) => (
        <WorkCard key={project.title} project={project} />
      ))}
    </div>
  );
}
