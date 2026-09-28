type Block = { heading?: string; paragraphs: readonly string[] };

export function LegalProse({ blocks, dark = true }: { blocks: readonly Block[]; dark?: boolean }) {
  return (
    <div className={dark ? "text-zinc-400" : "prose prose-zinc"}>
      {blocks.map((block, i) => (
        <section key={i} className="mb-10">
          {block.heading ? (
            <h2 className={dark ? "text-xl font-semibold text-white" : "text-xl text-zinc-950"}>{block.heading}</h2>
          ) : null}
          {block.paragraphs.map((p, j) => (
            <p key={j} className="mt-3 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
