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
                 세렌에서 진행하고 있는 프로젝트를 소개합니다
                 </p>
                </h2>
              </div>
            </div>

            {/* Middle: Featured Image */}
            <div className="md:col-span-4 order-3 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden border border-black group">
                <img 
                  src={VISION_IMAGE} 
                  alt="Vision Visual" 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>

            {/* Right: Text Description */}
            <div className="md:col-span-4 flex flex-col order-2 md:order-3">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-black/90">
                세렌(SEREN)은 기술과 철학이 만나는 곳입니다. 1인 법인 기반의 다각화 비즈니스 구조를 통해 
                <span className="italic font-serif-display text-black"> 콘텐츠 하나가 브랜드가 되고, 기술을 만나 시스템으로 완성되는 과정 </span> 
                자체를 증명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Work Section (ID: work) */}
        <section id="work" className="flex flex-col">
          <div className="px-6 md:px-12 pt-12 pb-5 border-y border-black flex justify-between items-center bg-[#E0D7FF]">
             <h2 className="relative z-10 flex flex-col leading-none tracking-tighter uppercase font-black">
                  <span className="text-6xl md:text-[90px] text-black mb-1">
                    SEREN
                  </span>
                   <span className="text-6xl md:text-[90px] text-outline mt-1">
                    Project
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 max-w-xs mt-1 leading-relaxed">
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