'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 px-6 py-4 flex justify-between items-center">
      <span className="text-white font-bold">ChainX</span>
      <ul className="flex gap-6 text-white text-sm">
        <li><a href="#inicio" className="hover:underline">Inicio</a></li>
        <li><a href="#demo" className="hover:underline">Demo</a></li>
        <li><a href="#servicios" className="hover:underline">Portafolio</a></li>
      </ul>
    </nav>
  );
}

