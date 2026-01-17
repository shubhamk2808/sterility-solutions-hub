import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "ISO 13485", description: "Quality Management" },
  { icon: Award, label: "ISO 11135", description: "EO Sterilization" },
  { icon: CheckCircle, label: "FDA Registered", description: "US Compliance" },
  { icon: FileCheck, label: "CE Marked", description: "EU Conformity" },
];

interface TrustBadgesProps {
  variant?: "default" | "compact";
}

export function TrustBadges({ variant = "default" }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-background/10 backdrop-blur-sm rounded-full border border-background/20"
          >
            <badge.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="font-semibold text-foreground">{badge.label}</div>
          <div className="text-sm text-muted-foreground">{badge.description}</div>
        </motion.div>
      ))}
    </div>
  );
}
