import React from 'react';

interface HolisticEmblemProps {
  className?: string;
  size?: number;
}

export const HolisticEmblem: React.FC<HolisticEmblemProps> = ({ 
  className = '', 
  size = 140 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <img
        src="/images/logo/holistic-emblem.png"
        alt="Simbolo Ufficiale Studio 4M"
        className="w-full h-full object-contain drop-shadow-md"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};
