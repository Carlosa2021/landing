'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import CallToAction from './components/CallToAction';
import ContactSmartForm from './components/ContactSmartForm';

export default function Home() {

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 pt-32 pb-12 scroll-smooth"
        id="main-content"
      >
        {/* Hero - Sección principal */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Servicios - Qué ofrecemos */}
        <section id="servicios" className="mt-32">
          <Servicios />
        </section>

        {/* Demo - Llamado a la acción + Formulario */}
        <section id="demo" className="mt-32 space-y-12 text-center">
          <CallToAction />
          <ContactSmartForm />
        </section>

        {/* Footer */}
        <footer className="mt-32 text-center text-sm text-gray-600 border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} <strong>ChainX</strong>. Web3 solutions made in Switzerland 🇨🇭
        </footer>
      </main>
    </>
  );
}
