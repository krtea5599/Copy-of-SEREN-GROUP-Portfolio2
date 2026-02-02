
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E0D7FF] border-t border-black px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-xs">
          <p className="text-[10px] font-black uppercase leading-tight tracking-tighter opacity-60">
            Brand Development, AI Integration, Content Strategy, Intellectual Property, 1-Person Company Design.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end space-y-2">
          <a href="mailto:info@serengroup.com" className="text-sm font-bold uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity">info@serengroup.com</a>
          <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest">© 2024 SEREN GROUP. ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-xs font-bold uppercase hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="text-xs font-bold uppercase hover:opacity-50 transition-opacity">Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
