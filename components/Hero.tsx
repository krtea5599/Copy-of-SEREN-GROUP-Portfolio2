import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E0D7FF] flex flex-col items-center pt-24 pb-20 px-6 overflow-hidden relative">
      {/* Main Container */}
      <div className="w-full max-w-4xl relative flex flex-col items-center">
        
        {/* Blue Frame System (Inspired by user image) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[90%] h-[100%] border-[6px] border-[#3B82F6] z-10 pointer-events-none md:w-[75%] md:h-[110%] opacity-90"></div>

        {/* Main Image - Color version */}
        <div className="w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden flex items-center justify-center relative z-0">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌 대표" 
            className="w-full h-full object-contain object-top animate-fadeIn"
          />
          
          {/* Representative Label Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black text-white px-8 py-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap">
            주식회사 세렌 대표
          </div>
        </div>

        {/* Bottom Typography Layout */}
        <div className="mt-16 md:mt-24 text-center z-20">
          <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter uppercase font-black">
            <span className="text-7xl md:text-[150px] text-black">
              SEREN
            </span>
            <span className="text-7xl md:text-[150px] text-outline">
              VISION
            </span>
          </h1>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;