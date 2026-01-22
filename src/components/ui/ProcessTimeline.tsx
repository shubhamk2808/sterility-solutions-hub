import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  icon?: React.ReactNode;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessTimeline({ 
  title, 
  subtitle, 
  steps, 
  className 
}: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stepsContainer = stepsRef.current;
    if (!container || !stepsContainer) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stepElements = stepsContainer.querySelectorAll("[data-process-step]");
    const connectors = stepsContainer.querySelectorAll("[data-connector]");

    if (prefersReducedMotion) {
      gsap.set([...stepElements, ...connectors], { opacity: 1, scaleX: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animate steps sequentially to show methodical process
    stepElements.forEach((step, index) => {
      tl.fromTo(
        step,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5,
          ease: "power2.out"
        },
        index * 0.4
      );

      // Animate connecting line after each step (except last)
      if (connectors[index]) {
        tl.fromTo(
          connectors[index],
          { scaleX: 0, opacity: 0 },
          { 
            scaleX: 1, 
            opacity: 1, 
            duration: 0.3,
            ease: "power1.inOut"
          },
          index * 0.4 + 0.3
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [steps]);

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h3 className="text-heading-3 text-foreground mb-3">{title}</h3>
          )}
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}

      {/* Desktop: Horizontal Timeline */}
      <div ref={stepsRef} className="hidden lg:block">
        <div className="relative">
          {/* Background track */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center">
                {/* Step card */}
                <div 
                  data-process-step
                  className="relative z-10 bg-card border border-border rounded-2xl p-6 mx-2 shadow-sm hover:shadow-medical transition-shadow duration-300 w-full"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
                    {step.step}
                  </div>
                  
                  <div className="pt-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    {step.duration && (
                      <div className="inline-flex items-center gap-1.5 text-xs bg-surface px-2.5 py-1 rounded-full text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div 
                    data-connector 
                    className="absolute right-0 top-12 translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20"
                    style={{ transformOrigin: "left center" }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                data-process-step
                className="relative pl-16"
              >
                {/* Step number circle */}
                <div className="absolute left-3 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
                  {step.step}
                </div>

                {/* Connector line animation placeholder */}
                {index < steps.length - 1 && (
                  <div 
                    data-connector
                    className="absolute left-6 -translate-x-1/2 top-10 bottom-0 w-0.5 bg-primary/20"
                    style={{ transformOrigin: "top center" }}
                  />
                )}
                
                {/* Content card */}
                <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  {step.duration && (
                    <div className="inline-flex items-center gap-1.5 text-xs bg-surface px-2.5 py-1 rounded-full text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Prebuilt process steps for sterilization services
export const eoSterilizationSteps: ProcessStep[] = [
  { step: 1, title: "Receipt & Inspection", description: "Products received and inspected for packaging integrity and load configuration.", duration: "1-2 hours" },
  { step: 2, title: "Preconditioning", description: "Products equilibrated to optimal temperature and humidity levels.", duration: "12-24 hours" },
  { step: 3, title: "EO Exposure", description: "Controlled exposure to ethylene oxide gas at validated parameters.", duration: "2-6 hours" },
  { step: 4, title: "Aeration", description: "Removal of EO residuals to safe levels per ISO 10993-7.", duration: "8-24 hours" },
  { step: 5, title: "Testing & Release", description: "BI/CI verification and certificate issuance upon confirmation.", duration: "24-48 hours" },
];

export const steamSterilizationSteps: ProcessStep[] = [
  { step: 1, title: "Load Preparation", description: "Products prepared and positioned for optimal steam penetration.", duration: "30-60 min" },
  { step: 2, title: "Pre-Vacuum", description: "Air removal through multiple vacuum pulses.", duration: "5-10 min" },
  { step: 3, title: "Steam Exposure", description: "Saturated steam at 121-134°C under pressure.", duration: "15-30 min" },
  { step: 4, title: "Drying", description: "Post-cycle drying to remove residual moisture.", duration: "15-30 min" },
  { step: 5, title: "Release", description: "BI testing and quality documentation provided.", duration: "24-48 hours" },
];

export const gammaSterilizationSteps: ProcessStep[] = [
  { step: 1, title: "Dosimetry Setup", description: "Dose mapping and placement of dosimeters.", duration: "1-2 hours" },
  { step: 2, title: "Product Loading", description: "Products positioned in irradiation cell.", duration: "1-2 hours" },
  { step: 3, title: "Irradiation", description: "Controlled exposure to Cobalt-60 gamma rays.", duration: "2-8 hours" },
  { step: 4, title: "Dose Verification", description: "Dosimeter reading and dose uniformity confirmation.", duration: "2-4 hours" },
  { step: 5, title: "Release", description: "Certificate issuance with dose verification.", duration: "24 hours" },
];
