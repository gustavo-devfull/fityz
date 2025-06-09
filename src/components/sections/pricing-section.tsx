
// This file is no longer used for the FITYZ landing page.
// The content below is kept to prevent errors if it's accidentally imported,
// but it should be considered deprecated for the FITYZ theme.

import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';

const pricingPlans = [
  {
    id: 'pricing-starter',
    name: 'Starter',
    price: '$0',
    frequency: '/month',
    description: 'Perfect for individuals and small projects.',
    features: ['Basic Animations', 'Limited AI Customization', 'Community Support'],
    cta: 'Get Started',
    animation: 'slide-in-left',
    highlight: false,
  },
  {
    id: 'pricing-pro',
    name: 'Pro',
    price: '$29',
    frequency: '/month',
    description: 'Ideal for professionals and growing businesses.',
    features: ['Advanced Animations', 'Full AI Customization', 'Priority Support', 'Analytics'],
    cta: 'Choose Pro',
    animation: 'fade-in-up',
    highlight: true,
  },
  {
    id: 'pricing-enterprise',
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'Tailored solutions for large organizations.',
    features: ['Custom Integrations', 'Dedicated Account Manager', 'Premium Support', 'Volume Discounts'],
    cta: 'Contact Sales',
    animation: 'slide-in-right',
    highlight: false,
  },
];

export const PricingSection: FC = () => {
  return (
    <section id="pricing" className="bg-secondary">
      <div className="container mx-auto">
        <AnimatedWrapper elementId="pricing-title-wrapper" animationType="fade-in-up">
          <h2 className="mb-4 text-center font-headline text-3xl font-bold text-foreground md:text-4xl">
            Flexible Pricing Plans
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            Choose the plan that best fits your needs and start creating magic.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <AnimatedWrapper
              key={plan.id}
              elementId={plan.id}
              animationType={plan.animation as 'slide-in-left' | 'fade-in-up' | 'slide-in-right'}
              delayMs={index * 100}
              className="flex"
            >
              <Card className={`flex w-full flex-col ${plan.highlight ? 'border-2 border-accent shadow-2xl bg-primary/10' : 'bg-background'}`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.frequency}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full transition-transform duration-300 hover:scale-105 ${plan.highlight ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

    