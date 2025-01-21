const Image: React.FC = () => {
    return (
      <section className="py-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <img
            src="/imagen3_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
          <img
            src="/imagen4_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
          <img
            src="/imagen5_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <img
            src="/imagen6_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
          <img
            src="/imagen7_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
          <img
            src="/imagen8_inicio.png"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </section>
    );
  };
  
  export default Image;
  