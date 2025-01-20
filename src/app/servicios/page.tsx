import HeroServices from "./components/Encabezado";
import QuoteServices from "./components/Cita";
import Solutions from "./components/Soluciones";
import ServiceForm from "./components/Formulario";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div>
      <HeroServices />
      <QuoteServices />
      <Solutions />
      <ServiceForm />
      <Footer />
    </div>
  );
}
