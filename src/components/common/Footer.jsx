import React from 'react';
import { BRAND_ASSETS } from '../../data/products';
import { FOOTER_SECTIONS } from '../../data/navigation';

export default function Footer({ onOpenDeviceModal }) {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-variant/50 pt-5xl pb-2xl">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-xl mb-4xl">
          {/* Brand Info & Physical Outlets */}
          <div className="lg:col-span-2 flex flex-col gap-lg pr-lg">
            <div className="flex items-center gap-xs">
              <a href="#home" className="flex items-center gap-xs focus:outline-none group">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="OMNIA Tech World"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            <p className="text-on-surface-variant font-body-md text-body-md max-w-sm leading-relaxed">
              Pioneering luminous industrial design, silicon intelligence, and pure human warmth. Crafted without compromise.
            </p>

            <div className="flex flex-col gap-xs pt-2">
              <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">forum</span>
                <span>
                  KingsChat Support:{' '}
                  <a
                    href="https://kingschat.online/user/omniatech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface font-label-md text-label-md font-semibold hover:text-primary transition-colors"
                  >
                    @OMNIATECH
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-xs text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Pinnacle Mall, LoveWorld City, Asese • Espeecart Hub</span>
              </div>
            </div>
          </div>

          {/* Categorized Footer Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-md">
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface font-semibold">
                {section.title}
              </span>
              <nav className="flex flex-col gap-xs" aria-label={`${section.title} Links`}>
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-200"
                    onClick={(e) => {
                      // If clicking device name, open modal directly
                      const idMap = {
                        'Fold S2': 'fold-s2',
                        'Bliss S1': 'bliss-s1',
                        'Prolific S1': 'prolific-s1',
                        'Fold S1': 'fold-s1',
                      };
                      if (idMap[link.name] && onOpenDeviceModal) {
                        e.preventDefault();
                        onOpenDeviceModal(idMap[link.name]);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-xl border-t border-surface-variant/30 flex flex-col md:flex-row items-center justify-between gap-md">
          <p className="text-on-surface-variant font-body-sm text-body-sm text-center md:text-left">
            © {new Date().getFullYear()} OMNIA Tech Global. Engineered for excellence. All rights reserved.
          </p>
          <div className="flex items-center gap-md text-on-surface-variant">
            <a
              href="https://kingschat.online/user/omniatech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KingsChat Community"
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-secondary-fixed flex items-center justify-center hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
            </a>
            <a
              href="#kingschat-order"
              aria-label="Share"
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-secondary-fixed flex items-center justify-center hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a
              href="https://www.espeecart.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Global Web Partner"
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-secondary-fixed flex items-center justify-center hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
