// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Impulsa tu negocio con <br className="hidden sm:inline" /> Web3
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Plataforma todo-en-uno para tokenización, marketplaces NFT y ecosistemas de wallet
        con tecnología IA.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#demo"
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Solicitar Demo
        </a>
        <a
          href="/portafolio"
          className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-black transition"
        >
          Ver Portafolio
        </a>
      </div>
    </section>
  );
}
