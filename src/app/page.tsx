import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyChooseUs from "./components/PorqueElegirnos";
import Testimonials from "./components/Testimonios";
import ContactForm from "./components/FormularioContacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
