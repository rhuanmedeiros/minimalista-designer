
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 py-6 px-8">
        <div className="flex justify-between items-center">
          <div 
            className="font-lato font-light text-black text-lg tracking-wider uppercase cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            DRA. ANA SILVA
          </div>
          
          <button 
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Menu"
          >
            <div className="w-6 h-px bg-black"></div>
            <div className="w-6 h-px bg-black"></div>
            <div className="w-6 h-px bg-black"></div>
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-40 flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8 font-lato font-light text-2xl">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
