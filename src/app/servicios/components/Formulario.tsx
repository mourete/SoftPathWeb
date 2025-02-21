import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Formulario: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
          <h2 className="text-5xl font-bold text-center text-blue-500">
            Solicita una sesión diagnóstico aquí
          </h2>
          <p className="mt-4 text-center text-black">
            Deja tus datos y obtén una sesión diagnóstico con nuestros especialistas.
          </p>
          <div className="mt-6 flex flex-col items-center space-y-4">
            <a
              href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-72 items-center justify-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              <FaWhatsapp size={20} className="mr-2" />
              Whatsapp
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=contacto@softpath.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-72 items-center justify-center px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              <FaGoogle size={20} className="mr-2" />
              Correo
            </a>
            <a
              href="https://www.facebook.com/softpathoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-72 items-center justify-center px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-950"
            >
              <FaFacebookF size={20} className="mr-2" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/softpathoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-72 items-center justify-center px-4 py-2 text-white rounded hover:opacity-90 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
            >
              <FaInstagram size={20} className="mr-2" />
              Instagram
            </a>

          </div>
        </section>

    );
  };
  
  export default Formulario;
  