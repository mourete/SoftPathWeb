import { FaWhatsapp, FaExclamation, FaCheck } from "react-icons/fa";
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 mb-6">
            Somos tu socio de confianza en gestión de riesgos. Nuestra combinación de experiencia, 
            tecnología de punta y enfoque proactivo nos diferencia. Protegemos lo que más valoras: <strong>tu éxito</strong>.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <FaWhatsapp size={16} className="mr-2" />
            Agendar Cita
          </a>
        </div>

        <div className="relative">
          <Image
            src="/imagen2_inicio.png"
            className="shadow-md mb-4"
            alt="Por qué elegirnos"
            width={500}
            height={500}
          />
          <div className="grid grid-cols-2">
            <div className="bg-teal-500 text-blue-900 text-center py-6 flex flex-col items-center">
              <FaExclamation size={24} className="mb-2 text-white" />
              <div className="text-xl font-bold">EVITA SANCIONES</div>
            </div>
            <div className="bg-teal-500 text-blue-900 text-center py-6 flex flex-col items-center">
              <FaCheck size={24} className="mb-2 text-white" />
              <div className="text-xl font-bold">TOMA DECISIONES ESTRATÉGICAS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
