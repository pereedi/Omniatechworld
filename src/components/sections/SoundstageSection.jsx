import React from 'react';
import { BRAND_ASSETS } from '../../data/products';

export default function SoundstageSection() {
  return (
    <section className="w-full bg-surface py-5xl relative overflow-hidden" id="soundstage">
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="bg-gradient-to-br from-surface-container-lowest via-surface-container to-surface-variant/30 rounded-xl p-lg lg:p-3xl shadow-[0_20px_50px_-10px_rgba(0,92,174,0.12)] border border-surface-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2xl items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-md">
              <div className="inline-flex items-center gap-xs px-sm py-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider w-fit">
                <span className="material-symbols-outlined text-[16px]">graphic_eq</span>
                <span>Sensory Hardware Calibration</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Engineered with Tactile Luxury and Acoustic Purity.
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Every curve, chamfered edge, and haptic actuator in an OMNIA device is balanced to sub-millimeter precision. Experience true acoustic presence with dual stereo speakers calibrated for high-resolution lossless audio playback.
              </p>

              {/* Inline SVG Sound Wave Visualization */}
              <div className="bg-surface-container-lowest p-md rounded-DEFAULT flex items-center justify-between gap-xs border border-surface-variant/30 shadow-sm">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-primary">
                  Spatial Audio
                </span>
                <svg className="h-8 w-48 text-primary" fill="currentColor" viewBox="0 0 200 40">
                  <rect height="12" rx="2" width="4" x="0" y="14"></rect>
                  <rect height="20" rx="2" width="4" x="8" y="10"></rect>
                  <rect height="28" rx="2" width="4" x="16" y="6"></rect>
                  <rect height="16" rx="2" width="4" x="24" y="12"></rect>
                  <rect height="36" rx="2" width="4" x="32" y="2"></rect>
                  <rect height="24" rx="2" width="4" x="40" y="8"></rect>
                  <rect height="12" rx="2" width="4" x="48" y="14"></rect>
                  <rect height="32" rx="2" width="4" x="56" y="4"></rect>
                  <rect height="16" rx="2" width="4" x="64" y="12"></rect>
                  <rect height="24" rx="2" width="4" x="72" y="8"></rect>
                  <rect height="10" rx="2" width="4" x="80" y="15"></rect>
                  <rect height="36" rx="2" width="4" x="88" y="2"></rect>
                  <rect height="28" rx="2" width="4" x="96" y="6"></rect>
                  <rect height="20" rx="2" width="4" x="104" y="10"></rect>
                  <rect height="12" rx="2" width="4" x="112" y="14"></rect>
                  <rect height="32" rx="2" width="4" x="120" y="4"></rect>
                  <rect height="18" rx="2" width="4" x="128" y="11"></rect>
                  <rect height="26" rx="2" width="4" x="136" y="7"></rect>
                  <rect height="14" rx="2" width="4" x="144" y="13"></rect>
                  <rect height="36" rx="2" width="4" x="152" y="2"></rect>
                  <rect height="22" rx="2" width="4" x="160" y="9"></rect>
                  <rect height="12" rx="2" width="4" x="168" y="14"></rect>
                  <rect height="28" rx="2" width="4" x="176" y="6"></rect>
                  <rect height="16" rx="2" width="4" x="184" y="12"></rect>
                  <rect height="10" rx="2" width="4" x="192" y="15"></rect>
                </svg>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Hi-Res Stereo
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-md pt-xs">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Dual Symmetric Speakers
                  </span>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Liquid Vapor Chamber Cooling
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-lowest p-lg shadow-xl border border-surface-variant/30 flex items-center justify-center group">
                <img
                  alt="OMNIA Industrial Design Precision Hardware"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  src={BRAND_ASSETS.craftsmanshipImg}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-sm rounded-DEFAULT flex items-center justify-between border border-surface-variant/30 shadow-md">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase text-primary font-bold block">
                      Craftsmanship
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Aero-Grade Titanium Hinge Axis
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
