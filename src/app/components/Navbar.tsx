"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">

        <div className="relative">
          <Image src="/logo.png" alt="Softpath" width={200} height={200} className="max-w-md" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 text-sm">
          {["/", "/nosotros", "/servicios", "/contacto"].map((path, index) => (
            <li key={path}>
              <Link
                href={path}
                className={`${
                  pathname === path ? "text-blue-600 font-bold" : "text-black-700"
                } hover:text-blue-600`}
              >
                {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"][index]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Agendar Cita
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {["/", "/nosotros", "/servicios", "/contacto"].map((path, index) => (
            <Link
              key={path}
              href={path}
              className={`block ${
                pathname === path ? "text-blue-600 font-bold" : "text-black-700"
              } hover:text-blue-600`}
              onClick={() => setMenuOpen(false)}
            >
              {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"][index]}
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 mt-2"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
