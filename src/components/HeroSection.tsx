
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        <h1 className="font-lato font-light text-5xl md:text-6xl text-black mb-8 leading-tight">
          Caminho para o Autoconhecimento
        </h1>
        
        <p className="font-lato font-light text-xl md:text-2xl text-black mb-16 leading-relaxed">
          Acolhimento e transformação através da psicanálise
        </p>
        
        <button 
          onClick={scrollToContact}
          className="font-lato font-light text-lg border border-black px-12 py-4 text-black bg-transparent hover:bg-gray-100 transition-colors duration-300"
        >
          Agende uma Sessão
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
