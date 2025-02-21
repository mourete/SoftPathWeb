import Footer from "@/app/components/Footer";
import Formulario from "@/app/servicios/components/Formulario"
import Image from 'next/image';

const DetallesServicio: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-8">Más detalles de nuestros servicios</h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">+ Beneficios de nuestros servicios</h3>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li>- Asegura la protección constante de tu empresa ante posibles amenazas, garantizando una operación ininterrumpida.</li>
            <li>- Garantiza que tus procesos se alineen con regulaciones vigentes, asegurando un cumplimiento normativo sólido.</li>
            <li>- Optimiza la eficiencia operativa corrigiendo fallos en procesos, identificados y mejorados de manera proactiva.</li>
            <li>- Facilita decisiones estratégicas basadas en datos y análisis, proporcionando información clave para el crecimiento de tu empresa.</li>
            <li>- Protege la información sensible de tu empresa cumpliendo con estándares de seguridad y privacidad de manera eficaz.</li>
            <li>- Maximiza el uso de recursos mediante la identificación y asignación eficiente, mejorando la productividad.</li>
          </ul>
        </div>

        <div>
          <Image
            src="/imagen_detalles.png"
            alt="Detalles del servicio"
            className="w-full h-full object-cover shadow-md"
            width={400}
            height={200}
          />
        </div>
      </div>
      <Formulario />
      <Footer />
    </div>
  );
};

export default DetallesServicio;
