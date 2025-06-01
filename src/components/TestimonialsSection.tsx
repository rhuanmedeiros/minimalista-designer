
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A terapia com Dra. Ana Silva mudou minha forma de enxergar a vida. Sinto-me mais consciente e capaz de lidar com meus desafios.",
      author: "Carla S."
    },
    {
      text: "Ambiente acolhedor e escuta atenciosa. As sessões me proporcionam um espaço seguro para autoconhecimento.",
      author: "João M."
    }
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="font-lato font-light text-xl md:text-2xl italic text-black mb-4">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-lato font-light text-lg text-gray-700">
                – {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
