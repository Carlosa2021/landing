'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: string;
  copy: {
    home: string;
    services: string;
    portfolio: string;
    cta: string;
  };
}

export default function Navbar({ lang, copy }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tight hover:opacity-90">
          ChainX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#inicio" className="hover:text-gray-300 transition">{copy.home}</a>
          <a href="#servicios" className="hover:text-gray-300 transition">{copy.services}</a>
          <Link href={`/${lang}/portafolio`} className="hover:text-gray-300 transition">{copy.portfolio}</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 text-sm rounded-md font-medium hover:bg-gray-100 transition"
          >
            {copy.cta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4">
          <a href="#inicio" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>{copy.home}</a>
          <a href="#servicios" className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>{copy.services}</a>
          <Link href={`/${lang}/portafolio`} className="block hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>{copy.portfolio}</Link>
          <a
            href="#contact"
            className="block mt-2 bg-white text-black px-4 py-2 text-sm rounded-md font-medium text-center hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            {copy.cta}
          </a>
        </div>
      )}
    </header>
  );
}
