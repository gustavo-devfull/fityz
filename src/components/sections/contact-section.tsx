
// This file is no longer used for the FITYZ landing page as its functionality
// has been integrated into the new Footer component.
// The content below is kept to prevent errors if it's accidentally imported,
// but it should be considered deprecated for the FITYZ theme.

'use client';

import type { FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import Image from 'next/image';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // In a real app, send this data to a backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact-standalone" className="bg-background"> {/* Changed id to avoid conflict */}
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <AnimatedWrapper elementId="contact-image-wrapper-standalone" animationType="slide-in-left">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Contact illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
              data-ai-hint="contact support"
            />
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper elementId="contact-form-wrapper-standalone" animationType="slide-in-right">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-bold text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Have questions or want to discuss a project? We&apos;d love to hear from you.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name-standalone" className="font-medium">Full Name</Label>
                <Input
                  id="name-standalone"
                  {...register('name', { required: 'Name is required' })}
                  className={`mt-1 ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email-standalone" className="font-medium">Email Address</Label>
                <Input
                  id="email-standalone"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required', 
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
                  })}
                  className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="message-standalone" className="font-medium">Message</Label>
                <Textarea
                  id="message-standalone"
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className={`mt-1 ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full transition-transform duration-300 hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

    