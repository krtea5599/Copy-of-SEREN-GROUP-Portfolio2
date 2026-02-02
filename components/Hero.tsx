import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [cardInfo, setCardInfo] = useState({
    name: '최 연 우',
    phone: '010-2957-4228'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="home" className="min-h-screen bg-[#E0D7FF] flex flex-col items-center pt-24 pb-20 px-6 overflow-hidden relative">
      {/* Header Typography */}
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter uppercase font-black">
          <span className="text-6xl md:text-[140px] text-black">SEREN</span>
          <span className="text-6xl md:text-[140px] text-outline">COMPANY</span>
        </h1>
        
        {/* Introduction Line */}
       <p className="mt-4 mb-8 text-lg md:text-2xl font-normal tracking-tight text-black/80 animate-fadeIn text-center leading-relaxed">
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

      <div className="w-full max-w-4xl relative flex flex-col items-center">
        {/* 1. Founder Portrait */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden flex items-center justify-center relative z-0 mb-8 md:mb-12">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌" 
            className="w-full h-full object-contain object-top animate-fadeIn"
          />               
        </div>

        {/* 2. Business Card Input Area - Slim & White Version */}
        <div className="relative z-30 w-full max-w-[340px] bg-white border-[1.5px] border-black p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-slideUp">
          <div className="flex justify-between items-start mb-6">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#3B82F6]">Business Card</p>
            <div className="w-6 h-6 bg-black flex items-center justify-center text-white text-[9px] font-black">S</div>
          </div>
          
          <div className="space-y-5">
            <div className="flex flex-col">
              <label className="text-[10px] font-black uppercase opacity-40 mb-1">(주)세렌 대표이사</label>
              <input 
                type="text"
                name="name"
                value={cardInfo.name}
                onChange={handleChange}
                className="bg-transparent border-b border-black/10 py-1 text-lg md:text-xl font-black tracking-tight outline-none text-black focus:border-black transition-colors"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-black uppercase opacity-40 mb-1">Phone</label>
              <input 
                type="text"
                name="phone"
                value={cardInfo.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-black/10 py-1 text-base md:text-lg font-bold tracking-tight outline-none text-black focus:border-black transition-colors"
                placeholder="Phone"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;