import ContactSmartForm from './ContactSmartForm';
import Link from 'next/link';

interface ContactCopy {
  stepOneTitle: string;
  stepTwoTitle: string;
  responseNote: string;
  emailLabel: string;
  emailPlaceholder: string;
  continueCta: string;
  nameLabel: string;
  messageLabel: string;
  interestLabel: string;
  interestPlaceholder: string;
  interestOptions: { value: string; label: string }[];
  backCta: string;
  submitCta: string;
  successMessage: string;
  missingEmail: string;
}

interface FinalCtaCopy {
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  form: ContactCopy;
}

export default function FinalCTA({
  copy,
  portfolioHref,
}: {
  copy: FinalCtaCopy;
  portfolioHref: string;
}) {
  return (
    <section id="contact" className="mt-32 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 shadow-[0_25px_70px_-30px_rgba(8,47,73,0.6)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base text-slate-200/70">{copy.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex flex-1 flex-col gap-4 text-sm text-slate-200/70">
            <a
              href="mailto:hello@chainx.ch"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {copy.primary}
            </a>
            <Link
              href={portfolioHref}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5"
            >
              {copy.secondary}
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/50">
              Support 24/7 · Operamos desde Suiza · Cumplimiento MiCA
            </p>
          </div>

          <div className="flex-1">
            <ContactSmartForm copy={copy.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
