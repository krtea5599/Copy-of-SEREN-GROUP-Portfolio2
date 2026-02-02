import React from 'react';
import { SYSTEMS } from '../constants.tsx';

const Systems: React.FC = () => {
  if (SYSTEMS.length === 0) return null;

  return (
    <section id="systems" className="py-24 px-6 md:px-12 bg-[#E0D7FF]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {SYSTEMS.map((system, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="mb-8 w-12 h-12 border border-black flex items-center justify-center">
              <span className="font-bold text-lg">{idx + 1}</span>
            </div>
            <h4 className="text-xl font-black uppercase mb-6 tracking-tighter border-b border-black pb-2">
              {system.title}
            </h4>
            <ul className="space-y-3">
              {system.items.map((item, i) => (
                <li key={i} className="text-xs font-bold uppercase flex items-center">
                  <span className="w-4 h-[1px] bg-black mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Systems;