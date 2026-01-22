import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface GSAPWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "stagger";
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function GSAPWrapper({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 0.7,
  staggerDelay = 0.1,
}: GSAPWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(animation === "stagger" ? element.children : element, { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
      });
      return;
    }

    const animationConfigs = {
      fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      fadeUp: { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
      fadeLeft: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0 } },
      fadeRight: { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 } },
      scale: { from: { opacity: 0, scale: 0.95 }, to: { opacity: 1, scale: 1 } },
      stagger: { from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 } },
    };

    const config = animationConfigs[animation];
    const target = animation === "stagger" ? element.children : element;

    gsap.fromTo(target, config.from, {
      ...config.to,
      duration,
      delay,
      ease: "power2.out",
      stagger: animation === "stagger" ? staggerDelay : 0,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, staggerDelay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

// Section wrapper with standard reveal
interface GSAPSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GSAPSection({ children, className, delay = 0 }: GSAPSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return (
    <section ref={ref} className={cn(className)}>
      {children}
    </section>
  );
}

// Text reveal with character split (for headlines)
interface GSAPTextRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export function GSAPTextReveal({ 
  children, 
  className, 
  tag: Tag = "span",
  delay = 0 
}: GSAPTextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      element,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
