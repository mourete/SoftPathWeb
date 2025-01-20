const Quote: React.FC = () => {
  return (
    <section className="relative h-96 overflow-hidden" style={{ height: "300px" }}>
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform ease-out"
        style={{
          backgroundImage: 'url(/imagen4_nosotros.jpg)',
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-6xl font-bold text-white italic">
          "Nuestra experiencia habla por nosotros"
        </h1>
      </div>
    </section>
  );
};

export default Quote;
