import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Thermometer, Droplets, Zap, Package, Syringe, 
  HeartPulse, FlaskConical, ArrowRight, CheckCircle, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectionStep {
  question: string;
  options: {
    label: string;
    icon: any;
    value: string;
    description: string;
  }[];
}

const selectionSteps: SelectionStep[] = [
  {
    question: "What type of product do you need to sterilize?",
    options: [
      { label: "Medical Devices", icon: HeartPulse, value: "devices", description: "Implants, surgical instruments, catheters" },
      { label: "Pharmaceutical Products", icon: FlaskConical, value: "pharma", description: "Drugs, APIs, packaging" },
      { label: "Laboratory Equipment", icon: Syringe, value: "lab", description: "Labware, media, consumables" },
      { label: "Packaging Materials", icon: Package, value: "packaging", description: "Pouches, trays, containers" },
    ],
  },
  {
    question: "Is your product heat-sensitive?",
    options: [
      { label: "Yes, heat-sensitive", icon: Thermometer, value: "heat-sensitive", description: "Cannot withstand >60°C" },
      { label: "Moderate heat tolerance", icon: Droplets, value: "moderate-heat", description: "Can withstand up to 100°C" },
      { label: "Heat-resistant", icon: Zap, value: "heat-resistant", description: "Can withstand 121°C+" },
    ],
  },
  {
    question: "Is your product moisture-sensitive?",
    options: [
      { label: "Yes, moisture-sensitive", icon: Droplets, value: "moisture-sensitive", description: "Cannot be exposed to water/steam" },
      { label: "No, moisture-tolerant", icon: CheckCircle, value: "moisture-tolerant", description: "Can withstand steam exposure" },
    ],
  },
];

interface RecommendationResult {
  primary: {
    method: string;
    href: string;
    description: string;
    suitability: number;
  };
  alternatives: {
    method: string;
    href: string;
    suitability: number;
  }[];
  considerations: string[];
}

function getRecommendation(selections: string[]): RecommendationResult {
  const [productType, heatSensitivity, moistureSensitivity] = selections;
  
  // EO is best for heat/moisture sensitive products
  if (heatSensitivity === "heat-sensitive" || moistureSensitivity === "moisture-sensitive") {
    return {
      primary: {
        method: "EO Sterilization",
        href: "/services/eo-sterilization",
        description: "Ideal for heat and moisture-sensitive medical devices. Low-temperature process with excellent material compatibility.",
        suitability: 95,
      },
      alternatives: [
        { method: "Gamma Irradiation", href: "/services/gamma-irradiation", suitability: 70 },
      ],
      considerations: [
        "EO requires aeration time for residual removal",
        "Suitable for complex geometries and lumens",
        "FDA and ISO 11135 compliant process",
      ],
    };
  }
  
  // Steam for heat-resistant, moisture-tolerant products
  if (heatSensitivity === "heat-resistant" && moistureSensitivity === "moisture-tolerant") {
    return {
      primary: {
        method: "Steam Sterilization",
        href: "/services/steam-sterilization",
        description: "Fast, cost-effective sterilization for heat and moisture-resistant products. Ideal for reusable surgical instruments.",
        suitability: 98,
      },
      alternatives: [
        { method: "EO Sterilization", href: "/services/eo-sterilization", suitability: 60 },
      ],
      considerations: [
        "Fastest turnaround time available",
        "No toxic residues",
        "ISO 17665 validated cycles",
      ],
    };
  }
  
  // Default to Gamma for bulk processing
  return {
    primary: {
      method: "Gamma Irradiation",
      href: "/services/gamma-irradiation",
      description: "High-penetration sterilization ideal for bulk processing of single-use devices and pre-packaged products.",
      suitability: 85,
    },
    alternatives: [
      { method: "EO Sterilization", href: "/services/eo-sterilization", suitability: 80 },
    ],
    considerations: [
      "Excellent for final packaged products",
      "No heat or moisture exposure",
      "Dose mapping ensures uniform treatment",
    ],
  };
}

export function SterilizationSelector() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const newSelections = [...selections, value];
    setSelections(newSelections);
    
    if (currentStep < selectionSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetSelector = () => {
    setCurrentStep(0);
    setSelections([]);
    setShowResult(false);
  };

  const recommendation = showResult ? getRecommendation(selections) : null;

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
        <h3 className="text-xl font-bold mb-2">Sterilization Method Selector</h3>
        <p className="text-primary-foreground/80">Answer a few questions to find the optimal sterilization method for your product.</p>
      </div>

      {/* Progress Bar */}
      <div className="px-6 pt-4">
        <div className="flex gap-2">
          {selectionSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-colors ${
                index < currentStep || showResult
                  ? "bg-primary"
                  : index === currentStep && !showResult
                  ? "bg-primary/50"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {selectionSteps[currentStep].question}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectionSteps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="flex items-start gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <option.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Recommended Method</h4>
              </div>
              
              {recommendation && (
                <>
                  {/* Primary Recommendation */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-xl font-bold text-primary">{recommendation.primary.method}</h5>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {recommendation.primary.suitability}% Match
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{recommendation.primary.description}</p>
                    <Button asChild>
                      <Link to={recommendation.primary.href}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Considerations */}
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground text-sm">Key Considerations</span>
                    </div>
                    <ul className="space-y-1">
                      {recommendation.considerations.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternatives */}
                  {recommendation.alternatives.length > 0 && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-muted-foreground">Alternatives:</span>
                      {recommendation.alternatives.map((alt) => (
                        <Link
                          key={alt.method}
                          to={alt.href}
                          className="text-primary hover:underline"
                        >
                          {alt.method} ({alt.suitability}%)
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Button variant="outline" onClick={resetSelector}>
                  Start Over
                </Button>
                <Button asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
