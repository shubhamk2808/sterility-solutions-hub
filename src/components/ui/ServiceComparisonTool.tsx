import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Info, ArrowRight, Wind, Flame, Radiation, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComparisonFeature {
  name: string;
  description?: string;
  eo: string | boolean;
  steam: string | boolean;
  gamma: string | boolean;
}

const comparisonData: ComparisonFeature[] = [
  {
    name: "Temperature Range",
    description: "Operating temperature during sterilization",
    eo: "37-63°C",
    steam: "121-134°C",
    gamma: "Ambient",
  },
  {
    name: "Cycle Time",
    description: "Typical duration of complete cycle",
    eo: "12-24 hours",
    steam: "30-90 minutes",
    gamma: "Hours (dose dependent)",
  },
  {
    name: "Heat Sensitive Materials",
    description: "Suitable for plastics and polymers",
    eo: true,
    steam: false,
    gamma: true,
  },
  {
    name: "Moisture Sensitive",
    description: "Can sterilize moisture-sensitive items",
    eo: true,
    steam: false,
    gamma: true,
  },
  {
    name: "Penetration",
    description: "Ability to penetrate packaging",
    eo: "Excellent",
    steam: "Good",
    gamma: "Excellent",
  },
  {
    name: "Residue",
    description: "Post-sterilization residual concerns",
    eo: "Aeration required",
    steam: "None",
    gamma: "None",
  },
  {
    name: "Material Compatibility",
    eo: "Most plastics, metals",
    steam: "Metals, glass, some plastics",
    gamma: "Most materials",
  },
  {
    name: "Validation Complexity",
    description: "Difficulty of validation process",
    eo: "High",
    steam: "Medium",
    gamma: "High",
  },
  {
    name: "Batch Processing",
    description: "Ability to process large batches",
    eo: "Medium",
    steam: "Medium",
    gamma: "Large",
  },
  {
    name: "Cost Efficiency",
    description: "Relative cost per unit",
    eo: "Medium-High",
    steam: "Low",
    gamma: "Low (high volume)",
  },
  {
    name: "FDA 510(k) Support",
    description: "Regulatory acceptance",
    eo: true,
    steam: true,
    gamma: true,
  },
  {
    name: "ISO Compliance",
    description: "Meets ISO sterilization standards",
    eo: true,
    steam: true,
    gamma: true,
  },
];

const services = [
  {
    id: "eo",
    name: "EO Sterilization",
    shortName: "EO",
    icon: Wind,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    href: "/services/eo-sterilization",
    bestFor: ["Heat-sensitive plastics", "Electronics", "Complex devices"],
  },
  {
    id: "steam",
    name: "Steam Sterilization",
    shortName: "Steam",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    href: "/services/steam-sterilization",
    bestFor: ["Surgical instruments", "Metal devices", "Reusable equipment"],
  },
  {
    id: "gamma",
    name: "Gamma Irradiation",
    shortName: "Gamma",
    icon: Radiation,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    href: "/services/gamma-irradiation",
    bestFor: ["Single-use devices", "Bulk processing", "Pharmaceuticals"],
  },
];

interface ServiceComparisonToolProps {
  showHeader?: boolean;
  maxFeatures?: number;
}

export function ServiceComparisonTool({ showHeader = true, maxFeatures }: ServiceComparisonToolProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["eo", "steam", "gamma"]);
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        if (prev.length > 1) return prev.filter((id) => id !== serviceId);
        return prev;
      }
      return [...prev, serviceId];
    });
  };

  const toggleFeature = (featureName: string) => {
    setExpandedFeatures((prev) =>
      prev.includes(featureName)
        ? prev.filter((f) => f !== featureName)
        : [...prev, featureName]
    );
  };

  const displayedFeatures = maxFeatures && !showAll 
    ? comparisonData.slice(0, maxFeatures) 
    : comparisonData;

  const renderValue = (value: string | boolean, serviceId: string) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <X className="h-4 w-4 text-red-500 dark:text-red-400" />
          </div>
        </div>
      );
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  };

  const activeServices = services.filter((s) => selectedServices.includes(s.id));

  return (
    <div className="w-full">
      {showHeader && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Compare Sterilization Methods
          </h3>
          <p className="text-muted-foreground">
            Select methods to compare their features, capabilities, and best use cases.
          </p>
        </div>
      )}

      {/* Service Selector Pills */}
      <div className="flex flex-wrap gap-3 mb-6">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200",
                isSelected
                  ? `${service.bgColor} ${service.borderColor}`
                  : "bg-muted/50 border-border hover:border-primary/30"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center",
                isSelected ? `bg-gradient-to-r ${service.color}` : "bg-muted-foreground/20"
              )}>
                <service.icon className={cn(
                  "h-3.5 w-3.5",
                  isSelected ? "text-white" : "text-muted-foreground"
                )} />
              </div>
              <span className={cn(
                "font-medium text-sm",
                isSelected ? "text-foreground" : "text-muted-foreground"
              )}>
                {service.shortName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Best For Quick Reference */}
      <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: `repeat(${activeServices.length}, 1fr)` }}>
        {activeServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("rounded-xl p-4 border", service.bgColor, service.borderColor)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-r flex items-center justify-center", service.color)}>
                <service.icon className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">{service.name}</span>
            </div>
            <div className="text-xs text-muted-foreground mb-2">Best for:</div>
            <ul className="space-y-1">
              {service.bestFor.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        {/* Table Header */}
        <div 
          className="grid bg-muted/50 border-b border-border"
          style={{ gridTemplateColumns: `minmax(200px, 2fr) repeat(${activeServices.length}, 1fr)` }}
        >
          <div className="p-4 font-semibold text-foreground">Feature</div>
          {activeServices.map((service) => (
            <div key={service.id} className="p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className={cn("w-6 h-6 rounded-lg bg-gradient-to-r flex items-center justify-center", service.color)}>
                  <service.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-semibold text-foreground hidden sm:inline">{service.shortName}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
            >
              <div
                className="grid hover:bg-muted/30 transition-colors cursor-pointer"
                style={{ gridTemplateColumns: `minmax(200px, 2fr) repeat(${activeServices.length}, 1fr)` }}
                onClick={() => feature.description && toggleFeature(feature.name)}
              >
                <div className="p-4 flex items-center gap-2">
                  <span className="font-medium text-foreground">{feature.name}</span>
                  {feature.description && (
                    <ChevronDown className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      expandedFeatures.includes(feature.name) && "rotate-180"
                    )} />
                  )}
                </div>
                {activeServices.map((service) => (
                  <div key={service.id} className="p-4 flex items-center justify-center">
                    {renderValue(feature[service.id as keyof Pick<ComparisonFeature, "eo" | "steam" | "gamma">], service.id)}
                  </div>
                ))}
              </div>
              
              <AnimatePresence>
                {feature.description && expandedFeatures.includes(feature.name) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                        <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {maxFeatures && comparisonData.length > maxFeatures && (
        <div className="mt-4 text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `Show All ${comparisonData.length} Features`}
          </Button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {activeServices.map((service) => (
          <Button key={service.id} asChild variant="outline" className="gap-2">
            <Link to={service.href}>
              Learn more about {service.shortName}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
