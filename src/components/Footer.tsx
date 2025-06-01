
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center font-lato font-light text-sm text-black">
          <p>
            © {currentYear} Dra. Ana Silva • Psicologia Clínica & Psicanálise
            <span className="mx-4">|</span>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <span className="mx-2">•</span>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
