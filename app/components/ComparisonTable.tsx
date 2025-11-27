interface ComparisonRow {
  feature: string;
  chainx: string;
  others: string;
}

interface ComparisonCopy {
  title: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({ copy }: { copy: ComparisonCopy }) {
  return (
    <section className="mt-28 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
        <table className="w-full text-left text-sm text-slate-200/80">
          <thead className="bg-white/10 text-xs uppercase tracking-widest text-white/70">
            <tr>
              <th className="px-5 py-4 font-semibold">Feature</th>
              <th className="px-5 py-4 font-semibold">ChainX</th>
              <th className="px-5 py-4 font-semibold">Alternativas</th>
            </tr>
          </thead>
          <tbody>
            {copy.rows.map((row) => (
              <tr key={row.feature} className="border-t border-white/5">
                <td className="px-5 py-4 font-medium text-white">{row.feature}</td>
                <td className="px-5 py-4 text-cyan-200/90">{row.chainx}</td>
                <td className="px-5 py-4 text-slate-200/60">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
