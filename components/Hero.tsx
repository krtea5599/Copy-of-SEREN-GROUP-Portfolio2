import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E0D7FF] flex flex-col items-center pt-24 pb-20 px-6 overflow-hidden relative">
      {/* Header Typography */}
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter uppercase font-black">
          <span className="text-6xl md:text-[140px] text-black">SEREN</span>
          <span className="text-6xl md:text-[140px] text-outline">COMPANY</span>
        </h1>
        
        {/* Introduction Line */}
        <div className="mt-8 mb-12 animate-fadeIn">
          <p className="text-lg md:text-2xl font-normal tracking-tight text-black/80 text-center leading-relaxed">
            안녕하세요.<br />
            <span className="font-black text-black/90">AI</span>와 <span className="font-black text-black/90">콘텐츠</span>, 
            <span className="font-black text-black/90">교육</span>과 <span className="font-black text-black/90">IP</span>를 연결하여<br />
            하나의 <span className="font-black text-black/90">브랜드 구조</span>를 <span className="font-black text-black/90">설계</span>하는<br />
            <span className="font-black text-[#1040DD]">1인 창작자 이정한</span>입니다.<br />
            <br />
            <span className="font-semibold text-black/90">아이디어</span>를 실행 가능한 <span className="font-semibold text-black/90">시스템</span>으로 만들고,<br />
            그것을 다시 <span className="font-semibold text-black/90">콘텐츠</span>와 <span className="font-semibold text-black/90">사업</span>으로 확장합니다.<br />
            지금부터, <span className="font-black text-[#1040DD]">세렌</span>을 소개합니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl relative flex flex-col items-center">
        {/* Founder Portrait Only */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden flex items-center justify-center relative z-0">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌" 
            className="w-full h-full object-contain object-top animate-fadeIn"
          />               
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;