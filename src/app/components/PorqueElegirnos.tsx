const WhyChooseUs: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">¿Por qué elegirnos?</h2>
            <p className="mt-4 text-gray-600">
              Somos tu socio de confianza en gestión de riesgos. Nuestra combinación de experiencia, 
              tecnología de punta y enfoque proactivo nos diferencia. Protegemos lo que más valoras: <strong>tu éxito</strong>.
            </p>
            <button className="mt-6 px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
              Agendar Cita
            </button>
          </div>
          <div>
            <img
              src="/images/why-choose-us.jpg"
              alt="Por qué elegirnos"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  