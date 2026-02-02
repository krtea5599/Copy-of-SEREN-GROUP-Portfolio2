import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E0D7FF] flex flex-col items-center pt-32 md:pt-40 pb-10 px-6 overflow-hidden">
      {/* Editorial Text Header */}
      <div className="w-full max-w-7xl flex flex-col items-center text-center mb-4 md:mb-6">
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter uppercase font-black animate-slideUp">
          <span className="text-7xl md:text-[180px] text-black">
            SEREN
          </span>
          <span className="text-7xl md:text-[180px] text-outline">
            COMPANY
          </span>
        </h1>
      </div>

      {/* Main Image - Guaranteed not to cut with object-contain */}
      <div className="w-full max-w-5xl flex-1 relative flex items-center justify-center">
        <div className="w-full h-full max-h-[65vh] md:max-h-[75vh] flex items-center justify-center">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="Seren Group Founder" 
            className="w-full h-full object-contain animate-fadeIn"
          />
        </div>
        
        {/* Designer Label */}
        <div className="absolute bottom-4 right-0 md:right-10 bg-black text-[#FFFFFF] px-6 py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl">
          주식회사 세렌 대표
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;