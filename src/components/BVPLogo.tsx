import React from 'react';

interface BVPLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light' | 'gold-pure';
  className?: string;
}

export const BVPLogo: React.FC<BVPLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'dark',
  className = '',
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 64,
    xl: 96,
  };

  const currentIconSize = iconSizes[size];

  // SVG Unique Gradient ID
  const gradId = `bvp-gold-grad-${size}-${theme}`;
  const gradHighlightId = `bvp-gold-hi-${size}-${theme}`;
  const gradDeepId = `bvp-gold-deep-${size}-${theme}`;

  const renderIcon = () => (
    <svg
      width={currentIconSize}
      height={currentIconSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(197,160,89,0.25)]"
    >
      <defs>
        {/* Main luxury metallic gold gradient */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="25%" stopColor="#E5B94E" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="75%" stopColor="#DEBA65" />
          <stop offset="100%" stopColor="#966D24" />
        </linearGradient>

        {/* Highlighting shine */}
        <linearGradient id={gradHighlightId} x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEA" />
          <stop offset="40%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#B38628" />
        </linearGradient>

        {/* Deep shadow gold */}
        <linearGradient id={gradDeepId} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#996E26" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#7E5616" />
        </linearGradient>
      </defs>

      {/* Top V Symbol */}
      <path
        d="M 28 32 L 100 84 L 172 32 L 172 64 L 100 116 L 28 64 Z"
        fill={`url(#${gradHighlightId})`}
      />

      {/* Left Wing - B Bars */}
      {/* Top left bar */}
      <path
        d="M 28 76 L 86 118 L 86 138 L 28 96 Z"
        fill={`url(#${gradId})`}
      />
      {/* Middle left bar */}
      <path
        d="M 28 108 L 86 150 L 86 170 L 28 128 Z"
        fill={`url(#${gradId})`}
      />
      {/* Bottom left wing anchor */}
      <path
        d="M 28 140 L 86 182 L 96 174 L 96 156 L 38 114 Z"
        fill={`url(#${gradDeepId})`}
      />

      {/* Central Divider Spine */}
      <path
        d="M 96 122 L 104 122 L 104 186 L 96 186 Z"
        fill={`url(#${gradHighlightId})`}
      />

      {/* Right Wing - P Loop */}
      {/* P upper angled loop */}
      <path
        d="M 114 122 L 172 80 L 172 132 L 128 164 L 128 144 L 152 126 L 152 106 L 114 134 Z"
        fill={`url(#${gradHighlightId})`}
      />
      {/* P lower anchor */}
      <path
        d="M 104 148 L 122 134 L 122 178 L 104 186 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );

  const bvpTextColor =
    theme === 'dark'
      ? 'text-white'
      : theme === 'gold-pure'
      ? 'text-[#C5A059]'
      : 'text-[#3D2314]';

  const subtitleColor =
    theme === 'dark'
      ? 'text-[#E5B94E]'
      : theme === 'gold-pure'
      ? 'text-[#E5B94E]'
      : 'text-[#C5A059]';

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
            className={`block font-black tracking-wider ${bvpTextColor}`}
            style={{
              fontSize: size === 'xl' ? '2.5rem' : size === 'lg' ? '1.875rem' : '1.35rem',
              letterSpacing: '0.12em',
              lineHeight: 1.1,
              fontFamily: "'Cinzel', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            BVP
          </span>
          <span
            className={`block font-semibold tracking-wider ${subtitleColor}`}
            style={{
              fontSize: size === 'xl' ? '0.95rem' : size === 'lg' ? '0.75rem' : '0.65rem',
              letterSpacing: '0.16em',
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
            className={`font-black tracking-wider leading-none ${bvpTextColor} transition-colors`}
            style={{
              fontSize: size === 'xl' ? '2.2rem' : size === 'lg' ? '1.65rem' : size === 'sm' ? '1.1rem' : '1.35rem',
              letterSpacing: '0.12em',
              fontFamily: "'Cinzel', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            BVP
          </span>
          <span className="hidden sm:inline-block h-3.5 w-[1.5px] bg-amber-500/40 mx-0.5" />
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-slate-400">
            Co., Ltd
          </span>
        </div>
        <span
          className={`font-bold tracking-widest uppercase leading-tight ${subtitleColor}`}
          style={{
            fontSize: size === 'xl' ? '0.85rem' : size === 'lg' ? '0.72rem' : size === 'sm' ? '0.55rem' : '0.62rem',
            letterSpacing: '0.18em',
          }}
        >
          Beyond Value Products
        </span>
      </div>
    </div>
  );
};
