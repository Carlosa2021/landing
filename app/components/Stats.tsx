interface StatsCopy {
  title: string;
  description: string;
  items: { value: string; label: string }[];
}

export default function Stats({ copy }: { copy: StatsCopy }) {
  return (
    <section className="mt-28 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white shadow-[0_25px_70px_-30px_rgba(8,47,73,0.6)] sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base text-slate-200/70">{copy.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((stat) => (
            <div
              key={`${stat.label}-${stat.value}`}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-200/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
