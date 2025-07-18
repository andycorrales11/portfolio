import React from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, children }) => {
  return (
    <div className="border-2 border-cyan-400/50 bg-black/80 shadow-lg rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="bg-black/90 text-cyan-200 py-1 px-3 flex justify-between items-center">
        <span className="font-mono text-sm">{title}</span>
        <div className="flex space-x-2 items-center">
          <div className="w-3 h-3 rounded-full bg-cyan-400/50"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400/50"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400/50"></div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Window;
