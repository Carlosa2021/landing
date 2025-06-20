export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Agenda tu Demo</h1>
        <p className="text-gray-400 mb-8">
          Completa el formulario y nuestro equipo te contactará para mostrarte cómo ChainX puede ayudarte con tokenización y Web3.
        </p>

        {/* Aquí puedes integrar Calendly o un formulario nativo */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 bg-gray-800 rounded text-white"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 bg-gray-800 rounded text-white"
          />
          <textarea
            placeholder="Cuéntanos sobre tu proyecto"
            className="w-full px-4 py-3 bg-gray-800 rounded text-white"
            rows={4}
          />
          <button type="submit" className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200">
            Solicitar Demo
          </button>
        </form>
      </section>
    </main>
  );
}
