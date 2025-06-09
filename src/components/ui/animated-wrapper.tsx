
'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useAnimationConfig } from '@/contexts/animation-context';

type AnimationType = 
  | 'fade-in' 
  | 'fade-in-up' 
  | 'slide-in-left' 
  | 'slide-in-right';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  elementId: string; // For AI tracking and unique key
  animationType?: AnimationType;
  delayMs?: number; // Base delay
  durationMs?: number; // Base duration
  staggerChildren?: number; // Delay for each child in ms
  threshold?: number;
  freezeOnceVisible?: boolean;
}

export function AnimatedWrapper({
  children,
  className = '',
  elementId,
  animationType = 'fade-in-up',
  delayMs = 0,
  durationMs = 700,
  threshold = 0.1,
  freezeOnceVisible = true,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { addViewedElement, getAnimationParams } = useAnimationConfig();
  
  const isVisible = useIntersectionObserver(
    ref,
    { threshold, freezeOnceVisible },
    addViewedElement, // Pass the callback directly
    elementId
  );

  const aiParams = getAnimationParams(elementId);
  const finalDelay = aiParams.delay ?? delayMs;
  // AI distance is not directly used here as Tailwind classes manage transform,
  // but it could be used to dynamically set initial transform if needed.

  const baseAnimationClass: Record<AnimationType, string> = {
    'fade-in': 'anim-fade-in',
    'fade-in-up': 'anim-fade-in-up',
    'slide-in-left': 'anim-slide-in-left',
    'slide-in-right': 'anim-slide-in-right',
  };

  const animationClass = `${baseAnimationClass[animationType]} ${isVisible ? 'is-visible' : ''}`;
  
  return (
    <div
      ref={ref}
      id={elementId}
      className={`${className} ${animationClass}`}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${isVisible ? finalDelay : 0}ms`,
      }}
    >
      {children}
    </div>
  );
}
