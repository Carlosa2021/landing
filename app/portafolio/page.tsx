'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-20">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Nuestro Portafolio</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Proyectos Web3 reales desarrollados con tecnología de vanguardia. Tokenización, NFT Marketplaces,
          integración de wallets y más.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
            <Image
              src="/portafolio/tokenizacion.png"
              alt="Tokenización Inmobiliaria"
              width={400}
              height={240}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Tokenización Inmobiliaria</h3>
            <p className="text-gray-300 text-sm mb-4">
              Plataforma que permite comprar fracciones de inmuebles con stablecoins, 100% regulada y compliant (MiCA).
            </p>
            <a
              href="https://plataforma.chainx.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm transition-colors"
            >
              Ver proyecto →
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
            <Image
              src="/portafolio/marketplace.png"
              alt="Marketplace NFT"
              width={400}
              height={240}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Marketplace NFT para Real Estate</h3>
            <p className="text-gray-300 text-sm mb-4">
              Inmobiliarias tokenizan sus inmuebles y los venden como NFTs. Compatible con múltiples wallets y contratos ERC-721, ERC-20, ERC-1155.
            </p>
            <a
              href="https://inmomarket.chainx.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm transition-colors"
            >
              Ver proyecto →
            </a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
            <Image
              src="/portafolio/dex.png"
              alt="DEX Uniswap"
              width={400}
              height={240}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">DEX personalizado estilo Uniswap</h3>
            <p className="text-gray-300 text-sm mb-4">
              Intercambios de tokens sobre Polygon con UI profesional y contratos smart de liquidez y swap.
            </p>
            <a
              href="https://dex.inmotoken.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm transition-colors"
            >
              Ver proyecto →
            </a>
          </div>
        </div>

        <div className="mt-16">
          <Link href="/" className="text-gray-400 hover:underline text-sm transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
