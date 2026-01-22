import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Shield, Award, CheckCircle, FileCheck, BadgeCheck, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
}

interface TrustSectionProps {
  className?: string;
  variant?: "default" | "compact" | "detailed";
}

const certifications: Certification[] = [
  {
    icon: Shield,
    title: "ISO 13485:2016",
    description: "Medical Device Quality Management System",
    badge: "Active",
  },
  {
    icon: Award,
    title: "ISO 11135:2014",
    description: "EO Sterilization Development & Validation",
    badge: "Active",
  },
  {
    icon: FileCheck,
    title: "ISO 17665-1:2006",
    description: "Steam Sterilization Standards",
    badge: "Active",
  },
  {
    icon: BadgeCheck,
    title: "FDA Registered",
    description: "US Food & Drug Administration",
    badge: "Verified",
  },
  {
    icon: Building2,
    title: "ISO 11137",
    description: "Radiation Sterilization Standards",
    badge: "Active",
  },
  {
    icon: CheckCircle,
    title: "CE Marked",
    description: "European Conformity Standards",
    badge: "Active",
  },
];

export function TrustSection({ className, variant = "default" }: TrustSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = container.querySelectorAll("[data-trust-item]");

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      items,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (variant === "compact") {
    return (
      <div ref={containerRef} className={cn("flex flex-wrap items-center justify-center gap-6", className)}>
        {certifications.slice(0, 4).map((cert) => (
          <div
            key={cert.title}
            data-trust-item
            className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-border/50"
          >
            <cert.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{cert.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            data-trust-item
            className={cn(
              "group relative bg-card rounded-xl border border-border p-5 transition-all duration-300",
              "hover:border-primary/30 hover:shadow-sm"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                  {cert.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-medium bg-success/10 text-success rounded">
                      {cert.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Compliance banner for footer/header areas
export function ComplianceBanner({ className }: { className?: string }) {
  return (
    <div className={cn(
      "flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-surface/50 backdrop-blur-sm border-y border-border/50",
      className
    )}>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">Certifications:</span>
      {["ISO 13485", "ISO 11135", "ISO 17665", "FDA Registered", "CE Marked"].map((cert) => (
        <span 
          key={cert} 
          className="text-xs font-medium text-foreground/80 px-2 py-1 bg-background rounded border border-border/50"
        >
          {cert}
        </span>
      ))}
    </div>
  );
}
