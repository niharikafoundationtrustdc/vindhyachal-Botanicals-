import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'stacked',
  size = 'md' 
}) => {
  // Pure vector implementation of the exact Vindhyachal Botanicals emblem
  const renderEmblem = (width = 72, height = 76) => (
    <svg 
      viewBox="0 0 160 170" 
      width={width} 
      height={height} 
      className="shrink-0 overflow-visible drop-shadow-xs"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vindhyachal Botanicals Emblem"
    >
      <g>
        {/* The 'vb' Monogram in Dark Indigo Navy */}
        <path 
          d="M 68 18 
             L 76 18 
             L 76 82 
             C 83 75 92 70 103 70 
             C 123 70 138 85 138 107 
             C 138 128 123 144 102 144 
             C 88 144 79 137 73 128 
             C 69 135 62 141 53 143 
             C 42 145 31 138 27 127 
             C 24 118 25 106 31 92 
             L 48 49 
             L 59 53 
             L 42 96 
             C 38 106 37 113 39 120 
             C 41 126 47 130 53 129 
             C 61 128 67 122 71 112 
             L 76 98 
             L 76 18 
             Z" 
          fill="#151733"
        />

        {/* Inner loop cut of the 'b' with precise thickness */}
        <path 
          d="M 76 96 
             C 80 87 89 82 99 82 
             C 114 82 125 93 125 107 
             C 125 121 114 132 99 132 
             C 88 132 80 126 76 116 
             Z" 
          fill="#faf9f6"
        />

        {/* Inner base counter of 'b' stem reconnect */}
        <path 
          d="M 76 92 L 76 120 C 76 120 76 92 76 92 Z" 
          stroke="#151733" 
          strokeWidth="2"
        />

        {/* Amber / Golden Oil Droplet inside the 'b' bowl */}
        <path 
          d="M 97 97 
             C 97 97 90 108 90 114 
             C 90 120 94 125 100 125 
             C 106 125 110 120 110 114 
             C 110 108 103 97 97 97 
             Z" 
          fill="url(#dropletGradient)" 
        />

        {/* Botanical Leaves sprouting from right of emblem */}
        {/* Left Light Green Leaf */}
        <path 
          d="M 124 88 
             C 122 76 113 67 101 64 
             C 100 78 111 88 124 88 
             Z" 
          fill="#3db54a" 
        />
        {/* Right Deep Forest Green Leaf with Stem Arch */}
        <path 
          d="M 112 88 
             C 122 84 134 78 147 62 
             C 152 74 140 91 123 94 
             C 118 94 114 91 112 88 
             Z" 
          fill="#0e632b" 
        />
        {/* Fine Leaf Spine */}
        <path 
          d="M 115 88 Q 128 80 144 65" 
          stroke="#1f7a37" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />
      </g>

      <defs>
        <linearGradient id="dropletGradient" x1="90" y1="97" x2="108" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="60%" stopColor="#e67e22" />
          <stop offset="100%" stopColor="#d35400" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'mark-only') {
    const dim = size === 'sm' ? 36 : size === 'lg' ? 68 : size === 'xl' ? 96 : 48;
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(dim, Math.round(dim * 1.05))}
      </div>
    );
  }

  if (variant === 'horizontal') {
    const iconDim = size === 'sm' ? 38 : size === 'lg' ? 56 : 46;
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {renderEmblem(iconDim, Math.round(iconDim * 1.05))}
        <div className="flex flex-col justify-center leading-tight">
          <span className="font-brand-serif font-bold tracking-tight text-[#0e632b] text-xl md:text-2xl leading-none">
            Vindhyachal
          </span>
          <span className="font-sans font-black italic tracking-[0.28em] text-[#151833] text-[10px] md:text-[11px] mt-0.5 uppercase">
            BOTANICALS
          </span>
        </div>
      </div>
    );
  }

  // Default: Stacked variant precisely matching Image 1
  const emblemDim = size === 'sm' ? 48 : size === 'lg' ? 84 : size === 'xl' ? 110 : 64;
  return (
    <div className={`flex flex-col items-center justify-center select-none text-center ${className}`}>
      {renderEmblem(emblemDim, Math.round(emblemDim * 1.05))}
      <h1 className="font-brand-serif font-bold tracking-tight text-[#0e632b] text-2xl sm:text-3xl md:text-4xl mt-1 leading-none">
        Vindhyachal
      </h1>
      <span className="font-sans font-black italic tracking-[0.32em] text-[#151833] text-xs sm:text-sm mt-1 uppercase">
        BOTANICALS
      </span>
    </div>
  );
};
