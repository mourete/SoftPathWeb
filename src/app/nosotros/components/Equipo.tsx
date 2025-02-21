import Image from 'next/image';

const ImageGallery: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <Image
          src="/imagen1_nosotros.png"
          className="w-full h-auto rounded shadow-md"
          alt="nosotros"
          width={500}
          height={500}
        />
        <Image
          src="/imagen2_nosotros.png"
          className="w-full h-auto rounded shadow-md"
          alt="nosotros"
          width={500}
          height={500}
        />
        <Image
          src="/imagen3_nosotros.png"
          className="w-full h-auto rounded shadow-md"
          alt="nosotros"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ImageGallery;
