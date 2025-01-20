import { FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
      <section className="relative flex items-center justify-between w-full h-screen bg-gray-100">
        <div className="max-w-lg text-center sm:text-left">
          <h1 className="text-8xl font-bold text-blue-800">
            Reducimos riesgos, construimos confianza
          </h1>
          <p className="mt-4 text-gray-700 text-justify">
          Brindamos soluciones vanguardistas respaldadas por tecnologías avanzadas de procesamiento, almacenamiento y respaldo de la información. 
          Nos aseguramos de que tu empresa cumpla con las regulaciones y normativas vigentes, evitando posibles sanciones y riesgos legales.​
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=528182109701&text=Hola%2C%20me%20gustaría%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-40 px-2 py-1 text-white bg-green-600 rounded hover:bg-green-700">
            <FaWhatsapp size={20} className="mr-2" />
            Agendar Cita
          </a>

        </div>
        <div className="relative">
          <img
            src="/tecnologia.jpg"
            alt="Tecnología y Confianza"
            className="max-w-md"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  