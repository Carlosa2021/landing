import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 pt-32 pb-12">

        {/* Sección Inicio */}
        <section id="inicio" className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Impulsa tu negocio con Web3
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Plataforma todo-en-uno para tokenización, marketplaces NFT y ecosistemas de wallet con tecnología IA.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#demo"
              className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200"
            >
              Solicitar Demo
            </a>
            <a
              href="#servicios"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black"
            >
              Ver Portafolio
            </a>
          </div>
        </section>

        {/* Sección Servicios */}
        <Servicios id="servicios" />

        {/* Sección Call to Action */}
        <CallToAction id="demo" />

        {/* Footer */}
        <footer className="mt-32 text-center text-sm text-gray-600">
          © 2025 ChainX. Web3 solutions made in Switzerland 🇨🇭
        </footer>
      </main>
    </>
  );
}
