import React from 'react';
import { TECH_PILLARS } from '../../data/features';

export default function TechnologySection() {
  return (
    <section className="w-full bg-surface-container-low py-5xl" id="technology">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Header */}
        <div className="max-w-2xl mb-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            SILICON & SYSTEM
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-xs tracking-tight">
            Technology That Works Around You
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs leading-relaxed">
            Five intelligent architectural pillars engineered to keep your hardware responsive, resilient, and whisper-cool.
          </p>
        </div>

        {/* 5 Architectural Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {TECH_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`bg-surface-container-lowest p-xl rounded-lg shadow-sm border border-surface-variant/30 flex flex-col gap-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${pillar.colSpan}`}
            >
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[24px]">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
