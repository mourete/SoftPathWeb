const testimonials = [
    {
      name: "Jose",
      feedback:
        "Desde que optamos por el equipo de Softpath, nuestra seguridad y tranquilidad se han elevado a un nivel completamente nuevo. Su enfoque proactivo en la gestión de riesgos ha sido clave para anticipar y superar desafíos. ¡Una inversión invaluable para cualquier empresa!",
      image: "/testimonio1.png",
    },
    {
      name: "Ricardo",
      feedback:
        "No podemos dejar de elogiar el servicio de resguardo de información de Softpath. Gracias a su enfoque integral, nuestras operaciones no solo son más seguras sino también más eficientes. Una elección estratégica para cualquier empresa que valore la seguridad de la información.",
      image: "/testimonio2.jpg",
    },
  ];
  
  const Testimonials: React.FC = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold text-center text-blue-900">Testimonios</h2>
          <p className="mt-5 text-center text-gray-600">
            Nuestra experiencia en gestión de riesgos, análisis de datos y resguardo de la información ha dejado huella en empresas que confian en nosotros.
            Lee lo que dicen nuestros testimonios y únete a la lista de empresas seguras y protegidas que han experimentado el valor de nuestro servicio.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 bg-gray-50 rounded-lg shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <blockquote className="mt-4 text-gray-600 italic">
                  "{testimonial.feedback}"
                </blockquote>
                <p className="mt-4 text-blue-700 font-semibold text-center">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  