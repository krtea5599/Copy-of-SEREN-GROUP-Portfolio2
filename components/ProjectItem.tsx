import React, { useState } from 'react';
import { Project } from '../types.ts';
import ProjectModal from './ProjectModal.tsx';

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isEven = index % 2 === 0;

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} py-0 border-t border-black/10`}>
        <div 
          className="w-full md:w-1/2 overflow-hidden h-[350px] md:h-[600px] cursor-pointer group"
          onClick={handleOpen}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>
        <div className={`w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-white`}>
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 text-[#3B82F6]">
              {project.category}
            </span>
          </div>
          <h3 
            className="text-[26px] md:text-[40px] font-black uppercase tracking-tighter mb-4 leading-tight cursor-pointer hover:text-[#3B82F6] transition-colors text-black"
            onClick={handleOpen}
          >
           {project.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed opacity-80 mb-6 max-w-md font-medium">
            {project.description}
          </p>
           <button 
            onClick={handleOpen}
            className="text-[11px] font-black uppercase tracking-[0.2em] self-start border-b-2 border-black pb-1 mb-10 hover:opacity-50 transition-opacity"
          >
            상세보기 →
          </button>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase bg-black text-white px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default ProjectItem;