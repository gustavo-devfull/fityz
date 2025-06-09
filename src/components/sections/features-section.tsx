
// This file is no longer used for the FITYZ landing page.
// The content below is kept to prevent errors if it's accidentally imported,
// but it should be considered deprecated for the FITYZ theme.

import type { FC, ElementType } from 'react';
import { Zap, Eye, Bot, Palette } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

interface Feature {
  id: string;
  icon: ElementType;
  title: string;
  description: string;
  animation: 'slide-in-left' | 'fade-in-up' | 'slide-in-right';
}

const features: Feature[] = [
  {
    id: 'feature-interactive',
    icon: Zap,
    title: 'Interactive Animations',
    description: 'Engage users with animations that respond to their actions, creating a dynamic and memorable experience.',
    animation: 'slide-in-left',
  },
  {
    id: 'feature-ai-driven',
    icon: Bot,
    title: 'AI-Powered Customization',
    description: 'Our AI adapts animations based on user behavior, ensuring a personalized journey for every visitor.',
    animation: 'fade-in-up',
  },
  {
    id: 'feature-responsive',
    icon: Eye,
    title: 'Visually Stunning & Responsive',
    description: 'Beautifully designed layouts that adapt to any screen size, ensuring a flawless look on all devices.',
    animation: 'slide-in-right',
  },
   {
    id: 'feature-inclusive',
    icon: Palette,
    title: 'Inclusive Design',
    description: 'Built with accessibility in mind, ensuring a great experience for all users, regardless of ability.',
    animation: 'fade-in-up',
  },
];

export const FeaturesSection: FC = () => {
  return (
    <section id="features" className="bg-secondary">
      <div className="container mx-auto">
        <AnimatedWrapper elementId="features-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold text-foreground md:text-4xl">
            Why Animagic?
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            Discover the core features that make Animagic the future of web interaction.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedWrapper
              key={feature.id}
              elementId={feature.id}
              animationType={feature.animation}
              delayMs={index * 150}
            >
              <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-background">
                <CardHeader className="items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

    