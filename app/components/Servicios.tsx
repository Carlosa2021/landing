'use client';

export default function Servicios() {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-gray-700 rounded-lg bg-zinc-900">
          <span className="text-3xl">✨</span>
          <h3 className="font-bold text-xl mt-4 mb-2">Tokenización Inteligente</h3>
          <p className="text-sm text-gray-300">
            Convierte activos reales en tokens digitales cumpliendo con MICA/KYC/AML.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-lg bg-zinc-900">
          <span className="text-3xl">👛</span>
          <h3 className="font-bold text-xl mt-4 mb-2">Conexión Total</h3>
          <p className="text-sm text-gray-300">
            Compatible con +500 wallets, email, redes sociales y cuentas abstractas.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-lg bg-zinc-900">
          <span className="text-3xl">✅</span>
          <h3 className="font-bold text-xl mt-4 mb-2">IA & Marketplace</h3>
          <p className="text-sm text-gray-300">
            Crea NFTs con IA usando OpenAI. Administra colecciones ERC-721 y 1155 desde tu panel Nebula.
          </p>
        </div>
      </div>
    </section>
  );
}
