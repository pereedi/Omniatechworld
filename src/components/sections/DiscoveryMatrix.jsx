import React from 'react';
import { DISCOVERY_VIGNETTES } from '../../data/features';

export default function DiscoveryMatrix() {
  return (
    <section className="w-full bg-surface-container-low py-5xl">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            DISCOVERY MATRIX
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-xs tracking-tight">
            Built Without Compromise
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
            Four pillars that define the everyday OMNIA smartphone experience.
          </p>
        </div>

        {/* 2x2 Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {DISCOVERY_VIGNETTES.map((vig) => (
            <div
              key={vig.num}
              className="bg-surface-container-lowest rounded-lg p-xl flex flex-col justify-between shadow-[0_12px_36px_-10px_rgba(0,92,174,0.08)] border border-surface-variant/30 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(0,92,174,0.14)] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    {vig.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-2xs">
                    {vig.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs max-w-md leading-relaxed">
                    {vig.description}
                  </p>
                </div>
                <span className="text-5xl font-headline-lg text-surface-container-highest font-bold select-none">
                  {vig.num}
                </span>
              </div>

              <div className="mt-lg pt-md bg-surface-container-low rounded-DEFAULT p-md flex items-center justify-between border border-surface-variant/20">
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  {vig.footerFeature}
                </span>
                <span className="font-label-md text-label-md text-primary font-bold">
                  {vig.footerBadge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
