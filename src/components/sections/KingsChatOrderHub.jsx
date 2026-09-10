import React from 'react';
import { BRAND_ASSETS } from '../../data/products';
import { ORDERING_STEPS } from '../../data/features';

export default function KingsChatOrderHub({ selectedProduct }) {
  const defaultKingsChatUrl = BRAND_ASSETS.kingsChatUrl;

  return (
    <section
      className="w-full py-5xl relative overflow-hidden bg-gradient-to-b from-secondary-fixed/40 via-surface-container-low to-surface"
      id="kingschat-order"
    >
      {/* Ambient Radial Halo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="bg-surface-container-lowest rounded-xl p-lg lg:p-3xl shadow-[0_24px_64px_-16px_rgba(0,92,174,0.18)] border border-surface-variant/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2xl">
            {/* Left: KingsChat Order Message */}
            <div className="max-w-2xl flex flex-col gap-md">
              <div className="flex items-center gap-xs">
                <img
                  alt="KingsChat Official App"
                  className="w-10 h-10 rounded-full object-contain"
                  src={BRAND_ASSETS.kingsChatAvatar}
                />
                <span className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wider">
                  Official KingsChat Concierge: @OMNIATECH
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Ready to get your OMNIA?
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Chat with our dedicated device specialists directly on KingsChat to reserve or order your device directly from our flagship experience centers.
              </p>

              {/* Physical & Online Locations */}
              <div className="bg-surface-container-low p-md rounded-DEFAULT flex flex-col sm:flex-row items-start sm:items-center justify-between gap-sm border border-surface-variant/30">
                <div className="flex items-start gap-xs">
                  <span className="material-symbols-outlined text-primary text-[22px] flex-shrink-0 mt-0.5">
                    storefront
                  </span>
                  <div>
                    <span className="font-label-md text-label-md font-semibold text-on-surface block">
                      Flagship Store
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Omnia Tech World, Pinnacle Mall, LoveWorld City, Asese
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-xs">
                  <span className="material-symbols-outlined text-primary text-[22px] flex-shrink-0 mt-0.5">
                    language
                  </span>
                  <div>
                    <span className="font-label-md text-label-md font-semibold text-on-surface block">
                      Online Partner
                    </span>
                    <a
                      href="https://www.espeecart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-sm text-body-sm text-primary hover:underline"
                    >
                      www.espeecart.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Selected Model Note if arrived via product click */}
              {selectedProduct && (
                <div className="p-xs px-md bg-secondary-fixed/50 rounded-full w-fit flex items-center gap-xs text-on-secondary-fixed font-label-sm uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Currently Reserving: {selectedProduct.name}</span>
                </div>
              )}

              {/* Direct KingsChat CTA Action */}
              <div className="flex flex-wrap items-center gap-md pt-xs">
                <a
                  className="inline-flex items-center gap-sm px-xl sm:px-2xl py-md rounded-full bg-inverse-surface text-secondary-fixed hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_12px_32px_-6px_rgba(0,92,174,0.3)] font-label-lg text-label-lg uppercase tracking-wider font-semibold hover:-translate-y-0.5"
                  href={defaultKingsChatUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="KingsChat Icon"
                    className="w-6 h-6 rounded-full object-contain"
                    src={BRAND_ASSETS.kingsChatIcon}
                  />
                  <span>Chat with us on KingsChat to Order</span>
                </a>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct representative response within minutes
                </span>
              </div>
            </div>

            {/* Right: 5-Step Frictionless Ordering Roadmap */}
            <div className="w-full lg:w-96 bg-surface-container-low p-lg rounded-lg flex flex-col gap-md border border-surface-variant/30 shadow-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                5-STEP DIRECT ORDERING
              </span>
              <ol className="flex flex-col gap-sm relative">
                {ORDERING_STEPS.map((s) => (
                  <li key={s.step} className="flex items-start gap-sm">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold flex-shrink-0 ${
                        s.highlight
                          ? 'bg-secondary-container text-on-secondary-fixed'
                          : 'bg-primary text-on-primary'
                      }`}
                    >
                      {s.step}
                    </span>
                    <div>
                      <span
                        className={`font-label-md text-label-md font-semibold block ${
                          s.highlight ? 'text-primary font-bold' : 'text-on-surface'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {s.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
