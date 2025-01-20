import Footer from "@/app/components/Footer";
import { Informacion, Formulario } from "@/app/contacto/components";

const Contacto: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">¡Brindamos soluciones integrales para tu empresa, contáctanos!</h1>
          <p className="mt-4 text-gray-600">
            Déjanos tus comentarios y con gusto nos pondremos en contacto.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Informacion />
          <Formulario />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contacto;
