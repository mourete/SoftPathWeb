
import Link from "next/link";

const solutions = [
    {
      title: "1. Protección de datos personales",
      description:
        "Cumplimos con la Ley Federal de Protección de Datos para garantizar la seguridad y regulación de la información personal. ¡Protege la privacidad de tus clientes y cumple con los requisitos legales ahora!",
      icon: "👤",
    },
    {
      title: "2. Store Check",
      description:
        "Optimiza tu empresa con Store Check, integrando herramientas para mantener estándares de calidad y cumplir con eficacia los procesos, en conformidad con el marco legal.",
      icon: "✔️",
    },
    {
      title: "3. Paperstore",
      description:
        "Descubre nuestro sistema dinámico de levantamiento y análisis de información. Nuestro software es fácil de usar, intuitivo y se obtiene por licencia.",
      icon: "📄",
    },
    {
      title: "4. Administración, levantamiento y conciliación de activos fijos",
      description:
        "Optimiza tus activos con nuestro servicio integral de gestión. Mejoras financieras, fiscales y de producción aseguradas. Descubre cómo maximizar tus recursos para lograr resultados a corto plazo.",
      icon: "📋",
    },
    {
      title: "5. Administración y digitalización de documentos físicos",
      description:
        "El objetivo principal de este sistema es facilitar el acceso, la gestión y el almacenamiento de la información contenida en los documentos físicos, eliminando la necesidad de depender exclusivamente de copias impresas.",
      icon: "📱",
    },
    {
      title: "6. Administración y depuración de documentos físicos",
      description:
        "Administra y depura documentos físicos de tu empresa. Garantizamos un almacenamiento eficiente, conservación, acceso seguro y la eventual eliminación de documentos sin valor legal o necesarios.",
      icon: "📂",
    },
    {
        title: "7. Análisis de riesgos y gestión de tareas",
        description:
          "Un análisis de riesgos empresarial transforma la seguridad de tu organización. Este proceso sistemático identifica, evalúa y gestiona los riesgos a los que está expuesta una empresa. Nuestra solución integral te brinda la tranquilidad de tomar decisiones informadas para proteger tu empresa.",
        icon: "📱",
      },
  ];
  
  const Solutions: React.FC = () => {
    return (
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-800">Soluciones integrales</h2>
        <p className="mt-4 text-center text-gray-600">
          Desde la identificación hasta la mitigación, nuestro enfoque estratégico te guiará hacia decisiones informadas.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-blue-700">{solution.title}</h3>
              <p className="mt-2 text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
        <Link href="/servicios/detalles-servicio" className="px-6 py-3 text-white bg-green-600 rounded hover:bg-green-700">
            Saber más
        </Link>
        </div>

      </section>
    );
  };
  
  export default Solutions;
  