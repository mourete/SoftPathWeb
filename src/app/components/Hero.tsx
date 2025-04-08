import { FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center w-full h-[120vh] bg-cover bg-center px-4 md:px-12"
      style={{
        backgroundImage: "url('/imagen_inicio.png')"
      }}
    >
      {/* Eliminado el fondo blanco opaco */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-40"></div> */}

      <div className="relative z-10 flex flex-col max-w-2xl text-left text-white">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-900 leading-tight">
          Reducimos riesgos, <br /> construimos confianza
        </h1>

        <p className="mt-4 text-lg md:text-ls text-black max-w-1xl">
          Brindamos soluciones vanguardistas respaldadas por tecnologías
          avanzadas de procesamiento, almacenamiento y respaldo de la
          información. Nos aseguramos de que tu empresa cumpla con las
          regulaciones y normativas vigentes, evitando posibles sanciones y
          riesgos legales.
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-4 py-2 text-base font-medium text-white bg-green-600 rounded hover:bg-green-700 w-max"
        >
          <FaWhatsapp size={16} className="mr-2" />
          Agendar Cita
        </a>
      </div>
    </section>
  );
};

export default Hero;
