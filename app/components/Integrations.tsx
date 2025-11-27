interface IntegrationsCopy {
  title: string;
  description: string;
  logos: string[];
}

export default function Integrations({ copy }: { copy: IntegrationsCopy }) {
  return (
    <section className="mt-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{copy.title}</h2>
        <p className="text-sm text-slate-200/70">{copy.description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {copy.logos.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-white/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
