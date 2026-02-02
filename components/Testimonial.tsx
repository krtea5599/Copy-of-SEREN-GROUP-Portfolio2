import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed mb-12 text-center">
          "창작자와 지역, AI를 연결하여<br />
           혼자서도 나만의 브랜드를<br />
           구축하는 사례를 만듭니다.<br /><br />
           당신의 실험이<br />
           곧 콘텐츠가 되는 곳,<br />
           바로 세렌(SEREN)입니다."
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#3B82F6] shadow-xl">
            <img 
              src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
              alt="주식회사 세렌 대표" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-[#3B82F6]">주식회사 세렌 대표</span>
          <span className="text-[10px] opacity-60 uppercase tracking-[0.15em] mt-2">
            Experience Designer & 1-Person Brand Strategist
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;