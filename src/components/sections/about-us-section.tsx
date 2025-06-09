
'use client';
import type { FC } from 'react';
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

export const AboutUsSection: FC = () => {
  return (
    <section id="about-us" className="bg-foreground text-background"> {/* Black background, white text */}
      <div className="container mx-auto">
        <AnimatedWrapper elementId="about-us-content-wrapper" animationType="fade-in-up">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold uppercase md:text-4xl">
                Quem Somos
              </h2>
              <p className="text-lg leading-relaxed">
                A FITYZ é uma marca que nasceu da paixão por ergonomia, design e tecnologia. 
                Acreditamos que cada pessoa tem uma necessidade única e que seu espaço de trabalho 
                ou lazer deve se adaptar a ela, e não o contrário.
              </p>
              <p className="text-lg leading-relaxed">
                Por isso, desenvolvemos suportes modulares para monitores que oferecem liberdade total 
                de configuração, permitindo que você crie o setup perfeito para suas atividades, 
                seja para trabalho, estudo ou jogos. Nossas soluções são versáteis, robustas e 
                projetadas para proporcionar o máximo de conforto e produtividade.
              </p>
            </div>
            <div className="space-y-8">
                <AnimatedWrapper elementId="about-us-logo-img" animationType="slide-in-right" delayMs={100}>
                    <div className="flex justify-center md:justify-start">
                         {/* Placeholder for FITYZ logo (maybe text based or simple graphic) */}
                        <span className="text-5xl font-bold font-headline text-background">FITYZ</span>
                    </div>
                </AnimatedWrapper>
                 <AnimatedWrapper elementId="about-us-gallery" animationType="slide-in-right" delayMs={200}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-square">
                        <Image
                            src="/bracos-2.png"
                            alt="Ilustração do produto FITYZ em uso"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                            data-ai-hint="monitor arm detail"
                        />
                        </div>
                        <div className="relative aspect-square">
                        <Image
                            src="/bracos-1.png"
                            alt="Outra ilustração do produto FITYZ"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                            data-ai-hint="desk setup sketch"
                        />
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

    