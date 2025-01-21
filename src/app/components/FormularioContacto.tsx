const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/formulario.png"  
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div>
          <p className="mt-4 text-lg">Inicia tu viaje hacia la tranquilidad empresarial.</p>
          <h2 className="text-3xl font-bold mt-4">¡Contacta con Nosotros!</h2>
          <p className="mt-4">
            Completa el formulario de contacto y descubre cómo podemos trabajar juntos para garantizar la seguridad y protección que tu empresa merece.
          </p>
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
            />
            <input
              type="text"
              placeholder="Número de teléfono / Celular"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
              rows={4}
            />
            <button className="px-6 py-2 bg-green-600 rounded hover:bg-green-700 text-white">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
