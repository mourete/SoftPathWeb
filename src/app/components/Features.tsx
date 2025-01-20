const features = [
    {
      title: "Seguridad",
      description: "Protegemos tus activos y datos, mitigando riesgos de manera efectiva.",
      icon: "🔑",
    },
    {
      title: "Innovación",
      description: "Superamos desafíos e impulsamos la innovación, manteniendo a tu empresa líder.",
      icon: "💡",
    },
    {
      title: "Crecimiento",
      description: "Optimizamos el crecimiento de tu empresa y recursos con un enfoque proactivo.",
      icon: "📈",
    },
  ];
  
  const Features: React.FC = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  