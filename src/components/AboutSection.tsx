
const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mx-auto md:mx-0">
            {/* Placeholder para foto em P&B */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
          </div>
          
          <div className="flex-1">
            <p className="font-lato font-light text-lg md:text-xl text-black leading-relaxed mb-6">
              Sou graduada em Psicologia pela Universidade de São Paulo, com especialização em Psicanálise. 
              Atuo na área clínica há mais de 10 anos, dedicando-me ao acompanhamento de pessoas em seus 
              processos de autoconhecimento e transformação.
            </p>
            
            <p className="font-lato font-light text-lg md:text-xl text-black leading-relaxed mb-6">
              Acredito profundamente no poder da escuta atenta e do vínculo terapêutico como instrumentos 
              fundamentais para o processo analítico. Minha abordagem se baseia na criação de um espaço 
              seguro e acolhedor, onde cada pessoa possa explorar suas questões mais profundas.
            </p>
            
            <p className="font-lato font-light text-lg md:text-xl text-black leading-relaxed">
              O trabalho analítico é uma jornada única e singular para cada pessoa, e meu papel é 
              acompanhar você nesse caminho de descobertas e crescimento pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
