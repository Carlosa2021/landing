'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-lg pr-4">
        <Link href="/">ChainX</Link>
      </div>

      <div className="hidden md:flex gap-6 text-sm">
        <Link href="#inicio" className="hover:underline">Inicio</Link>
        <Link href="#servicios" className="hover:underline">Demo</Link>
        <Link href="#portafolio" className="hover:underline">Portafolio</Link>
      </div>

      <div className="ml-auto">
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
