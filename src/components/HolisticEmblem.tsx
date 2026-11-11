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
    >
      <img
        src="/images/logo/holistic-emblem.png"
        alt="Emblema olistico e simbolo ufficiale di Studio Professionale 4M a Bollate"
        className="w-full h-full object-contain drop-shadow-md"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};
