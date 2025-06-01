
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.whatsapp) {
      // Simular envio do formulário
      console.log('Formulário enviado:', formData);
      setIsSubmitted(true);
      
      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', whatsapp: '' });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-24 px-8 bg-white">
      <div className="max-w-md mx-auto">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome (obrigatório)"
                className="w-full py-4 px-0 font-lato font-light text-black border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:ring-0 focus:outline-none focus:border-black bg-transparent"
                required
              />
              
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp (obrigatório)"
                className="w-full py-4 px-0 font-lato font-light text-black border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:ring-0 focus:outline-none focus:border-black bg-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-lato font-light hover:bg-white hover:text-black hover:border hover:border-black transition-colors duration-300"
            >
              Entrar em Contato
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <p className="font-lato font-light text-xl text-black">
              Obrigado! Responderemos em breve.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
