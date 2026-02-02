import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProjectItem from './components/ProjectItem.tsx';
import Testimonial from './components/Testimonial.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { PILLARS, VISION_IMAGE } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-black selection:text-[#E0D7FF]">
      <Navbar />
      
      <main>
        {/* Hero Section (ID: home) */}
        <Hero />
        
        {/* Vision Section (ID: vision) */}
        <section id="vision" className="px-6 md:px-12 pt-12 pb-12 border-t border-black bg-[#E0D7FF]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-center">
            
            {/* Left: Graphic Typography */}
            <div className="md:col-span-4 flex justify-start order-1">
              <div className="relative inline-block">
                <h2 className="relative z-10 flex flex-col leading-none tracking-tighter uppercase font-black">
                  <span className="text-6xl md:text-[90px] text-black mb-1">
                    SEREN
                  </span>
                  <span className="text-6xl md:text-[90px] text-outline mt-1">
                    VISION
                  </span>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80 max-w-xs mt-1 leading-relaxed">
                 세렌이 설계하고 실행해 온 프로젝트 구조를 소개합니다.
                 </p>
                </h2>
              </div>
            </div>

            {/* Middle: Featured Image */}
            <div className="md:col-span-4 order-3 md:order-2">
              <div className="relative aspect-[3/2] overflow-hidden border border-black group">
                <img 
                  src={VISION_IMAGE} 
                  alt="Vision Visual" 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>

            {/* Right: Text Description */}
            <div className="md:col-span-4 flex flex-col order-2 md:order-3">
            <p className="text-lg md:text-2xl font-normal leading-relaxed text-black/80 tracking-tight">
            <span className="font-black text-[#1040DD]">세렌</span>은 
            <span className="font-semibold text-black/90"> AI</span>를 활용해 아이디어를 
            <span className="font-semibold text-black/90"> 실행 가능한 구조</span>로 만들고,<br className="hidden md:block" />
            그 구조를 <span className="font-bold text-black/90">콘텐츠·교육·IP·사업</span>으로 확장하는 브랜드입니다.<br /><br className="md:hidden" />
            우리는 혼자서도 <span className="font-black text-black/90">지속 가능한 창작</span>과 <span className="font-black text-black/90">성장</span>을 가능하게 하는 방법을 설계합니다.
            </p>
            </div>
          </div>
        </section>

        {/* Work Section (ID: work) */}
        <section id="work" className="flex flex-col">
          <div className="px-6 md:px-12 pt-12 pb-5 border-y border-black flex justify-end items-end bg-[#E0D7FF]">
             <h2 className="relative z-10 flex flex-col items-end w-full leading-none tracking-tighter uppercase font-black text-right">
                  <span className="text-6xl md:text-[90px] text-black mb-1">
                    SEREN
                  </span>
                   <span className="text-6xl md:text-[90px] text-outline mt-1">
                    Project
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 max-w-xs mt-6 leading-relaxed self-end">
                 세렌에서 진행하고 있는 프로젝트를 소개합니다
                 </p>
                </h2>
          </div>
          
          {PILLARS.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </section>

        <Testimonial />
        
        {/* Contact Section (ID: contact) */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;