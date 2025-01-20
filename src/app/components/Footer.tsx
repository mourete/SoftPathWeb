import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiClock } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="bg-blue-500 text-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <HiLocationMarker className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Dirección</h3>
            <p className="mt-1">Monterrey, Nuevo León</p>
          </div>
          <div>
            <HiMail className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Email</h3>
            <p className="mt-1">contacto@marksoft.com.mx</p>
          </div>
          <div>
            <HiClock className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Nuestro horario</h3>
            <p className="mt-1">Lunes a viernes 9:00 am a 6:00 pm</p>
            <p>Sábado de 9:00 am a 2:00 pm</p>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-300" />

      {/* Sección inferior con las redes sociales y copyright */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-sm text-gray-600">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.facebook.com/MarksoftOficial"
              className="hover:text-blue-700"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/marksoft_mx/"
              className="hover:text-blue-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=528182109701&text&type=phone_number&app_absent=0"
              className="hover:text-blue-700"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
          <p className="text-center">Copyright © 2025 SoftPath</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
