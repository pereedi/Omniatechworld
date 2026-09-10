import React from 'react';
import { CORE_PILLARS } from '../../data/features';

export default function ExplorePillars() {
  return (
    <section className="w-full bg-surface py-4xl">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-xl pb-2xl">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              EXPLORE OMNIA
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-xs tracking-tight">
              Smartphones built for the way you live.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
              From everyday performance to powerful productivity and next-generation foldable experiences, discover the OMNIA smartphone lineup crafted for seamless living.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-xs bg-surface-container-low px-md py-xs rounded-full border border-surface-variant/30">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Flagship Experience Centers:
            </span>
            <span className="font-label-md text-label-md text-primary font-bold">
              Pinnacle Mall & Espeecart
            </span>
          </div>
        </div>

        {/* 4 Core Pillar Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {CORE_PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-surface-container-lowest p-lg rounded-DEFAULT shadow-[0_8px_30px_rgb(0,92,174,0.06)] border border-surface-variant/30 flex flex-col gap-sm hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,92,174,0.1)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[24px]">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
