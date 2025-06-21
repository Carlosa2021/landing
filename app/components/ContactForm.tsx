// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías hacer una petición fetch a un backend o servicio de email.
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-3xl mx-auto py-16 text-white" id="contacto">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>

      {submitted ? (
        <div className="text-green-400 text-center text-lg">¡Gracias! Te responderemos pronto.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 bg-gray-800 border border-gray-700 placeholder-gray-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 bg-gray-800 border border-gray-700 placeholder-gray-400"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg p-3 bg-gray-800 border border-gray-700 placeholder-gray-400"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}
