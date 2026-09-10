import React from 'react';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import { VIDEO_CHAPTERS } from '../../data/features';
import { BRAND_ASSETS } from '../../data/products';

export default function CinematicVideoSection() {
  const {
    videoRef,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    activeChapter,
    progressPercent,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    handleTimeUpdate,
    handleLoadedMetadata,
    seek,
    setChapter,
    formatTime,
  } = useVideoPlayer(VIDEO_CHAPTERS);

  return (
    <section className="w-full bg-surface py-5xl relative overflow-hidden" id="cinematic-advert">
      {/* Ambient Ice Blue Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68rem] h-[34rem] bg-secondary-fixed/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-xl mb-3xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-xs px-md py-2xs rounded-full bg-secondary-fixed/50 text-on-secondary-fixed mb-xs">
              <span className="material-symbols-outlined text-[16px]">smart_display</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                CINEMATIC FILM
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-xs">
              Designed to Move With You.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
              Watch the official OMNIA flagship smartphone film. Witness precision engineering, flexible OLED craftsmanship, and intelligent power in motion.
            </p>
          </div>

          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">high_quality</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
              4K UHD • Ultra HDR 60fps
            </span>
          </div>
        </div>

        {/* 16:9 Cinematic Video Player Container */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-[0_24px_64px_-16px_rgba(0,92,174,0.22)] bg-inverse-surface border border-secondary-fixed/40 group">
          <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden bg-inverse-surface">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              poster={VIDEO_CHAPTERS[activeChapter]?.poster}
              playsInline
              preload="metadata"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={BRAND_ASSETS.videoSample} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Vignette Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-inverse-surface/40 transition-opacity duration-300 pointer-events-none ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Central Floating Glassmorphic Play Prompt */}
            {!isPlaying && (
              <button
                type="button"
                aria-label="Play Launch Film"
                onClick={togglePlay}
                className="absolute z-20 flex flex-col items-center gap-md group-hover:scale-105 transition-all duration-300 focus:outline-none"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary-fixed/90 hover:bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-[0_16px_48px_-8px_rgba(0,217,255,0.6)] backdrop-blur-md transition-all">
                  <span className="material-symbols-outlined text-[40px] sm:text-[48px] pl-1">
                    play_arrow
                  </span>
                </div>
                <div className="px-lg py-xs rounded-full bg-inverse-surface/80 backdrop-blur-md border border-secondary-fixed/40 text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center gap-xs shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span>Watch Launch Film — {formatTime(duration)}</span>
                </div>
              </button>
            )}

            {/* Custom Embedded Video Controller Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-md lg:p-lg bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent flex flex-col gap-xs transition-opacity duration-300">
              {/* Progress Bar (Interactive Scrubbing) */}
              <div
                className="w-full h-1.5 bg-surface-variant/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all"
                onClick={seek}
              >
                <div
                  className="h-full bg-secondary-container transition-all duration-150 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Bar Controls */}
              <div className="flex items-center justify-between gap-sm text-on-primary font-label-md text-label-md pt-2xs">
                <div className="flex items-center gap-md">
                  <button
                    type="button"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    onClick={togglePlay}
                    className="hover:text-secondary-fixed transition-colors flex items-center focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>

                  <div className="flex items-center gap-xs text-on-primary/90">
                    <span className="font-mono text-body-sm">{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span className="font-mono text-body-sm text-on-primary/60">
                      {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    onClick={toggleMute}
                    className="hover:text-secondary-fixed transition-colors hidden sm:flex items-center ml-xs focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                  </button>
                </div>

                <div className="flex items-center gap-md">
                  <span className="hidden sm:inline-block px-sm py-2xs rounded bg-surface-container-lowest/20 backdrop-blur-sm text-secondary-fixed font-label-sm text-label-sm font-bold tracking-wider">
                    OMNIA SPATIAL AUDIO
                  </span>
                  <button
                    type="button"
                    aria-label="Toggle Fullscreen"
                    onClick={toggleFullscreen}
                    className="hover:text-secondary-fixed transition-colors flex items-center focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[22px]">fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Video Chapter / Phone Feature Switcher Pills */}
        <div className="mt-xl flex flex-wrap items-center justify-center gap-sm">
          {VIDEO_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              type="button"
              onClick={() => setChapter(idx)}
              className={`px-lg py-xs rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold transition-all flex items-center gap-xs focus:outline-none ${
                activeChapter === idx
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container text-on-surface hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {chap.icon}
              </span>
              <span>{chap.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
