import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'mark-only';
  theme?: 'light' | 'dark'; // 'light' is for dark backgrounds (white/gold text); 'dark' is for ivory/white backgrounds
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';

  // Minimal refined botanical emblem (stylized distillation drop + botanical leaf)
  const renderEmblem = (dim: number) => (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Vindhyachal Botanicals Emblem"
    >
      {/* Outer circular delicate ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke={isLight ? 'rgba(247, 244, 236, 0.3)' : 'rgba(24, 60, 50, 0.2)'}
        strokeWidth="1"
      />
      {/* Inner golden accent ring */}
      <circle
        cx="24"
        cy="24"
        r="19"
        stroke="#B79A62"
        strokeWidth="0.75"
        strokeDasharray="2 3"
      />
      {/* Central botanical droplet & leaf silhouette */}
      <path
        d="M24 10C24 10 16 19.5 16 26C16 30.4183 19.5817 34 24 34C28.4183 34 32 30.4183 32 26C32 19.5 24 10 24 10Z"
        fill={isLight ? '#F7F4EC' : '#183C32'}
        fillOpacity="0.12"
      />
      {/* Botanical leaf vein curve */}
      <path
        d="M24 12C24 18 20 23 17 26"
        stroke={isLight ? '#F7F4EC' : '#183C32'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 12C24 20 28 24 31 27"
        stroke="#B79A62"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Center pure oil essence pearl */}
      <circle
        cx="24"
        cy="27"
        r="2.5"
        fill="#B79A62"
      />
    </svg>
  );

  const dim = size === 'sm' ? 32 : size === 'lg' ? 46 : 38;

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(dim)}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center group ${className}`}>
        {renderEmblem(size === 'sm' ? 36 : size === 'lg' ? 54 : 44)}
        <div className="mt-2 flex flex-col items-center leading-none">
          <span
            className={`font-serif-brand font-bold tracking-[0.08em] text-lg sm:text-xl uppercase transition-colors ${
              isLight ? 'text-[#F7F4EC]' : 'text-[#183C32]'
            }`}
          >
            VINDHYACHAL
          </span>
          <span
            className={`font-sans-brand text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-semibold mt-1 ${
              isLight ? 'text-[#B79A62]' : 'text-[#496B52]'
            }`}
          >
            BOTANICALS
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal brand logo
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {renderEmblem(dim)}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`font-serif-brand font-bold tracking-[0.06em] text-lg sm:text-xl transition-colors ${
            isLight ? 'text-[#F7F4EC]' : 'text-[#183C32]'
          }`}
        >
          VINDHYACHAL
        </span>
        <span
          className={`font-sans-brand text-[9px] tracking-[0.3em] uppercase font-semibold mt-0.5 ${
            isLight ? 'text-[#B79A62]' : 'text-[#496B52]'
          }`}
        >
          BOTANICALS
        </span>
      </div>
    </div>
  );
};
