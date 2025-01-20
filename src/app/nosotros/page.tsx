import HeroAbout from "./components/Encabezado";
import Team from "./components/Equipo";
import Quote from "./components/Cita";
import MissionVision from "./components/Mision";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <HeroAbout />
      <Team />
      <Quote />
      <MissionVision />
      <Footer />
    </div>
  );
}
