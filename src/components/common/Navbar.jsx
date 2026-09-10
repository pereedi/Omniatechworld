import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../../data/products';
import { NAV_LINKS } from '../../data/navigation';

export default function Navbar({ onOpenChatOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'smartphones', 'compare', 'technology', 'soundstage', 'kingschat-order'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-variant/50 shadow-[0_12px_32px_-10px_rgba(0,92,174,0.12)]'
          : 'bg-surface-container-lowest/85 backdrop-blur-xl border-b border-surface-variant/40 shadow-[0_12px_32px_-10px_rgba(0,92,174,0.08)]'
      }`}
    >
      <div className="h-20 max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-md">
        {/* Brand Logo */}
        <div className="flex items-center gap-xs">
          <a
            href="#home"
            className="flex items-center gap-xs focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1 group"
          >
            <img
              src={BRAND_ASSETS.logo}
              alt="OMNIA Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface uppercase">
              OMNIA
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-xl" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const sectionTarget = link.href.replace('#', '');
            const isActive =
              (sectionTarget === 'home' && activeSection === 'home') ||
              activeSection === sectionTarget;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-sm sm:gap-md">
          <a
            href="#kingschat-order"
            className="hidden sm:inline-flex items-center gap-2xs font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">store</span>
            <span>Find a Store</span>
          </a>

          <a
            href="#kingschat-order"
            onClick={onOpenChatOrder}
            className="inline-flex items-center gap-xs bg-primary hover:bg-secondary-fixed-dim text-on-primary hover:text-on-secondary-fixed transition-all duration-300 rounded-full px-md sm:px-lg py-xs shadow-[0_8px_24px_-4px_rgba(0,92,174,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(0,217,255,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="font-label-lg text-label-lg uppercase tracking-wider font-semibold whitespace-nowrap">
              Chat to Order
            </span>
          </a>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm cursor-pointer hover:bg-secondary transition-colors"
            title="Account"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-variant/40 px-gutter-mobile py-lg shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-md" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface hover:text-primary py-2 border-b border-surface-variant/20 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[18px] text-surface-variant">
                  chevron_right
                </span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-sm">
              <a
                href="#kingschat-order"
                className="inline-flex items-center gap-xs text-on-surface-variant font-label-md uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px] text-primary">store</span>
                <span>Flagship Stores: Pinnacle Mall & Espeecart</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
