import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * Used for scroll-triggered animations
 */
export const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        setHasAnimated(true);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, triggerOnce ? (isInView || hasAnimated) : isInView];
};

export default useInView;
