import React, { useState, useEffect, useRef, useCallback } from 'react';
import { STUDIO_PHOTOS } from '../data/studio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#b3e5fc] shadow-xl bg-slate-900 group select-none"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
              
              {/* Room label at bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-md pointer-events-none drop-shadow-md">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b3e5fc] bg-[#01579b]/70 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block mb-1 border border-white/20">
                  {photo.badge}
                </span>
                <h3 className="text-sm sm:text-lg font-bold font-sans leading-tight">
                  {photo.title}
                </h3>
              </div>
            </div>
          );
        })}

        {/* Freccia Sinistra (Prev) */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#01579b] hover:text-[#0277bd] shadow-lg border border-[#b3e5fc] flex items-center justify-center transition-all active:scale-95 focus-ring"
          aria-label="Foto precedente"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Freccia Destra (Next) */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#01579b] hover:text-[#0277bd] shadow-lg border border-[#b3e5fc] flex items-center justify-center transition-all active:scale-95 focus-ring"
          aria-label="Foto successiva"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Counter pill at top right */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full border border-white/20">
          {currentIndex + 1} / {STUDIO_PHOTOS.length}
        </div>
      </div>

      {/* Dots Indicator below */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {STUDIO_PHOTOS.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full focus-ring ${
              index === currentIndex
                ? 'w-8 h-2.5 bg-gradient-to-r from-[#01579b] to-[#039be5]'
                : 'w-2.5 h-2.5 bg-[#b3e5fc] hover:bg-[#039be5]/60'
            }`}
            aria-label={`Vai a foto ${index + 1}: ${photo.title}`}
          />
        ))}
      </div>
    </div>
  );
};
