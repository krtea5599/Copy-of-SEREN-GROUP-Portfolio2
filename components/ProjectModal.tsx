
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#E0D7FF] w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar border border-black shadow-2xl flex flex-col md:flex-row animate-slideUp">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img 
            src={project.image} 
           alt={project.title} 
           // hover:scale-105 를 추가하면 마우스 올릴 때 살짝 커집니다.
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-black text-white px-3 py-1">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            {project.title}
          </h2>

          <div className="space-y-8">
            <section>
              <h4 className="text-xs font-bold uppercase border-b border-black/20 pb-2 mb-4">Overview</h4>
              <p className="text-sm md:text-base leading-relaxed opacity-80 font-medium">
                {project.fullDescription}
              </p>
            </section>

            {project.achievements && (
              <section>
                <h4 className="text-xs font-bold uppercase border-b border-black/20 pb-2 mb-4">Major Achievements</h4>
                <ul className="space-y-3">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-xs font-bold uppercase flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 bg-black rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.features && (
              <section>
                <h4 className="text-xs font-bold uppercase border-b border-black/20 pb-2 mb-4">Core Features</h4>
                <ul className="space-y-3">
                  {project.features.map((item, i) => (
                    <li key={i} className="text-xs font-bold uppercase flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 bg-black rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[9px] font-bold uppercase border border-black/30 px-2 py-1">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default ProjectModal;
