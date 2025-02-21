import Image from 'next/image';

const HeroServices: React.FC = () => {
    return (
      <section className="py-16 text-center bg-gray-100">
        <h1 className="text-7xl font-bold text-blue-900">¡Conoce nuestros servicios!</h1>
        <Image
          src="/imagen1_servicios.png"
          className="mt-8 mx-auto rounded-lg shadow-md"
          alt="Servicios"
          width={900}
          height={800}
        />
      </section>
    );
  };
  
  export default HeroServices;
  