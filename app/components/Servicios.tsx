'use client';

export default function Servicios() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
        <p className="text-gray-400 text-lg mt-4">
          Soluciones Web3 personalizadas con tecnología de vanguardia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Servicio 1 */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-2">Tokenización Inteligente</h3>
          <p className="text-gray-300 text-sm">
            Convierte activos reales en tokens digitales cumpliendo con regulaciones MICA/KYC/AML.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">👛</div>
          <h3 className="text-xl font-semibold mb-2">Conexión Total</h3>
          <p className="text-gray-300 text-sm">
            Compatible con +500 wallets, emails, redes sociales, móviles y cuentas abstractas.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">IA & Marketplace</h3>
          <p className="text-gray-300 text-sm">
            Genera y gestiona NFTs con IA (OpenAI). Administra colecciones ERC-721 y 1155 desde tu panel Nebula.
          </p>
        </div>
      </div>
    </section>
  );
}
