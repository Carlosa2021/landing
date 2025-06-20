'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="font-bold text-lg mr-6">
        <Link href="/">ChainX</Link>
      </div>

      {/* Links principales */}
      <div className="hidden md:flex gap-6 text-sm">
        <a href="#inicio" className="hover:underline">Inicio</a>
        <a href="#demo" className="hover:underline">Demo</a>
        <a href="/portafolio" className="hover:underline">Portafolio</a>
      </div>

      {/* Botón Solicitar Demo */}
      <div className="ml-auto hidden md:block">
        <a
          href="#demo"
          className="bg-white text-black text-sm px-4 py-2 rounded hover:bg-gray-200 font-semibold"
        >
          Solicitar Demo
        </a>
      </div>
    </nav>
  );
}
