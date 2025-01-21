const ServiceForm: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-5xl font-bold text-center text-blue-500">Solicita una sesión diagnóstico aquí</h2>
        <p className="mt-4 text-center text-black">
          Deja tus datos en el siguiente formulario y obtén una sesión diagnóstico con nuestros especialistas.
        </p>
        <form className="mt-8 max-w-3xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Número de teléfono / Celular"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-2 border rounded h-32"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            ENVIAR
          </button>
        </form>
      </section>
    );
  };
  
  export default ServiceForm;
  