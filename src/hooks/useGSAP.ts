import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Medical-appropriate animation settings - calm, controlled, professional
export const medicalAnimationConfig = {
  duration: 0.8,
  ease: "power2.out",
  staggerDelay: 0.1,
};

// Fade in from bottom - gentle reveal
export function useGSAPFadeIn(options?: { delay?: number; duration?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: options?.y ?? 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? medicalAnimationConfig.duration,
        delay: options?.delay ?? 0,
        ease: medicalAnimationConfig.ease,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [options?.delay, options?.duration, options?.y]);

  return ref;
}

// Stagger children animation - for lists, grids
export function useGSAPStagger(options?: { stagger?: number; duration?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      gsap.set(element.children, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      element.children,
      { 
        opacity: 0, 
        y: options?.y ?? 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.6,
        stagger: options?.stagger ?? medicalAnimationConfig.staggerDelay,
        ease: medicalAnimationConfig.ease,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [options?.stagger, options?.duration, options?.y]);

  return ref;
}

// Hero text animation - calm entrance
export function useGSAPHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(container.querySelectorAll("[data-animate]"), { opacity: 1, y: 0, x: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate badge first
    const badge = container.querySelector("[data-animate='badge']");
    if (badge) {
      tl.fromTo(badge, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }

    // Then title
    const title = container.querySelector("[data-animate='title']");
    if (title) {
      tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.2");
    }

    // Then description
    const description = container.querySelector("[data-animate='description']");
    if (description) {
      tl.fromTo(description, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    }

    // Then CTA buttons
    const cta = container.querySelector("[data-animate='cta']");
    if (cta) {
      tl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
    }

    return () => {
      tl.kill();
    };
  }, []);

  return containerRef;
}

// Counter animation - for statistics
export function useGSAPCounter(targetValue: number, options?: { duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      element.textContent = targetValue.toLocaleString() + (options?.suffix ?? "");
      return;
    }

    const counter = { value: 0 };

    gsap.to(counter, {
      value: targetValue,
      duration: options?.duration ?? 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString() + (options?.suffix ?? "");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [targetValue, options?.duration, options?.suffix]);

  return ref;
}

// Process timeline animation - for sterilization steps
export function useGSAPTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const steps = container.querySelectorAll("[data-step]");
    const lines = container.querySelectorAll("[data-line]");

    if (prefersReducedMotion) {
      gsap.set([...steps, ...lines], { opacity: 1, scaleX: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Animate each step with connecting lines
    steps.forEach((step, index) => {
      tl.fromTo(
        step,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        index * 0.3
      );

      if (lines[index]) {
        tl.fromTo(
          lines[index],
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.4 },
          index * 0.3 + 0.2
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
}

// Subtle parallax effect
export function useGSAPParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.to(element, {
      y: () => window.innerHeight * speed * -0.5,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return ref;
}

// Reveal on scroll with scale
export function useGSAPReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, scale: 1 });
      return;
    }

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };
