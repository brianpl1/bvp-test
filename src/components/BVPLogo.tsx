import React from 'react';

interface BVPLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'gold-pure';
  className?: string;
}

export const BVPLogo: React.FC<BVPLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 64,
    xl: 96,
  };

  const currentIconSize = iconSizes[size];

  // SVG Unique Gradient IDs matching Page A.04
  const gradId = `bvp-brand-gold-${size}-${theme}`;
  const gradHighlightId = `bvp-brand-sun-${size}-${theme}`;
  const gradDeepId = `bvp-brand-bronze-${size}-${theme}`;

  const renderIcon = () => (
    <svg
      width={currentIconSize}
      height={currentIconSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(187,139,44,0.22)]"
    >
      <defs>
        {/* Main luxury metallic gold gradient (A.04 exact colors) */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f18c" />
          <stop offset="25%" stopColor="#f7e476" />
          <stop offset="55%" stopColor="#dec357" />
          <stop offset="80%" stopColor="#bb8b2c" />
          <stop offset="100%" stopColor="#865421" />
        </linearGradient>

        {/* Sunlight Highlighting Shine */}
        <linearGradient id={gradHighlightId} x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#f8f18c" />
          <stop offset="60%" stopColor="#dec357" />
          <stop offset="100%" stopColor="#9b6b2a" />
        </linearGradient>

        {/* Deep Shadow Bronze Gradient */}
        <linearGradient id={gradDeepId} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#865421" />
          <stop offset="50%" stopColor="#bb8b2c" />
          <stop offset="100%" stopColor="#653814" />
        </linearGradient>
      </defs>

      {/* Top V Wing Symbol (Page A.02: Cánh chim vươn lên mạnh mẽ) */}
      <path
        d="M 28 32 L 100 84 L 172 32 L 172 64 L 100 116 L 28 64 Z"
        fill={`url(#${gradHighlightId})`}
      />

      {/* Left Wing - B Bars */}
      <path
        d="M 28 76 L 86 118 L 86 138 L 28 96 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 28 108 L 86 150 L 86 170 L 28 128 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 28 140 L 86 182 L 96 174 L 96 156 L 38 114 Z"
        fill={`url(#${gradDeepId})`}
      />

      {/* Central Spine */}
      <path
        d="M 96 122 L 104 122 L 104 186 L 96 186 Z"
        fill={`url(#${gradHighlightId})`}
      />

      {/* Right Wing - P Loop */}
      <path
        d="M 114 122 L 172 80 L 172 132 L 128 164 L 128 144 L 152 126 L 152 106 L 114 134 Z"
        fill={`url(#${gradHighlightId})`}
      />
      <path
        d="M 104 148 L 122 134 L 122 178 L 104 186 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );

  // Exact Brand Text Colors: #653814 in light mode, #FAF8F5 / #dec357 in dark mode
  const bvpTextColor =
    theme === 'dark'
      ? 'text-[#FAF8F5]'
      : theme === 'gold-pure'
      ? 'text-[#dec357]'
      : 'text-[#653814]';

  const subtitleColor =
    theme === 'dark'
      ? 'text-[#dec357]'
      : theme === 'gold-pure'
      ? 'text-[#f7e476]'
      : 'text-[#865421]';

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIcon()}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        {renderIcon()}
        <div className="mt-3">
          <span
            className={`block font-controller ${bvpTextColor}`}
            style={{
              fontSize: size === 'xl' ? '2.5rem' : size === 'lg' ? '1.875rem' : '1.35rem',
              letterSpacing: '0.14em',
              lineHeight: 1.1,
            }}
          >
            BVP
          </span>
          <span
            className={`block font-bold tracking-widest uppercase ${subtitleColor}`}
            style={{
              fontSize: size === 'xl' ? '0.95rem' : size === 'lg' ? '0.75rem' : '0.65rem',
              letterSpacing: '0.18em',
            }}
          >
            BEYOND VALUE PRODUCTS
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout
  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {renderIcon()}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-controller leading-none ${bvpTextColor} transition-colors`}
            style={{
              fontSize: size === 'xl' ? '2.2rem' : size === 'lg' ? '1.65rem' : size === 'sm' ? '1.15rem' : '1.4rem',
              letterSpacing: '0.12em',
            }}
          >
            BVP
          </span>
          <span className="hidden sm:inline-block h-3.5 w-[1.5px] bg-[#dec357]/60 mx-0.5" />
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-[#9b6b2a]">
            Co., Ltd
          </span>
        </div>
        <span
          className={`font-bold tracking-widest uppercase leading-tight ${subtitleColor}`}
          style={{
            fontSize: size === 'xl' ? '0.85rem' : size === 'lg' ? '0.72rem' : size === 'sm' ? '0.55rem' : '0.64rem',
            letterSpacing: '0.18em',
          }}
        >
          Beyond Value Products
        </span>
      </div>
    </div>
  );
};
