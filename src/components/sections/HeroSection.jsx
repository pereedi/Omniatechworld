import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { BRAND_ASSETS } from '../../data/products';

export default function HeroSection({ onOpenDeviceModal }) {
  const heroSlides = [
    {
      id: 'fold-s2',
      name: 'OMNIA FOLD S2',
      bannerImage: '/images/carousel/fold_s2_banner.png',
      btnLabel: 'Explore Fold S2',
    },
    {
      id: 'bliss-s1',
      name: 'OMNIA BLISS S1',
      bannerImage: '/images/carousel/bliss_s1_banner.jpg',
      btnLabel: 'Explore Bliss S1',
    },
    {
      id: 'prolific-s1',
      name: 'OMNIA PROLIFIC S1',
      bannerImage: '/images/carousel/prolific_s1_banner.jpg',
      btnLabel: 'Explore Prolific S1',
    },
  ];

  const {
    currentSlide,
    nextSlide,
    prevSlide,
    pause,
    resume,
    progressPercent,
  } = useCarousel({ totalSlides: heroSlides.length, intervalTime: 6500 });

  return (
    <section id="home" className="relative w-full overflow-hidden bg-surface pb-2xl pt-2">
      {/* Ambient background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[68rem] h-[34rem] bg-secondary-fixed/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Intro Header & Quick CTAs */}
      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-md lg:pt-lg mb-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-md">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs px-md py-2xs rounded-full bg-secondary-fixed/50 text-on-secondary-fixed mb-xs">
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                OMNIA SMARTPHONES
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight text-balance">
              Technology Designed Around You.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2xs max-w-xl">
              Discover powerful smartphones built for performance, creativity, entertainment, and everyday life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-sm">
            <a
              href="#smartphones"
              className="inline-flex items-center justify-center font-label-lg text-label-lg uppercase tracking-wider px-xl py-sm rounded-full bg-primary text-on-primary shadow-[0_8px_24px_-4px_rgba(0,92,174,0.35)] hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Smartphones
            </a>
            <a
              href="#kingschat-order"
              className="inline-flex items-center gap-xs font-label-lg text-label-lg uppercase tracking-wider px-lg py-sm rounded-full bg-inverse-surface text-secondary-fixed hover:text-on-secondary-fixed hover:bg-surface-container-highest transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <img
                src={BRAND_ASSETS.kingsChatIcon}
                alt="KingsChat"
                className="w-5 h-5 rounded-full object-contain"
              />
              <span>Chat to Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cinematic Landscape Carousel Container */}
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-[0_24px_54px_-16px_rgba(0,92,174,0.18)] bg-surface-container-lowest border border-surface-variant/40 group"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Slides Stack */}
          <div className="relative w-full min-h-[380px] sm:min-h-[460px] lg:h-[500px] overflow-hidden">
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={slide.bannerImage}
                    alt={`${slide.name} Landscape Banner`}
                    className="w-full h-full object-cover object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay CTA Action */}
                  <div className="absolute bottom-4 left-4 sm:left-6 z-10 flex items-center gap-xs">
                    <button
                      type="button"
                      onClick={() => onOpenDeviceModal(slide.id)}
                      className="px-lg py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 shadow-md hover:scale-105"
                    >
                      {slide.btnLabel}
                    </button>
                    <a
                      href="#kingschat-order"
                      className="inline-flex items-center gap-2xs px-md py-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface hover:bg-secondary-fixed transition-all duration-300 font-label-md text-label-md uppercase tracking-wider shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px] text-primary">chat</span>
                      <span>Order Direct</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Sleek Control Footbar */}
          <div className="w-full bg-surface-container-lowest/90 backdrop-blur-md px-lg py-sm flex items-center justify-between gap-md relative z-20 border-t border-surface-variant/30">
            {/* Slide Counter & Animated Progress Bar */}
            <div className="flex items-center gap-md">
              <span className="font-label-md text-label-md font-bold text-primary tracking-widest">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
              <div className="w-32 h-1 bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Directional Navigation Chevrons */}
            <div className="flex items-center gap-xs">
              <button
                type="button"
                aria-label="Previous Slide"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary-fixed flex items-center justify-center text-on-surface transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Next Slide"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary-fixed flex items-center justify-center text-on-surface transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
