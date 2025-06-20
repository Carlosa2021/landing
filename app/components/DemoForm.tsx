"use client";

import { useState } from "react";

export default function DemoForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Aquí puedes enviar el email a tu backend o integrarlo con Formspree, Brevo, etc.
    setSubmitted(true);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h3 className="text-xl font-bold mb-2">Solicita tu demo personalizada</h3>
      <p className="text-gray-300 text-sm mb-4">
        Déjanos tu correo y te contactaremos en menos de 24 horas.
      </p>
      {submitted ? (
        <p className="text-green-400 font-semibold">✅ Gracias, te contactaremos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
          >
            Enviar solicitud
          </button>
        </form>
      )}
    </div>
  );
}
