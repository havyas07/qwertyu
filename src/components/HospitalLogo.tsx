import React from 'react';

interface HospitalLogoProps {
  variant?: 'default' | 'white' | 'vertical' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({
  variant = 'default',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isWhite = variant === 'white';
  const isVertical = variant === 'vertical';
  const isIconOnly = variant === 'icon-only';

  const iconSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const titleSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subSizeMap = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-[12px] tracking-[0.28em]',
    xl: 'text-[14px] tracking-[0.3em]',
  };

  const taglineSizeMap = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${
        isVertical ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      {/* Distinctive Minimal Medical Symbol */}
      <div className={`relative flex-shrink-0 ${iconSizeMap[size]}`}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Rounded Shield / Hexagon Frame */}
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            rx="14"
            fill={isWhite ? 'rgba(255, 255, 255, 0.12)' : '#12345A'}
            stroke={isWhite ? 'rgba(255, 255, 255, 0.25)' : '#16A6A1'}
            strokeWidth="1.5"
          />

          {/* Deep Cross Structure */}
          {/* Vertical Arm */}
          <rect
            x="25"
            y="13"
            width="14"
            height="38"
            rx="4"
            fill={isWhite ? '#FFFFFF' : '#FFFFFF'}
          />
          {/* Horizontal Arm */}
          <rect
            x="13"
            y="25"
            width="38"
            height="14"
            rx="4"
            fill={isWhite ? '#FFFFFF' : '#FFFFFF'}
          />

          {/* Medical Teal Dynamic Caring Pulse Ribbon */}
          <path
            d="M17 32C17 23.7157 23.7157 17 32 17C40.2843 17 47 23.7157 47 32C47 39.5 41.5 45.5 34 46.8"
            stroke="#16A6A1"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Precision Vital Point - Medical Beacon */}
          <circle cx="32" cy="32" r="3.5" fill="#16A6A1" />
          <circle cx="32" cy="32" r="6.5" stroke="#16A6A1" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Hospital Wordmark Typography */}
      {!isIconOnly && (
        <div className={`flex flex-col ${isVertical ? 'items-center' : 'items-start'} leading-none`}>
          <div className="flex items-baseline gap-1.5 font-heading">
            <span
              className={`font-extrabold tracking-tight ${titleSizeMap[size]} ${
                isWhite ? 'text-white' : 'text-[#12345A]'
              }`}
            >
              HAVYAS
            </span>
            <span
              className={`font-semibold ${subSizeMap[size]} uppercase ${
                isWhite ? 'text-[#5EEAD9]' : 'text-[#16A6A1]'
              }`}
            >
              HOSPITAL
            </span>
          </div>

          {showTagline && (
            <span
              className={`mt-1 font-medium font-sans italic ${taglineSizeMap[size]} ${
                isWhite ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Compassion. Care. Commitment.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

