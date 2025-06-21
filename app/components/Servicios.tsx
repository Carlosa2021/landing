'use client';

import { ShieldCheck, Wallet, Bot } from 'lucide-react';

export default function Servicios() {
  const servicios = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-400" />,
      title: 'Tokenización Inteligente',
      description:
        'Convierte activos reales en tokens digitales cumpliendo con normativa europea MICA, KYC y AML.',
    },
    {
      icon: <Wallet className="h-8 w-8 text-green-400" />,
      title: 'Conexión Total',
      description:
        'Compatible con +500 wallets, email, móvil, redes sociales y cuentas abstractas. Integra sin fricción.',
    },
    {
      icon: <Bot className="h-8 w-8 text-purple-400" />,
      title: 'IA & Marketplace',
      description:
        'Crea NFTs con IA (OpenAI) y gestiona colecciones ERC-721 y ERC-1155 desde tu panel de administración Nebula.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="p-6 border border-white/10 rounded-2xl bg-zinc-900 hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{servicio.icon}</div>
            <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
            <p className="text-gray-300 text-sm">{servicio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
