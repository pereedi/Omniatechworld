import React from 'react';
import { PRODUCTS, BRAND_ASSETS } from '../../data/products';

export default function ProductShowcase({ onOpenDeviceModal }) {
  const foldS2 = PRODUCTS.find((p) => p.id === 'fold-s2');
  const blissS1 = PRODUCTS.find((p) => p.id === 'bliss-s1');
  const prolificS1 = PRODUCTS.find((p) => p.id === 'prolific-s1');
  const foldS1 = PRODUCTS.find((p) => p.id === 'fold-s1');

  return (
    <section className="w-full bg-surface-container-low py-5xl" id="smartphones">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-4xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              MEET THE OMNIA FAMILY
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-xs tracking-tight">
              Precision Engineering in Four Expressions
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2xs font-label-md text-label-md uppercase tracking-wider text-primary font-semibold hover:text-secondary transition-colors"
            href="#compare"
          >
            Compare All Specifications{' '}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* ================= PRODUCT 1: OMNIA FOLD S2 ================= */}
        {foldS2 && (
          <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_16px_48px_-12px_rgba(77,184,255,0.18)] border border-surface-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 p-lg lg:p-3xl flex flex-col gap-lg">
                <div className="flex flex-wrap items-center gap-xs">
                  <span className="px-sm py-2xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-widest">
                    {foldS2.badge}
                  </span>
                  <span className="px-sm py-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    {foldS2.subBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase font-semibold">
                    {foldS2.name}
                  </h3>
                  <p className="font-headline-sm text-headline-sm text-primary font-medium mt-xs">
                    {foldS2.tagline}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm leading-relaxed">
                    {foldS2.description}
                  </p>
                </div>

                {/* Spec Grid Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-md">
                  {foldS2.keySpecs.map((spec) => (
                    <div key={spec.label} className="bg-surface-container-low p-md rounded-DEFAULT">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">
                        {spec.label}
                      </span>
                      <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                        {spec.value}
                        <span className="text-primary text-label-lg">{spec.unit}</span>
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block mt-2xs">
                        {spec.subtitle}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                  <span>Available at Omnia Tech World, Pinnacle Mall, LoveWorld City, Asese • Online at Espeecart</span>
                </div>

                <div className="flex flex-wrap items-center gap-sm pt-xs">
                  <button
                    type="button"
                    onClick={() => onOpenDeviceModal(foldS2.id)}
                    className="px-xl py-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    Explore Fold S2
                  </button>
                  <a
                    className="inline-flex items-center gap-xs px-lg py-sm rounded-full bg-surface-container text-on-surface hover:bg-secondary-fixed transition-all font-label-lg text-label-lg uppercase tracking-wider"
                    href="#kingschat-order"
                  >
                    <img
                      alt="KingsChat"
                      className="w-5 h-5 rounded-full object-contain"
                      src={BRAND_ASSETS.kingsChatIcon}
                    />
                    <span>Chat to Order</span>
                  </a>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-surface-container to-surface-container-high p-lg lg:p-xl flex items-center justify-center min-h-[440px]">
                <img
                  alt="Omnia Fold S2 Executive Handheld Smartphone"
                  className="max-h-[500px] w-auto object-contain rounded-DEFAULT shadow-[0_20px_40px_-8px_rgba(0,217,255,0.25)] transition-transform duration-500 hover:scale-105"
                  src={foldS2.deviceImage}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= PRODUCT 2: OMNIA BLISS S1 ================= */}
        {blissS1 && (
          <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_16px_48px_-12px_rgba(77,184,255,0.14)] border border-surface-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-surface-container to-surface-variant p-lg lg:p-xl flex items-center justify-center order-2 lg:order-1 min-h-[420px]">
                <img
                  alt="Omnia Bliss S1 True Bliss Curved Display"
                  className="max-h-[480px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                  src={blissS1.deviceImage}
                />
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 p-lg lg:p-3xl flex flex-col gap-lg order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-xs">
                  <span className="px-sm py-2xs rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    {blissS1.badge}
                  </span>
                  <span className="px-sm py-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                    {blissS1.subBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase font-semibold">
                    {blissS1.name}
                  </h3>
                  <p className="font-headline-sm text-headline-sm text-secondary font-medium mt-xs">
                    {blissS1.tagline}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm leading-relaxed">
                    {blissS1.description}
                  </p>
                </div>

                {/* Feature Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-xs">
                  {blissS1.keySpecs.map((spec) => (
                    <div key={spec.label} className="bg-surface-container-low p-sm rounded-DEFAULT text-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">
                        {spec.label}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {spec.value}
                        <span className="text-primary text-[14px]">{spec.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Detail Avatars */}
                <div className="flex items-center gap-sm">
                  <div className="flex -space-x-2 overflow-hidden">
                    {blissS1.avatars?.map((imgUrl, i) => (
                      <img
                        key={i}
                        alt="Bliss S1 Detail"
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-lowest object-cover"
                        src={imgUrl}
                      />
                    ))}
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {blissS1.configText}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-sm pt-xs">
                  <button
                    type="button"
                    onClick={() => onOpenDeviceModal(blissS1.id)}
                    className="px-xl py-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    Explore Bliss S1
                  </button>
                  <a
                    className="inline-flex items-center gap-xs px-lg py-sm rounded-full bg-surface-container text-on-surface hover:bg-secondary-fixed transition-all font-label-lg text-label-lg uppercase tracking-wider"
                    href="#kingschat-order"
                  >
                    <img
                      alt="KingsChat"
                      className="w-5 h-5 rounded-full object-contain"
                      src={BRAND_ASSETS.kingsChatIcon}
                    />
                    <span>Order via KingsChat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ASYMMETRIC DUAL ROW: PROLIFIC S1 & FOLD S1 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* PRODUCT 3: OMNIA PROLIFIC S1 */}
          {prolificS1 && (
            <div className="bg-surface-container-lowest rounded-lg p-lg lg:p-2xl flex flex-col justify-between shadow-[0_16px_48px_-12px_rgba(77,184,255,0.14)] border border-surface-variant/30">
              <div className="flex flex-col gap-md">
                <div className="flex items-center justify-between">
                  <span className="px-sm py-2xs rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    {prolificS1.badge}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                    {prolificS1.subBadge}
                  </span>
                </div>

                <div className="mt-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                    {prolificS1.name}
                  </h3>
                  <p className="font-headline-sm text-headline-sm text-primary font-medium mt-2xs">
                    {prolificS1.tagline}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs leading-relaxed">
                    {prolificS1.description}
                  </p>
                </div>

                <div className="w-full h-64 bg-surface-container-low rounded-DEFAULT flex items-center justify-center overflow-hidden my-sm">
                  <img
                    alt="OMNIA Prolific S1 with integrated stylus"
                    className="h-full w-auto object-contain py-xs transition-transform duration-300 hover:scale-105"
                    src={prolificS1.deviceImage}
                  />
                </div>

                <div className="grid grid-cols-3 gap-xs text-center">
                  {prolificS1.keySpecs.map((spec) => (
                    <div key={spec.label} className="bg-surface-container-low p-xs rounded-DEFAULT">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">
                        {spec.label}
                      </span>
                      <span
                        className={`font-headline-sm text-headline-sm font-semibold ${
                          spec.isHighlight ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-xs pt-lg mt-md">
                <button
                  type="button"
                  onClick={() => onOpenDeviceModal(prolificS1.id)}
                  className="px-lg py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all"
                >
                  Explore Prolific S1
                </button>
                <a
                  className="inline-flex items-center gap-2xs px-md py-xs rounded-full bg-surface-container text-on-surface hover:bg-secondary-fixed transition-all font-label-md text-label-md uppercase tracking-wider"
                  href="#kingschat-order"
                >
                  <img
                    alt="KingsChat"
                    className="w-4 h-4 rounded-full object-contain"
                    src={BRAND_ASSETS.kingsChatIcon}
                  />
                  <span>Order via KingsChat</span>
                </a>
              </div>
            </div>
          )}

          {/* PRODUCT 4: OMNIA FOLD S1 */}
          {foldS1 && (
            <div className="bg-surface-container-lowest rounded-lg p-lg lg:p-2xl flex flex-col justify-between shadow-[0_16px_48px_-12px_rgba(77,184,255,0.14)] border border-surface-variant/30">
              <div className="flex flex-col gap-md">
                <div className="flex items-center justify-between">
                  <span className="px-sm py-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    {foldS1.badge}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                    {foldS1.subBadge}
                  </span>
                </div>

                <div className="mt-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                    {foldS1.name}
                  </h3>
                  <p className="font-headline-sm text-headline-sm text-tertiary font-medium mt-2xs">
                    {foldS1.tagline}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs leading-relaxed">
                    {foldS1.description}
                  </p>
                </div>

                <div className="w-full h-64 bg-surface-container-low rounded-DEFAULT flex items-center justify-center overflow-hidden my-sm">
                  <img
                    alt="OMNIA Fold S1 Innovation"
                    className="h-full w-auto object-contain py-xs transition-transform duration-300 hover:scale-105"
                    src={foldS1.deviceImage}
                  />
                </div>

                <div className="grid grid-cols-3 gap-xs text-center">
                  {foldS1.keySpecs.map((spec) => (
                    <div key={spec.label} className="bg-surface-container-low p-xs rounded-DEFAULT">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">
                        {spec.label}
                      </span>
                      <span
                        className={`font-headline-sm text-headline-sm font-semibold ${
                          spec.isHighlight ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-xs pt-lg mt-md">
                <button
                  type="button"
                  onClick={() => onOpenDeviceModal(foldS1.id)}
                  className="px-lg py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all"
                >
                  Explore Fold S1
                </button>
                <a
                  className="inline-flex items-center gap-2xs px-md py-xs rounded-full bg-surface-container text-on-surface hover:bg-secondary-fixed transition-all font-label-md text-label-md uppercase tracking-wider"
                  href="#kingschat-order"
                >
                  <img
                    alt="KingsChat"
                    className="w-4 h-4 rounded-full object-contain"
                    src={BRAND_ASSETS.kingsChatIcon}
                  />
                  <span>Order via KingsChat</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
