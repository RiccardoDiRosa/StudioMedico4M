import React, { useState, useEffect, useRef, useCallback } from 'react';
import { STUDIO_PHOTOS } from '../data/studio';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const StudioPhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % STUDIO_PHOTOS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + STUDIO_PHOTOS.length) % STUDIO_PHOTOS.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay every 4 seconds (4000ms)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentIndex]);

  // Touch / swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main framed carousel container */}
      <div 
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#b3e5fc] shadow-2xl bg-slate-950 group select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {STUDIO_PHOTOS.map((photo, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photo.url}
                alt={`${photo.title} - Studio 4M Bollate`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Freccia Sinistra (Prev) - Design moderno Glassmorphic */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/40 hover:bg-white text-white hover:text-[#01579b] backdrop-blur-md border border-white/30 hover:border-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-90 group/btn focus-ring"
          aria-label="Foto precedente"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover/btn:-translate-x-0.5" strokeWidth={2} />
        </button>

        {/* Freccia Destra (Next) - Design moderno Glassmorphic */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/40 hover:bg-white text-white hover:text-[#01579b] backdrop-blur-md border border-white/30 hover:border-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-90 group/btn focus-ring"
          aria-label="Foto successiva"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2} />
        </button>

        {/* Counter pill at top right */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 bg-slate-950/50 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20 shadow-xs">
          {currentIndex + 1} / {STUDIO_PHOTOS.length}
        </div>
      </div>

      {/* Modern Sleek Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {STUDIO_PHOTOS.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full focus-ring ${
              index === currentIndex
                ? 'w-10 bg-gradient-to-r from-[#01579b] to-[#039be5]'
                : 'w-2.5 bg-slate-300 hover:bg-[#039be5]/60'
            }`}
            aria-label={`Vai a foto ${index + 1}: ${photo.title}`}
          />
        ))}
      </div>
    </div>
  );
};
