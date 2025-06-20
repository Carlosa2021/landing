import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import CallToAction from './components/CallToAction';
import Hero from './components/Hero';
import DemoForm from './components/DemoForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 pt-32 pb-12">

        {/* Sección Hero (Inicio) */}
        <Hero />

        {/* Sección Servicios */}
        <Servicios id="servicios" />

        {/* Sección Call to Action + Formulario de Demo */}
        <section id="demo" className="mt-24 space-y-12">
          <CallToAction />
          <DemoForm />
        </section>

        {/* Footer */}
        <footer className="mt-32 text-center text-sm text-gray-600">
          © 2025 ChainX. Web3 solutions made in Switzerland 🇨🇭
        </footer>
      </main>
    </>
  );
}
