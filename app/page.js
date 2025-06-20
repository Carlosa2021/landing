export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Impulsa tu negocio con Web3
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Plataforma todo-en-uno para tokenización, marketplaces NFT y ecosistemas de wallet con tecnología IA.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#" className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">Solicitar Demo</a>
          <a href="#" className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black">Ver Portafolio</a>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-gray-700 rounded p-6">
          <div className="text-indigo-400 text-3xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-2">Tokenización Inteligente</h3>
          <p className="text-gray-400">Convierte activos reales en tokens digitales cumpliendo con MiCA/KYC/AML.</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-6">
          <div className="text-green-400 text-3xl mb-4">👛</div>
          <h3 className="text-xl font-semibold mb-2">Conexión Total</h3>
          <p className="text-gray-400">Compatible con +500 wallets, email, redes sociales y cuentas abstractas.</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-6">
          <div className="text-yellow-400 text-3xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">IA & Marketplace</h3>
          <p className="text-gray-400">Crea NFTs con IA usando OpenAI. Administra colecciones ERC-721 y 1155 desde tu panel Nebula.</p>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para transformar tu proyecto con Web3?
        </h2>
        <p className="text-gray-400 mb-6">
          Agenda una demo personalizada y descubre todo lo que ChainX puede hacer por ti.
        </p>
        <a href="#" className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">Empezar ahora</a>
      </section>

      <footer className="mt-32 text-center text-sm text-gray-600">
        © 2025 ChainX. Web3 solutions made in Switzerland 🇨🇭
      </footer>
    </main>
  );
}
