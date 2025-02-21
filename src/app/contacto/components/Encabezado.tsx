import Image from 'next/image';

const Encabezado: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900">¡Brindamos soluciones integrales para tu empresa, contáctanos!</h1>
          <Image
          src="/contacto.png"
          className="mt-8 mx-auto rounded-lg shadow-md"
          alt= "Contacto"
          width={800}
          height={800}
        />
        </div>
      </section>
    </div>
  );
};

export default Encabezado;