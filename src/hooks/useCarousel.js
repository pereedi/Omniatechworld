import { useState, useEffect, useCallback, useRef } from 'react';

export function useCarousel({ totalSlides, intervalTime = 6500, autoPlay = true }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, isPaused, intervalTime, nextSlide, totalSlides]);

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pause,
    resume,
    progressPercent,
  };
}
