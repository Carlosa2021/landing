interface ProofItem {
  title: string;
  metric: string;
  description: string;
}

interface ProofCopy {
  title: string;
  items: ProofItem[];
}

export default function ProofSection({ copy }: { copy: ProofCopy }) {
  return (
    <section className="mt-28 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {copy.items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-6 py-8 backdrop-blur"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">{item.title}</div>
            <div className="mt-4 text-3xl font-semibold text-white">{item.metric}</div>
            <p className="mt-3 text-sm text-slate-200/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
