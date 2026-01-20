import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

interface ProcessVisualizationProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: "horizontal" | "vertical";
}

export function ProcessVisualization({
  title,
  subtitle,
  steps,
  variant = "horizontal",
}: ProcessVisualizationProps) {
  if (variant === "vertical") {
    return (
      <div className="space-y-6">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 z-10">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      {step.duration && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      
      <div className="relative">
        {/* Horizontal Line (hidden on mobile) */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />
        
        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Step Circle */}
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg z-10 relative mb-4">
                {step.step}
              </div>
              
              {/* Content */}
              <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {step.duration && (
                <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {step.duration}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pre-built process visualizations for common sterilization methods
export const eoProcessSteps: ProcessStep[] = [
  { step: 1, title: "Preconditioning", description: "Products are preconditioned to optimal temperature and humidity levels.", duration: "2-4 hrs" },
  { step: 2, title: "EO Exposure", description: "Ethylene oxide gas is introduced at controlled concentration and dwell time.", duration: "2-6 hrs" },
  { step: 3, title: "Aeration", description: "EO residuals are removed through controlled air exchanges.", duration: "12-48 hrs" },
  { step: 4, title: "Release Testing", description: "Biological and chemical indicators are evaluated before release.", duration: "24-48 hrs" },
];

export const steamProcessSteps: ProcessStep[] = [
  { step: 1, title: "Loading", description: "Products are properly loaded to ensure steam penetration.", duration: "15-30 min" },
  { step: 2, title: "Air Removal", description: "Pre-vacuum cycles remove air from the chamber.", duration: "5-10 min" },
  { step: 3, title: "Sterilization", description: "Saturated steam at 121-134°C for validated exposure time.", duration: "15-30 min" },
  { step: 4, title: "Drying & Release", description: "Products are dried and BI results verified before release.", duration: "30-60 min" },
];

export const gammaProcessSteps: ProcessStep[] = [
  { step: 1, title: "Dose Mapping", description: "Product-specific dose distribution study for optimal treatment.", duration: "Initial" },
  { step: 2, title: "Loading", description: "Products positioned for uniform dose delivery.", duration: "30-60 min" },
  { step: 3, title: "Irradiation", description: "Controlled exposure to Cobalt-60 gamma radiation.", duration: "2-8 hrs" },
  { step: 4, title: "Dosimetry & Release", description: "Dosimeter readings verified and documentation completed.", duration: "24 hrs" },
];
