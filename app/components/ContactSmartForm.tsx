'use client';
import { useState } from 'react';

export default function ContactSmartForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    interest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim() === '') return alert('Por favor ingresa tu email');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes conectar con tu backend, email service o automatización
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje, te contactaremos pronto.');
    setFormData({ email: '', name: '', message: '', interest: '' });
    setStep(1);
  };

  return (
    <div className="max-w-xl mx-auto mt-24 bg-gray-800/40 rounded-xl p-8 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {step === 1 ? 'Solicita tu demo personalizada' : 'Cuéntanos un poco más'}
      </h2>

      {step === 1 && (
        <form onSubmit={handleStep1} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Continuar
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nombre (opcional)</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-600"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Mensaje</label>
            <textarea
              name="message"
              placeholder="¿En qué podemos ayudarte?"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-600"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Interés</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-600"
            >
              <option value="">Selecciona una opción</option>
              <option value="tokenizacion">Tokenización</option>
              <option value="marketplace">Marketplace NFT</option>
              <option value="wallet">Integración de Wallet</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"
            >
              Atrás
            </button>
            <button
              type="submit"
              className="w-1/2 bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
