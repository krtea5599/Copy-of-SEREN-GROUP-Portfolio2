import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'VISION', href: '#vision' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-10 py-6 bg-white/90">
        <div className="text-[10px] md:text-xs font-black tracking-tighter uppercase leading-tight text-black">
          PORTFOLIO<br />
          OF SEREN COMPANY
        </div>
        <button 
          onClick={toggleMenu}
          className="group flex items-center space-x-3 focus:outline-none"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black group-hover:opacity-50 transition-opacity">
            {isOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 border border-black flex items-center justify-center overflow-hidden">
             <div className={`w-full h-full bg-[#3B82F6] transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}></div>
          </div>
        </button>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-[#E0D7FF] z-[90] transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 md:space-y-10">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className="text-5xl md:text-8xl font-black tracking-tighter text-black hover:text-outline transition-all duration-300 transform hover:scale-105"
            >
              {item.name}
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center">
          <p className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase mb-4">Seren Group Universe</p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs font-black uppercase hover:opacity-50 transition-opacity border-b border-black">Instagram</a>
            <a href="#" className="text-xs font-black uppercase hover:opacity-50 transition-opacity border-b border-black">Youtube</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;