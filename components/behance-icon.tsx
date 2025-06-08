import React from 'react';

interface BehanceIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const BehanceIcon: React.FC<BehanceIconProps> = ({ 
  className = "", 
  size = 24, 
  color = "currentColor" 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M8 15h5.5a3.5 3.5 0 0 0 0-7H8v7z" />
      <path d="M14 8h4.5a3.5 3.5 0 0 1 0 7H14" />
      <path d="M16 15.5a3.5 3.5 0 0 1-3.5 3.5H8v-7" />
      <line x1="3" y1="12" x2="6" y2="12" />
    </svg>
  );
};

export default BehanceIcon;
