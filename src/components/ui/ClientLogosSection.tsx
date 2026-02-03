import { motion } from "framer-motion";
import { Award, Shield, FileCheck, Building2, Globe, Users, Star, CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "ISO 13485", subtitle: "Medical Devices QMS", icon: Award },
  { name: "ISO 11135", subtitle: "EO Sterilization", icon: Shield },
  { name: "ISO 17665", subtitle: "Steam Sterilization", icon: FileCheck },
  { name: "ISO 11137", subtitle: "Radiation Sterilization", icon: Shield },
  { name: "FDA Registered", subtitle: "US Compliance", icon: CheckCircle2 },
  { name: "CE Marking", subtitle: "European Standards", icon: Globe },
];

const stats = [
  { value: "25+", label: "Years Experience", icon: Star },
  { value: "500+", label: "Global Clients", icon: Users },
  { value: "10M+", label: "Products Sterilized", icon: CheckCircle2 },
  { value: "15+", label: "Countries Served", icon: Globe },
];

interface ClientLogosSectionProps {
  variant?: "certifications" | "stats" | "combined";
  showTitle?: boolean;
}

export function ClientLogosSection({ variant = "combined", showTitle = true }: ClientLogosSectionProps) {
  return (
    <section className="py-12 bg-surface">
      <div className="container-custom">
        {variant === "certifications" || variant === "combined" ? (
          <div className="mb-12">
            {showTitle && (
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Certifications & Compliance
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  Industry-Leading Quality Standards
                </h3>
              </div>
            )}
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-card rounded-xl border border-border p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <cert.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}

        {variant === "stats" || variant === "combined" ? (
          <div className={variant === "combined" ? "pt-8 border-t border-border" : ""}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Scrolling logo marquee for partner/client logos
export function LogoMarquee() {
  const logos = [
    "Hospital Systems Inc.",
    "MedDevice Corp",
    "PharmaCare Global",
    "BioTech Solutions",
    "Healthcare Innovations",
    "SterileFirst Ltd",
    "MedSupply Pro",
    "CleanRoom Tech",
  ];

  return (
    <div className="py-8 bg-muted/30 overflow-hidden">
      <div className="container-custom mb-4">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by leading healthcare organizations worldwide
        </p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg border border-border"
            >
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
