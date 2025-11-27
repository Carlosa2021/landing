import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

interface HeroCopy {
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  bulletPoints: string[];
}

interface HeroProps {
  lang: string;
  copy: HeroCopy;
}

export default function Hero({ lang, copy }: HeroProps) {
  const portfolioHref = `/${lang}/portafolio`;

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-white shadow-[0_25px_80px_-20px_rgba(8,47,73,0.6)] sm:px-12 lg:flex lg:items-center lg:gap-16 lg:px-20 lg:py-28">
      <div className="absolute -left-40 top-1/3 h-64 w-64 rounded-full bg-purple-500/30 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px]" aria-hidden />

      <div className="relative z-10 max-w-xl space-y-8">
        <div className="flex items-center gap-3 text-sm font-medium text-cyan-200">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 uppercase tracking-widest">
            {copy.badge}
          </span>
          <span className="text-cyan-100/80">{copy.eyebrow}</span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {copy.title}
        </h1>

        <p className="text-lg text-slate-200/80 sm:text-xl">
          {copy.subtitle}
        </p>

        <ul className="grid gap-3 text-sm text-slate-200/70 sm:grid-cols-2">
          {copy.bulletPoints.map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2 backdrop-blur-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            {copy.primaryCta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href={portfolioHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {copy.secondaryCta}
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-12 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:mt-0">
        <div className="mb-6 text-xs uppercase tracking-[0.35em] text-white/60">Stacks soportados</div>
        <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
          {['ERC20/721/1155', 'Smart Wallets', 'Gasless Payments', 'AI Agents'].map((capability) => (
            <div key={capability} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              {capability}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-slate-900 px-5 py-4 text-xs text-white/80">
          <p className="font-semibold uppercase tracking-[0.3em] text-white/60">
            Trusted by teams using thirdweb
          </p>
          <p className="mt-2 text-sm">SOC2 + auditorías Safe | Soporte 24/7 | Operación desde Suiza 🇨🇭</p>
        </div>
      </div>
    </section>
  );
}
