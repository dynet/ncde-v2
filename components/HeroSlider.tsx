"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const slides: { src: string; alt: string }[] = [
  {
    src: "/homepagina 2/Definitie Hero 2.png",
    alt: "NCDE — duurzame energie voor uw woning",
  },
  {
    src: "/homepagina 2/Definitieve hero 2 dd 14-5-2026.webp",
    alt: "NCDE hero — duurzame energie",
  },
  {
    src: "/homepagina 2/zonnepanelen.png",
    alt: "Zonnepanelen – wek uw eigen stroom op",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <section
      className="relative isolate min-h-[580px] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Afbeeldingenslider"
    >
      {/* Background image layer */}
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          aria-hidden={idx !== current}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(241,250,245,1) 0%, rgba(241,250,245,.97) 30%, rgba(241,250,245,.82) 50%, rgba(241,250,245,.3) 68%, transparent 82%)",
        }}
      />

      {/* Progress bar */}
      {!paused && (
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-30 h-[3px] bg-brand-600"
          style={{
            transition: "width 6000ms linear",
            width: "0%",
            animation: "heroProgress 6000ms linear forwards",
          }}
        />
      )}

      {/* Content overlay – always visible, rendered once */}
      <div className="absolute inset-0 z-20">
        <div className="cx relative h-full py-20 w-full">
          <div className="max-w-[720px]">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-600 mb-5">
              Nationaal Collectief Duurzame Energie
            </p>
            <h1 className="font-display text-3xl font-black uppercase leading-[1.1] text-brand-800 md:text-4xl lg:text-[2.75rem] whitespace-nowrap">
              Samen werken aan<br />
              duurzame energie
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg max-w-md">
              Wij helpen u stap voor stap naar een energiezuinige woning — met
              onafhankelijk advies, praktische oplossingen en betrouwbare
              uitvoerders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#woningcheck"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-4 text-sm font-bold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] transition-all"
              >
                Start woningcheck <ArrowRight size={18} />
              </a>
              <a
                href="#oplossingen"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 bg-white/80 px-6 py-4 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-all"
              >
                Bekijk oplossingen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <nav
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex items-center gap-2"
        aria-label="Selecteer slide"
      >
        {slides.map((slide, idx) => (
          <button
            key={slide.src}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}: ${slide.alt}`}
            aria-current={idx === current ? "true" : undefined}
            className={`
              h-[10px] w-[10px] rounded-full transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2
              ${idx === current
                ? "w-[26px] rounded-full bg-brand-600 scale-125"
                : "bg-white/60 hover:bg-white/90"
              }
            `}
          />
        ))}
      </nav>
    </section>
  );
}
