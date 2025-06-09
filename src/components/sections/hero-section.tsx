'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const HeroSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const textAnimation = (delay: number) => ({
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <section id="hero" className="bg-background min-h-[calc(80vh-5rem)] flex items-center py-12 md:py-0">
      <div className="w-full flex flex-col items-center gap-8 text-center px-4">
        <h1
          className="font-headline text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl max-w-5xl mx-auto"
          style={textAnimation(100)}
        >
          MODULARIDADE, ERGONOMIA E LIBERDADE TOTAL.
        </h1>

        <div
          className="flex w-full gap-4 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transitionDelay: '300ms',
          }}
        >
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative flex-1 aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={`/img-hero-${num}.png`}
                alt={`Imagem Hero ${num}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority={num === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
