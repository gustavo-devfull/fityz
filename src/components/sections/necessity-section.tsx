
'use client';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

interface NecessityItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  title: string;
  description: string;
}

const necessityItems: NecessityItem[] = [
  {
    id: 'necessity-notebook',
    imageSrc: '/bracos-1.png',
    imageAlt: 'Suporte FITYZ com notebook',
    imageHint: 'monitor stand laptop',
    title: 'Setup com Notebook',
    description: '1 braço articulado, 1 haste 40cm, 1 suporte para notebook.',
  },
  {
    id: 'necessity-dual-articulated',
    imageSrc: '/bracos-2.png',
    imageAlt: 'Suporte FITYZ duplo articulado',
    imageHint: 'dual monitor arm',
    title: 'Duplo Articulado',
    description: '2 braços articulados, 1 haste 40cm, base reforçada.',
  },
  {
    id: 'necessity-single-arm',
    imageSrc: '/bracos-3.png',
    imageAlt: 'Suporte FITYZ com braço articulado simples',
    imageHint: 'single monitor arm',
    title: 'Braço Articulado Simples',
    description: '1 braço articulado, 1 haste 40cm, para um monitor.',
  },
];

export const NecessitySection: FC = () => {
  return (
    <section id="necessity" className="bg-secondary">
      <div className="container mx-auto">
        <AnimatedWrapper elementId="necessity-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold uppercase text-foreground md:text-4xl">
            Qual a sua necessidade?
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            Monte seu kit com o que se adapta ao seu setup.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {necessityItems.map((item, index) => (
            <AnimatedWrapper
              key={item.id}
              elementId={item.id}
              animationType="fade-in-up"
              delayMs={index * 150}
            >
              <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-background text-left">
                <CardContent className="p-0">
                  <div className="relative aspect-[1/1] w-full">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

    