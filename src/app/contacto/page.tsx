import Footer from "@/app/components/Footer";
import FormularioContacto from "@/app/components/FormularioContacto"
import Encabezado from "@/app/contacto/components/Encabezado";

const Contacto: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Encabezado />
      <FormularioContacto />
      <Footer />
    </div>
  );
};

export default Contacto;
