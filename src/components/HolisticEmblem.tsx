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
      <svg 
        viewBox="0 0 160 160" 
        className="w-full h-full drop-shadow-sm" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background aura circle */}
        <circle cx="80" cy="80" r="74" fill="#b3e5fc" fillOpacity="0.35" stroke="#039be5" strokeWidth="1.5" />
        
        {/* Outer curved energy wave */}
        <path 
          d="M32 105C32 50 65 24 105 24C122 24 135 32 140 45" 
          stroke="#039be5" 
          strokeWidth="2.8" 
          strokeLinecap="round"
        />

        {/* Stylized human head / mind outline */}
        <path 
          d="M85 32C98 32 108 42 108 55C108 64 102 71 94 74" 
          stroke="#0277bd" 
          strokeWidth="2.2" 
          strokeLinecap="round"
        />
        {/* Brain subtle neural curves */}
        <path 
          d="M80 38C82 35 88 35 91 38C94 41 98 40 100 44C102 48 99 53 96 55" 
          stroke="#039be5" 
          strokeWidth="1.8" 
          strokeLinecap="round"
        />

        {/* Vertebral column / spinal curve */}
        <path 
          d="M86 65C82 78 86 94 82 108C79 118 73 128 62 135" 
          stroke="#01579b" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeDasharray="1 5"
        />
        
        {/* Vertebrae dots */}
        <circle cx="85" cy="72" r="3" fill="#0277bd" />
        <circle cx="83" cy="80" r="3" fill="#0277bd" />
        <circle cx="84" cy="88" r="3" fill="#0277bd" />
        <circle cx="85" cy="96" r="3" fill="#0277bd" />
        <circle cx="82" cy="104" r="3" fill="#0277bd" />
        <circle cx="78" cy="112" r="3" fill="#0277bd" />

        {/* Multi-tier pyramid levels (equilibrium / posture levels from flyer) */}
        <polygon points="52,118 64,118 58,108" fill="#e53935" />
        <polygon points="48,124 68,124 64,119 52,119" fill="#fb8c00" />
        <polygon points="44,130 72,130 68,125 48,125" fill="#fdd835" />
        <polygon points="40,136 76,136 72,131 44,131" fill="#43a047" />

        {/* Foot reflexology curve / sole contour */}
        <path 
          d="M96 112C102 112 108 116 109 122C110 130 102 142 92 144C82 146 76 142 76 138" 
          stroke="#0277bd" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        {/* Reflexology toe dots */}
        <circle cx="106" cy="116" r="2" fill="#039be5" />
        <circle cx="102" cy="113" r="2" fill="#039be5" />
        <circle cx="97" cy="112" r="2" fill="#039be5" />
        <circle cx="92" cy="113" r="2.5" fill="#039be5" />
      </svg>
    </div>
  );
};
