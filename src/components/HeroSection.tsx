
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center px-8 overflow-hidden">
      {/* Elementos geométricos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo grande no canto superior direito */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-black rounded-full opacity-5 animate-pulse"></div>
        
        {/* Linha diagonal sutil */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-black opacity-10 transform rotate-12"></div>
        
        {/* Pequenos elementos geométricos */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 right-32 w-1 h-8 bg-black opacity-20 transform rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 border border-black opacity-15 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Elemento retangular moderno */}
        <div className="absolute bottom-1/4 left-1/4 w-20 h-1 bg-black opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Elemento decorativo acima do título */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-8 h-px bg-black"></div>
          </div>
        </div>

        <h1 className="font-lato font-light text-5xl md:text-7xl text-black mb-8 leading-tight tracking-wide">
          Caminho para o
          <span className="block relative">
            Autoconhecimento
            {/* Linha decorativa sob a palavra */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-black opacity-30"></div>
          </span>
        </h1>
        
        <p className="font-lato font-light text-xl md:text-2xl text-black mb-16 leading-relaxed max-w-2xl mx-auto">
          Acolhimento e transformação através da psicanálise
        </p>

        {/* Container do botão com elemento decorativo */}
        <div className="relative inline-block">
          {/* Elemento decorativo atrás do botão */}
          <div className="absolute -inset-4 bg-black opacity-5 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <button 
            onClick={scrollToContact}
            className="relative font-lato font-light text-lg border border-black px-12 py-4 text-black bg-transparent hover:bg-black hover:text-white transition-all duration-500 group"
          >
            Agende uma Sessão
            {/* Seta animada dentro do botão */}
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Elemento decorativo abaixo */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center space-y-2 opacity-30">
            <div className="w-px h-8 bg-black animate-pulse"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
