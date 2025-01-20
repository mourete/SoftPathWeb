import Footer from "@/app/components/Footer"; // Ajusta la ruta según la ubicación real del componente Footer

const DetallesServicio: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 center">Más detalles de nuestros servicios</h1>
          <h3 className="text-2xl font-semibold text-green-700 mt-4">Beneficios de nuestros servicios</h3>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>
              Asegura la protección constante de tu empresa ante posibles amenazas, garantizando una operación ininterrumpida.
            </li>
            <li>
              Garantiza que tus procesos se alineen con regulaciones vigentes, asegurando un cumplimiento normativo sólido.
            </li>
            <li>
              Optimiza la eficiencia operativa corrigiendo fallos en procesos, identificados y mejorados de manera proactiva.
            </li>
            <li>
              Facilita decisiones estratégicas basadas en datos y análisis, proporcionando información clave para el crecimiento de tu empresa.
            </li>
            <li>
              Protege la información sensible de tu empresa cumpliendo con estándares de seguridad y privacidad de manera eficaz.
            </li>
            <li>
              Maximiza el uso de recursos mediante la identificación y asignación eficiente, mejorando la productividad.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/path-to-your-image.jpg"
            alt="Beneficios de nuestros servicios"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetallesServicio;
