import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '../../../lib/i18n/settings';

export default async function PortafolioPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-20">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Nuestro Portafolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Proyectos Web3 reales desarrollados con tecnología de vanguardia. Tokenización, NFT Marketplaces,
          integración de wallets y más.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Tokenización Inmobiliaria"
            image="/portafolio/tokenizacion.png"
            description="Plataforma que permite comprar fracciones de inmuebles con stablecoins, 100% regulada y compliant (MiCA)."
            link="https://rwa-inmo-token.vercel.app/"
          />

          <ProjectCard
            title="RWA Marketplace Inmobiliario IA"
            image="/portafolio/marketplace.png"
            description="Inmobiliarias tokenizan sus inmuebles y los venden como NFTs. Compatible con múltiples wallets y contratos ERC-721, ERC-20, ERC-1155."
            link="https://inmo-market-chain-x.vercel.app/"
          />

          <ProjectCard
            title="Memories NFT Marketplace"
            image="/portafolio/memories.png"
            description="DApp para mintear NFTs únicos o colecciones completas en Polygon, con experiencias gasless y panel de analytics para creadores."
            link="https://memories.chainx.ch/"
          />

          <ProjectCard
            title="DEX personalizado estilo Uniswap"
            image="/portafolio/dex.png"
            description="Intercambios de tokens sobre Polygon con UI profesional y contratos smart de liquidez y swap."
            link="https://stable-lend.vercel.app/#vaults"
          />

          <ProjectCard
            title="ChainX Web3 Checkout"
            image="/portafolio/checkout.png"
            description="Checkout Web3 embebible para pagos con USDC, on-ramps fiat y soporte multi-wallet, inspirado en experiencias Apple-grade."
            link="https://checkout-rosy.vercel.app/"
          />
        </div>

        <div className="mt-16">
          <Link
            href={`/${lang}`}
            className="text-gray-400 hover:underline text-sm transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  image,
  description,
  link,
}: {
  title: string;
  image: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="rounded-lg mb-4 w-full h-48 object-cover"
        priority
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-sm transition-colors"
      >
        Ver proyecto →
      </a>
    </div>
  );
}
