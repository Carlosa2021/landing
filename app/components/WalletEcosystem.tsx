interface WalletCopyItem {
  title: string;
  description: string;
}

interface WalletCopy {
  title: string;
  description: string;
  items: WalletCopyItem[];
}

export default function WalletEcosystem({ copy }: { copy: WalletCopy }) {
  return (
    <section className="mt-28 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
        <p className="mt-4 text-base text-slate-200/70">{copy.description}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {copy.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left backdrop-blur-lg"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-200/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
