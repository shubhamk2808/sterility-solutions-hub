import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
    download?: boolean;
  };
  variant?: "default" | "gradient";
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  return (
    <section className={`section-padding ${variant === "gradient" ? "gradient-medical" : "bg-surface"}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-heading-1 md:text-display-2 mb-4 ${variant === "gradient" ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-body-lg mb-8 ${variant === "gradient" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Button 
                asChild 
                size="lg" 
                className={variant === "gradient" ? "bg-background text-foreground hover:bg-background/90" : ""}
              >
                <Link to={primaryCTA.href} className="flex items-center gap-2">
                  {primaryCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button 
                asChild 
                variant={variant === "gradient" ? "outline" : "secondary"} 
                size="lg"
                className={variant === "gradient" ? "border-white/40 text-white hover:bg-white/20 hover:text-white" : ""}
              >
                <Link to={secondaryCTA.href} className="flex items-center gap-2">
                  {secondaryCTA.download && <Download className="h-4 w-4" />}
                  {secondaryCTA.label}
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
