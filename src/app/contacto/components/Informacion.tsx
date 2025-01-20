const Informacion: React.FC = () => {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-800">LLÁMENOS</h3>
          <p className="mt-2 text-gray-600">(+52) 81 8210 9701</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-800">ESCRÍBANOS</h3>
          <p className="mt-2 text-gray-600">contacto@marksoft.com.mx</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-800">DIRECCIÓN</h3>
          <p className="mt-2 text-gray-600">Monterrey, Nuevo León.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-800">HORARIOS</h3>
          <p className="mt-2 text-gray-600">
            Lunes a Viernes 9:00 am a 6:00 pm <br />
            Sábado de 9:00 am a 2:00 pm
          </p>
        </div>
      </div>
    );
  };
  
  export default Informacion;
  