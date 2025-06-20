import Link from 'next/link';

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Nuestro Portafolio</h1>
        <p className="text-lg text-gray-300 mb-12">
          Proyectos Web3 reales desarrollados con tecnología de vanguardia. Tokenización, NFT Marketplaces, integración de wallets y más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 text-left hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Tokenización Inmobiliaria</h3>
            <p className="text-gray-400 mb-4">Plataforma que permite comprar fracciones de inmuebles con stablecoins, 100% regulada y compliant (MiCA).</p>
            <a href="https://inmo-crypto.vercel.app" target="_blank" className="text-blue-400 hover:underline">Ver proyecto</a>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 text-left hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Marketplace NFT para Arte</h3>
            <p className="text-gray-400 mb-4">Artistas tokenizan sus obras y las venden como NFTs. Compatible con múltiples wallets y contratos ERC-721.</p>
            <a href="#" className="text-blue-400 hover:underline">Ver proyecto</a>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 text-left hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">DEX personalizado estilo Uniswap</h3>
            <p className="text-gray-400 mb-4">Intercambios de tokens sobre Polygon con UI profesional y contratos smart de liquidez y swap.</p>
            <a href="#" className="text-blue-400 hover:underline">Ver proyecto</a>
          </div>
        </div>

        <div className="mt-16">
          <Link href="/" className="text-gray-400 hover:underline">← Volver al inicio</Link>
        </div>
      </section>
    </main>
  );
}
