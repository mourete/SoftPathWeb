import Image from 'next/image';

const Imagen: React.FC = () => {
    return (
      <section className="py-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <Image
            src="/imagen3_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
          <Image
            src="/imagen4_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
          <Image
            src="/imagen5_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <Image
            src="/imagen6_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
          <Image
            src="/imagen7_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
          <Image
            src="/imagen8_inicio.png"
            className="w-full h-auto rounded shadow-md"
            alt="inicio"
            width={600}
            height={600}
          />
        </div>
      </section>
    );
  };
  
  export default Imagen;
  