"use client"; // Esto marca el componente como cliente

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="relative">
        <Image src="/logo.png" alt="SoftPath" width={200} height={200} className="max-w-md" />
      </div>
      <ul className="flex space-x-4 text-sm">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-600 font-bold" : "text-black-700"
            } hover:text-blue-600`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="/nosotros"
            className={`${
              pathname === "/nosotros"
                ? "text-blue-600 font-bold"
                : "text-black-700"
            } hover:text-blue-600`}
          >
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link
            href="/servicios"
            className={`${
              pathname === "/servicios"
                ? "text-blue-600 font-bold"
                : "text-black-700"
            } hover:text-blue-600`}
          >
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className={`${
              pathname === "/contacto"
                ? "text-blue-600 font-bold"
                : "text-black-700"
            } hover:text-blue-600`}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
      >
        <FaWhatsapp size={20} className="mr-2" />
        Agendar Cita
      </a>
    </nav>
  );
};

export default Navbar;
