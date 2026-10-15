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
      {/* Authentic Shield Crest Mark inspired by flyer */}
      <div className="relative shrink-0 w-11 h-12 flex items-center justify-center">
        <svg viewBox="0 0 44 48" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer shield boundary */}
          <path 
            d="M22 2L40 7V22C40 33.5 31.5 42.5 22 46C12.5 42.5 4 33.5 4 22V7L22 2Z" 
            fill={isWhite ? '#0F2942' : '#0F2942'} 
            stroke={isWhite ? '#7DD3FC' : '#38BDF8'} 
            strokeWidth="1.5"
          />
          {/* Inner heraldic quadrants divider */}
          <line x1="22" y1="5" x2="22" y2="44" stroke={isWhite ? '#38BDF8' : '#60A5FA'} strokeWidth="1" strokeOpacity="0.4" />
          <line x1="5" y1="22" x2="39" y2="22" stroke={isWhite ? '#38BDF8' : '#60A5FA'} strokeWidth="1" strokeOpacity="0.4" />
          
          {/* Subtle medical cross glow */}
          <path d="M22 13V31M13 22H31" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.3" />
          
          {/* 4M Core Emblem Typography */}
          <text 
            x="22" 
            y="27" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontFamily="Georgia, 'Playfair Display', serif" 
            fontWeight="bold" 
            fontSize="15"
            letterSpacing="0.05em"
          >
            4M
          </text>
        </svg>
      </div>

      {/* Typography Brand Block */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`text-[17px] sm:text-[19px] font-bold font-brand tracking-wider uppercase ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            Studio Medico
          </span>
          <span className="text-[18px] sm:text-[20px] font-black text-sky-600 font-brand tracking-wide">
            4M
          </span>
        </div>
        
        {showPayoff && (
          <span className={`text-[10.5px] sm:text-[11px] tracking-tight italic font-serif mt-0.5 ${isWhite ? 'text-sky-200/90' : 'text-slate-500'}`}>
            “Dove mente e corpo ritrovano equilibrio”
          </span>
        )}
      </div>
    </div>
  );
};
