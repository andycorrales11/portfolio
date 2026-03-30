import React from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, children }) => {
  return (
    <div className="border border-[#00ff41]/40 bg-[#050505]/90 shadow-lg overflow-hidden backdrop-blur-sm">
      <div className="bg-[#050505] text-[#00ff41] py-1 px-3 flex justify-between items-center border-b border-[#00ff41]/20">
        <span className="font-mono text-sm">{title}</span>
        <div className="flex space-x-2 items-center">
          <div className="w-3 h-3 rounded-full bg-[#00ff41]/40"></div>
          <div className="w-3 h-3 rounded-full bg-[#00ff41]/40"></div>
          <div className="w-3 h-3 rounded-full bg-[#00ff41]/40"></div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Window;
