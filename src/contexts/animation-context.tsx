
'use client';

import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { CustomizeAnimationsInput, CustomizeAnimationsOutput } from '@/ai/flows/customize-animations';
import { customizeAnimations } from '@/ai/flows/customize-animations';

interface AnimationParams {
  delay: number;
  distance: number;
}

interface AnimationContextType {
  scrollDepth: number;
  viewedElements: string[];
  animationConfig: CustomizeAnimationsOutput | null;
  addViewedElement: (id: string) => void;
  getAnimationParams: (elementId: string) => AnimationParams;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [scrollDepth, setScrollDepth] = useState(0);
  const [viewedElements, setViewedElements] = useState<string[]>([]);
  const [animationConfig, setAnimationConfig] = useState<CustomizeAnimationsOutput | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollDepth(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addViewedElement = useCallback((id: string) => {
    setViewedElements((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);
  
  useEffect(() => {
    const fetchConfig = async () => {
      if (scrollDepth > 0 || viewedElements.length > 0) {
        try {
          const input: CustomizeAnimationsInput = {
            scrollDepth: Math.round(scrollDepth),
            viewedElements,
            pageTheme: 'light', 
          };
          const result = await customizeAnimations(input);
          setAnimationConfig(result);
          if (result.animationAdjustments.colorPaletteAdjustment) {
            console.log("AI Color Palette Suggestion:", result.animationAdjustments.colorPaletteAdjustment);
            // Potentially update CSS variables here based on the string.
            // Example: if it's a hex code, apply it.
            // document.documentElement.style.setProperty('--ai-accent', result.animationAdjustments.colorPaletteAdjustment);
          }
        } catch (error) {
          console.error("Error fetching animation config from AI:", error);
        }
      }
    };

    // Debounce AI call
    const timerId = setTimeout(fetchConfig, 500);
    return () => clearTimeout(timerId);
  }, [scrollDepth, viewedElements]);

  const getAnimationParams = useCallback((elementId: string): AnimationParams => {
    // This is a placeholder. In a real scenario, you might have per-element AI adjustments.
    // For now, we use the global AI config.
    return {
      delay: animationConfig?.animationAdjustments.elementFadeInDelay ?? 0,
      distance: animationConfig?.animationAdjustments.elementSlideInDistance ?? 20, // Default if not specified
    };
  }, [animationConfig]);

  return (
    <AnimationContext.Provider value={{ scrollDepth, viewedElements, animationConfig, addViewedElement, getAnimationParams }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationConfig = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimationConfig must be used within an AnimationProvider');
  }
  return context;
};
