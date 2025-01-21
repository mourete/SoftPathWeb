import { FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-between w-full h-[120vh] bg-cover"
      style={{
        backgroundImage: "url('/imagen_inicio.png')"
      }}
    >
      <div className="absolute inset-0 bg-opacity-30"></div>
      
      <div className="relative z-10 flex flex-col max-w-2xl pl-12 text-white">
        <h1 className="text-8xl font-bold text-blue-900">
          Reducimos riesgos, construimos confianza
        </h1>
        <p className="mt-4 text-lg text-blue-700">
          Brindamos soluciones vanguardistas respaldadas por tecnologías
          avanzadas de procesamiento, almacenamiento y respaldo de la
          información. Nos aseguramos de que tu empresa cumpla con las
          regulaciones y normativas vigentes, evitando posibles sanciones y
          riesgos legales.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=528182109701&text=Hola%2C%20me%20gustaría%20más%20información."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-4 py-2 text-base font-medium text-white bg-green-600 rounded hover:bg-green-700"
          style={{ maxWidth: 'fit-content' }}
        >
          <FaWhatsapp size={16} className="mr-2" />
          Agendar Cita
        </a>

      </div>
    </section>
  );
};

export default Hero;
