
const ServicesSection = () => {
  const services = [
    {
      title: "Psicoterapia Individual",
      subtitle: "Sessões semanais presenciais em consultório com duração de 50 minutos"
    },
    {
      title: "Atendimento Online",
      subtitle: "Sessões por videoconferência para maior comodidade e acessibilidade"
    },
    {
      title: "Terapia de Casal",
      subtitle: "Acompanhamento especializado para casais em processo de fortalecimento da relação"
    }
  ];

  return (
    <section id="servicos" className="py-24 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index}>
              <div className="text-center">
                <h3 className="font-lato font-light text-2xl md:text-3xl text-black mb-4">
                  {service.title}
                </h3>
                <p className="font-lato font-light text-lg text-black leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
              
              {index < services.length - 1 && (
                <div className="mt-16 border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
