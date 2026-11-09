import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showPayoff?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  showPayoff = true 
}) => {
  const isWhite = variant === 'white';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Official Studio 4M Shield Emblem */}
      <div className="relative shrink-0 w-9 h-10 sm:w-11 sm:h-12 flex items-center justify-center">
        <img
          src="/images/logo/studio-medico-4m-emblem.png"
          alt="Logo Ufficiale Studio 4M"
          className="w-full h-full object-contain drop-shadow-sm transition-transform hover:scale-105"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Typography Brand Block */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
          <span className={`text-[16px] sm:text-[19px] font-bold font-brand tracking-wider uppercase ${isWhite ? 'text-white' : 'text-[#01579b]'}`}>
            Studio
          </span>
          <span className="text-[17px] sm:text-[20px] font-bold text-[#039be5] font-brand tracking-wide inline-flex items-baseline lining-nums">
            <span className="inline-block">4</span><span className="inline-block">M</span>
          </span>
        </div>
        
        {showPayoff && (
          <span className={`text-[10px] sm:text-[11px] tracking-tight italic font-serif mt-0.5 ${isWhite ? 'text-[#b3e5fc]' : 'text-[#0277bd]'}`}>
            “Dove mente e corpo ritrovano equilibrio”
          </span>
        )}
      </div>
    </div>
  );
};
