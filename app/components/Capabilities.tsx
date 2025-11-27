interface CapabilityCopy {
  title: string;
  items: { title: string; description: string }[];
}

export default function Capabilities({ copy }: { copy: CapabilityCopy }) {
  return (
    <section className="mt-28 space-y-10 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {copy.items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-white/10 px-6 py-7 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-200/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
