type Item = { question: string; answer: string };

export function PageFaq({ title = "FAQ", items }: { title?: string; items: readonly Item[] }) {
  return (
    <section className="border-t border-white/10 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        <ul className="mt-10 space-y-8">
          {items.map((item) => (
            <li key={item.question}>
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
