
// This file is no longer used for the FITYZ landing page.
// The content below is kept to prevent errors if it's accidentally imported,
// but it should be considered deprecated for the FITYZ theme.

import type { FC } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

const steps = [
  {
    id: 'step1',
    title: 'Define Your Vision',
    description: 'Start by outlining your desired user experience and animation goals. What story do you want to tell?',
    image: 'https://placehold.co/500x300.png',
    imageAlt: 'Person sketching ideas',
    imageHint: 'planning sketch'
  },
  {
    id: 'step2',
    title: 'AI Magic Happens',
    description: 'Our intelligent system analyzes user interactions and preferences to tailor animations in real-time.',
    image: 'https://placehold.co/500x300.png',
    imageAlt: 'Abstract representation of AI processing',
    imageHint: 'AI network'
  },
  {
    id: 'step3',
    title: 'Deploy & Delight',
    description: 'Seamlessly integrate Animagic into your website and watch your user engagement soar with personalized animations.',
    image: 'https://placehold.co/500x300.png',
    imageAlt: 'Website with engaging animations',
    imageHint: 'website animation'
  },
];

export const HowItWorksSection: FC = () => {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="container mx-auto">
        <AnimatedWrapper elementId="howitworks-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold text-foreground md:text-4xl">
            How Animagic Works
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            A simple yet powerful process to bring your website to life.
          </p>
        </AnimatedWrapper>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <AnimatedWrapper
              key={step.id}
              elementId={step.id}
              animationType={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              className="items-center"
            >
              <div className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${index % 2 === 0 ? '' : 'md:grid-flow-row-dense md:[&>*:last-child]:col-start-1'}`}>
                <div>
                  <h3 className="mb-3 font-headline text-2xl font-semibold text-foreground">
                    <CheckCircle className="mr-2 inline-block h-7 w-7 text-accent" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                    data-ai-hint={step.imageHint}
                  />
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

    