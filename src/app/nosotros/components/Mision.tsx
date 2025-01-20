const MissionVision: React.FC = () => {
    return (
      <section className="py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <img
            src="/imagen5_nosotros.png"
            alt="Misión"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-500">Somos especialistas en gestión de riesgos y datos</h2>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-black">Misión</h3>
            <p className="mt-4 text-gray-600 text-justify">
            Ofrecemos soluciones especializadas para identificar, evaluar y mitigar riesgos en organizaciones. 
            Guiamos a nuestros clientes hacia decisiones informadas, minimizando riesgos y maximizando 
            oportunidades en cumplimiento con la legalidad y estándares de calidad.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-black">Visión</h3>
            <p className="mt-2 text-gray-600 text-justify">
            Ser líderes nacionales en análisis de datos y mitigación de riesgos. 
            Brindamos soluciones innovadoras para resguardar la continuidad operativa de las organizaciones y garantizar su seguridad a largo plazo.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;
  