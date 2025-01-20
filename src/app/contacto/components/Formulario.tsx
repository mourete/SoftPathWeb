const Formulario: React.FC = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Nombre"
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Correo Electrónico"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Asunto"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            ENVIAR
          </button>
        </form>
      </div>
    );
  };
  
  export default Formulario;
  