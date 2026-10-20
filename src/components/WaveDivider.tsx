import React from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  className?: string;
  fillColor?: string;
  accentColor?: string;
  height?: number;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  position = 'bottom',
  className = '',
  fillColor = '#f4f9fd',
  accentColor = '#039be5',
  height = 56
}) => {
  const isTop = position === 'top';

  return (
    <div 
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className} ${isTop ? 'rotate-180 -mb-[1px]' : '-mt-[1px]'}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 120" 
        className="w-full h-full preserve-3d" 
        preserveAspectRatio="none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft secondary wave layer using palette accent */}
        <path 
          d="M0,45 C320,105 480,10 760,65 C1040,120 1260,25 1440,70 L1440,120 L0,120 Z" 
          fill={accentColor} 
          fillOpacity="0.22"
        />
        {/* Primary foreground wave layer */}
        <path 
          d="M0,60 C240,115 520,25 780,75 C1020,125 1280,45 1440,85 L1440,120 L0,120 Z" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
