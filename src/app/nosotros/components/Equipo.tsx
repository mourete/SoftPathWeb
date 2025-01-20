const ImageGallery: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <img
          src="/imagen1_nosotros.png"
          className="w-full h-auto rounded shadow-md"
        />
        <img
          src="/imagen2_nosotros.png"
          className="w-full h-auto rounded shadow-md"
        />
        <img
          src="/imagen3_nosotros.png"
          className="w-full h-auto rounded shadow-md"
        />
      </div>
    </section>
  );
};

export default ImageGallery;
