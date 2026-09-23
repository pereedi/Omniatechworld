import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS, PRODUCTS } from '../../data/products';
import { NAV_LINKS } from '../../data/navigation';

export default function Navbar({ onOpenChatOrder, onOpenDeviceModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll detection & section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'smartphones', 'compare', 'technology', 'soundstage', 'kingschat-order'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press or desktop resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleDeviceClick = (productId) => {
    setMobileMenuOpen(false);
    if (onOpenDeviceModal) {
      onOpenDeviceModal(productId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-surface-container-lowest/95 backdrop-blur-xl border-b border-surface-variant/50 shadow-[0_12px_32px_-10px_rgba(0,92,174,0.12)]'
            : 'bg-surface-container-lowest/85 backdrop-blur-xl border-b border-surface-variant/40 shadow-[0_12px_32px_-10px_rgba(0,92,174,0.08)]'
        }`}
      >
        <div className="h-16 sm:h-20 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-xs flex-shrink-0">
            <a
              href="#home"
              onClick={handleNavClick}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1 group"
              aria-label="OMNIA Tech World Home"
            >
              <img
                src={BRAND_ASSETS.logo}
                alt="OMNIA Tech World"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links (>= lg) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Find a Store (Desktop only) */}
            <a
              href="#kingschat-order"
              className="hidden xl:inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">store</span>
              <span>Find a Store</span>
            </a>

            {/* Direct Order CTA (Responsive: compact pill on mobile, full text on sm+) */}
            <a
              href="https://kingschat.online/user/omniatech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-secondary-fixed-dim text-on-primary hover:text-on-secondary-fixed transition-all duration-300 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 shadow-[0_4px_16px_-2px_rgba(0,92,174,0.35)] hover:shadow-[0_8px_24px_-4px_rgba(0,217,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
              aria-label="Order via KingsChat"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse flex-shrink-0" />
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
              <span className="font-label-md sm:font-label-lg text-xs sm:text-label-lg uppercase tracking-wider font-semibold whitespace-nowrap">
                <span className="hidden sm:inline">Chat to Order</span>
                <span className="sm:hidden">Order</span>
              </span>
            </a>

            {/* Desktop User Avatar (>= lg) */}
            <div
              className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center text-on-primary shadow-sm cursor-pointer hover:bg-secondary transition-colors"
              title="Official Portal"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger / Close Toggle Button (< lg) */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[26px] transition-transform duration-200">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Overlay & Drawer (< lg) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 top-16 sm:top-20 z-40 bg-on-surface/30 backdrop-blur-sm lg:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Down Mobile Drawer */}
          <div
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 lg:hidden bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-surface-variant/40 shadow-2xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain transition-all duration-300 animate-in slide-in-from-top-4"
          >
            <div className="px-4 py-5 flex flex-col gap-5 max-w-lg mx-auto">
              
              {/* Quick Device Showcase Selector */}
              <div>
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    Flagship Devices
                  </span>
                  <a
                    href="#smartphones"
                    onClick={handleNavClick}
                    className="font-label-md text-xs text-primary hover:underline"
                  >
                    View All
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {PRODUCTS.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => handleDeviceClick(product.id)}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-container hover:bg-secondary-fixed/30 border border-surface-variant/30 text-left transition-all active:scale-98 group"
                    >
                      <img
                        src={product.deviceImage}
                        alt={product.name}
                        className="w-10 h-10 object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="font-label-md text-xs font-bold text-on-surface block truncate">
                          {product.name.replace('OMNIA ', '')}
                        </span>
                        <span className="font-body-sm text-[10px] text-primary block truncate">
                          {product.series}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="border-t border-surface-variant/30 pt-3">
                <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-semibold block mb-2 px-1">
                  Navigation
                </span>
                <nav className="flex flex-col gap-1" aria-label="Mobile Navigation Drawer">
                  {NAV_LINKS.map((link) => {
                    const sectionTarget = link.href.replace('#', '');
                    const isActive =
                      (sectionTarget === 'home' && activeSection === 'home') ||
                      activeSection === sectionTarget;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`h-11 px-3 rounded-xl flex items-center justify-between transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary font-semibold'
                            : 'text-on-surface hover:bg-surface-container/60 hover:text-primary'
                        }`}
                      >
                        <span className="font-label-lg text-sm uppercase tracking-wider">
                          {link.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                          <span className="material-symbols-outlined text-[18px] text-surface-variant">
                            chevron_right
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* KingsChat Direct Concierge Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary-fixed/20 to-surface-container border border-primary/20 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={BRAND_ASSETS.kingsChatAvatar}
                    alt="KingsChat Concierge"
                    className="w-10 h-10 rounded-full border border-primary/30 object-cover shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md text-xs font-bold text-on-surface">
                        KingsChat Concierge
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant block">
                      @OMNIATECH • Official Support
                    </span>
                  </div>
                </div>

                <a
                  href={BRAND_ASSETS.kingsChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="w-full py-2.5 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <img
                    src={BRAND_ASSETS.kingsChatIcon}
                    alt=""
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  <span>Direct Order on KingsChat</span>
                </a>
              </div>

              {/* Store & Experience Location */}
              <div className="pt-2 border-t border-surface-variant/30 flex flex-col gap-2 text-on-surface-variant px-1 text-xs">
                <a
                  href="#kingschat-order"
                  onClick={handleNavClick}
                  className="flex items-center gap-2 hover:text-primary transition-colors py-1"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                  <span>Pinnacle Mall, LoveWorld City, Asese</span>
                </a>
                <div className="flex items-center justify-between text-[11px] text-on-surface-variant/80 pt-1">
                  <span>Online Partner: www.espeecart.com</span>
                  <span>© {new Date().getFullYear()} OMNIA</span>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}
