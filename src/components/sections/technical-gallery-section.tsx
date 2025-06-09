'use client';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef, useState } from 'react';

interface TechImage {
  id: string;
  src: string;
  alt: string;
  hint: string;
  description: string;
}

const techImages: TechImage[] = [
  { id: 'tech-rotation', src: '/funcionalidades-1.png', alt: 'Rotação do braço FITYZ', hint: 'monitor arm rotation', description: 'Rotação de 360° para flexibilidade total.' },
  { id: 'tech-tilt', src: '/funcionalidades-2.png', alt: 'Inclinação do suporte FITYZ', hint: 'monitor tilt mechanism', description: 'Ajuste de inclinação para visualização ergonômica.' },
  { id: 'tech-clamp', src: '/funcionalidades-3.png', alt: 'Mecanismo de fixação FITYZ', hint: 'desk clamp mechanism', description: 'Fixação segura e robusta em diversas superfícies.' },
  { id: 'tech-modular', src: '/funcionalidades-4.png', alt: 'Modularidade FITYZ', hint: 'modular components', description: 'Componentes modulares para fácil personalização.' },
];

export const TechnicalGallerySection: FC = () => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { perView: 2, spacing: 20 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 24 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;
        function nextTimeout() {
          clearTimeout(timeout);
          if (!pause) {
            timeout = setTimeout(() => slider.next(), 3000);
          }
        }

        slider.on('created', () => {
          nextTimeout();
          sliderContainerRef.current?.addEventListener('mouseenter', () => setPause(true));
          sliderContainerRef.current?.addEventListener('mouseleave', () => setPause(false));
        });

        slider.on('animationEnded', () => nextTimeout());
        slider.on('updated', () => nextTimeout());
      },
    ]
  );

  return (
    <section id="technical-gallery" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <AnimatedWrapper elementId="tech-gallery-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold uppercase text-foreground md:text-4xl">
            Funcionalidades em Destaque
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            Veja de perto os detalhes que fazem a diferença nos suportes FITYZ.
          </p>
        </AnimatedWrapper>

        <div className="relative flex items-center gap-4">
          {/* Botão anterior fora do carrossel */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden md:block bg-black text-white px-3 py-2 rounded-full hover:bg-zinc-700 transition"
            aria-label="Anterior"
          >
            ‹
          </button>

          <div ref={sliderContainerRef} className="relative w-full">
            <div ref={sliderRef} className="keen-slider">
              {techImages.map((item, index) => (
                <div key={item.id} className="keen-slider__slide">
                  <AnimatedWrapper
                    elementId={item.id}
                    animationType="fade-in-up"
                    delayMs={index * 150}
                  >
                    <Card className="h-full bg-background transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="relative aspect-[1/1] w-full">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                            data-ai-hint={item.hint}
                          />
                        </div>
                      </CardContent>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                      </div>
                    </Card>
                  </AnimatedWrapper>
                </div>
              ))}
            </div>

            {/* Dots de paginação */}
            <div className="mt-6 flex justify-center gap-2">
              {techImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === idx ? 'bg-black scale-110' : 'bg-zinc-400 opacity-50'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Botão próximo fora do carrossel */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden md:block bg-black text-white px-3 py-2 rounded-full hover:bg-zinc-700 transition"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
