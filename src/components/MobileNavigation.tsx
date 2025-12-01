'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { OptimizedLogo } from '@/components/OptimizedLogo';

interface MobileNavigationProps {
  onContactClick: () => void;
  logoSrc?: string;
  theme?: 'light' | 'dark';
}

export const MobileNavigation = ({
  onContactClick,
  logoSrc = "/assets/93b90410-bdbd-4098-938c-5ff9f158253c.png",
  theme = 'dark'
}: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  // Desktop Navigation Links
  const desktopLinks = [
    {
      label: 'Services',
      items: [
        { label: 'Studio', href: '/studio' },
        { label: 'Media', href: '/media' },
        { label: 'Lab', href: '/lab' },
        { label: 'Agent Hub', href: '/products' },
      ]
    },
    {
      label: 'Company',
      items: [
        { label: 'About us', href: '/about' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Careers', href: '/careers' },
      ]
    }
  ];

  // Mobile Menu Links (flattened structure)
  const mobileLinks = [
    { label: 'Studio', href: '/studio' },
    { label: 'Media', href: '/media' },
    { label: 'Lab', href: '/lab' },
    { label: 'Agent Hub', href: '/products' },
    { label: 'About us', href: '/about' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Careers', href: '/careers' },
  ];

  useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-[#1A1A1A]/95 supports-[backdrop-filter]:bg-[#1A1A1A]/80 border-white/10 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-2xl':
            scrolled && !open,
          'bg-[#1A1A1A]/90': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <OptimizedLogo 
            className={cn("transition-all duration-300", scrolled ? "h-6 w-6" : "h-8 w-8")} 
            width={scrolled ? 24 : 32} 
            height={scrolled ? 24 : 32} 
          />
          <span className={cn("font-bold text-white transition-all duration-300", scrolled ? "text-lg" : "text-xl")}>
            New Edge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {desktopLinks.map((group, i) => (
            <div key={i} className="relative group">
              <button className={buttonVariants({ variant: 'ghost', className: 'text-white hover:text-white/80 hover:bg-white/10' })}>
                {group.label}
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A1A1A] shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg z-[60] border border-white/10">
                <div className="py-2">
                  {group.items.map((item, j) => (
                    <Link
                      key={j}
                      to={item.href}
                      className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Button 
            variant="outline" 
            onClick={onContactClick}
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            Kontakt
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button 
          size="icon" 
          variant="outline" 
          onClick={() => setOpen(!open)} 
          className="md:hidden border-white/20 text-white hover:bg-white/10"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'bg-[#1A1A1A]/95 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start text-white/70 hover:text-white hover:bg-white/10',
                })}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button 
              onClick={() => {
                setOpen(false);
                onContactClick();
              }}
              className="w-full bg-white text-black hover:bg-white/90"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
