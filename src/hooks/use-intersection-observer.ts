
'use client';

import { type RefObject, useEffect, useState, useRef } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: IntersectionObserverOptions,
  onVisible?: (id: string) => void,
  elementId?: string,
): boolean {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    if (!elementRef.current) {
        return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const newVisibility = entry.isIntersecting;
        if (!isVisible && newVisibility && onVisible && elementId) {
            onVisible(elementId);
        }
        if (freezeOnceVisible && newVisibility) {
          setIsVisible(true);
          if (observerRef.current && elementRef.current) {
            observerRef.current.unobserve(elementRef.current);
          }
        } else {
          setIsVisible(newVisibility);
        }
      },
      { threshold, root, rootMargin }
    );

    const { current: currentElement } = elementRef;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, onVisible, elementId, isVisible]);

  return isVisible;
}
