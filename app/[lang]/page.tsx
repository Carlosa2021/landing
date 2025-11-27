// app/[lang]/page.tsx

import { getDictionary } from '../../lib/i18n/getDictionary';
import { Locale } from '../../lib/i18n/settings';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Capabilities from '../components/Capabilities';
import WalletEcosystem from '../components/WalletEcosystem';
import Integrations from '../components/Integrations';
import ProofSection from '../components/ProofSection';
import ComparisonTable from '../components/ComparisonTable';
import FinalCTA from '../components/FinalCTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} copy={dictionary.nav} />
      <main
        className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(147,51,234,0.12),transparent_60%)] text-white"
        id="main-content"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pt-32 pb-24 sm:px-8">
          <section id="inicio">
            <Hero lang={lang} copy={dictionary.hero} />
          </section>

          <section id="confianza">
            <Stats copy={dictionary.stats} />
          </section>
          <section id="servicios">
            <Capabilities copy={dictionary.capabilities} />
          </section>
          <WalletEcosystem copy={dictionary.wallet} />
          <Integrations copy={dictionary.integrations} />
          <ProofSection copy={dictionary.proof} />
          <ComparisonTable copy={dictionary.comparison} />
          <FinalCTA copy={dictionary.finalCta} portfolioHref={`/${lang}/portafolio`} />
        </div>

        <footer className="border-t border-white/10 bg-slate-950/70 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} <strong>ChainX</strong>. Swiss-grade Web3 infrastructure built with thirdweb.
        </footer>
      </main>
    </>
  );
}
