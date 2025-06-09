
'use client';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

interface ProductItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  caption: string;
}

const productItems: ProductItem[] = [
  { id: 'prod-arm-single', imageSrc: '/peca-1.png', imageAlt: 'Braço articulado simples', imageHint: 'monitor arm part', caption: 'Braço Articulado Simples' },
  { id: 'prod-arm-double', imageSrc: '/peca-2.png', imageAlt: 'Braço articulado duplo', imageHint: 'dual monitor arm part', caption: 'Braço Articulado Duplo' },
  { id: 'prod-haste-40', imageSrc: '/peca-3.png', imageAlt: 'Haste 40cm', imageHint: 'monitor stand post', caption: 'Haste 40cm' },
  { id: 'prod-notebook-support', imageSrc: '/peca-4.png', imageAlt: 'Suporte para notebook', imageHint: 'laptop tray monitor mount', caption: 'Suporte para Notebook' },
  { id: 'prod-combo1', imageSrc: '/peca-5.png', imageAlt: 'Combinação de braço e haste', imageHint: 'monitor arm assembly', caption: 'Kit Braço + Haste' },
  { id: 'prod-base', imageSrc: '/peca-6.png', imageAlt: 'Base de fixação', imageHint: 'monitor mount base', caption: 'Base de Fixação' },
  // Add 3 more to make a 3x3 grid if desired, or adjust grid layout.
  // For now, 6 items in a 3-col grid will result in 2 rows.
  { id: 'prod-notebook-support', imageSrc: '/peca-4.png', imageAlt: 'Suporte para notebook', imageHint: 'laptop tray monitor mount', caption: 'Suporte para Notebook' },
  { id: 'prod-combo1', imageSrc: '/peca-5.png', imageAlt: 'Combinação de braço e haste', imageHint: 'monitor arm assembly', caption: 'Kit Braço + Haste' },
  { id: 'prod-base', imageSrc: '/peca-6.png', imageAlt: 'Base de fixação', imageHint: 'monitor mount base', caption: 'Base de Fixação' },
];

export const ProductGallerySection: FC = () => {
  return (
    <section id="products" className="bg-background">
      <div className="container mx-auto">
        <AnimatedWrapper elementId="product-gallery-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold uppercase text-foreground md:text-4xl">
            Escolha as peças e monte o seu suporte personalizado.
          </h2>
        </AnimatedWrapper>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
          {productItems.map((item, index) => (
            <AnimatedWrapper
              key={item.id}
              elementId={item.id}
              animationType="fade-in-up"
              delayMs={index * 100}
            >
              <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-background text-center">
                <CardContent className="p-4 pb-2">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      layout="fill"
                      objectFit="contain" // Use contain to show the whole product part
                      className="rounded-md"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                </CardContent>
                <CardDescription className="p-4 pt-0 font-medium text-foreground">{item.caption}</CardDescription>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

    