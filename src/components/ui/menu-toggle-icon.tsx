import React from 'react';

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
  duration?: number;
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({ 
  open, 
  duration = 300,
  className,
  ...props 
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        style={{
          transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          transformOrigin: 'center',
          transition: `transform ${duration}ms ease-out`,
        }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{
          opacity: open ? 0 : 1,
          transition: `opacity ${duration}ms ease-out`,
        }}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        style={{
          transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          transformOrigin: 'center',
          transition: `transform ${duration}ms ease-out`,
        }}
      />
    </svg>
  );
};
