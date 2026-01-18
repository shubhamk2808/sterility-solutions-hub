import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, CheckCircle, Shield, Thermometer, Clock, Droplets, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const processSteps = [
  { step: 1, title: "Loading & Preparation", description: "Items are properly arranged in the chamber for optimal steam penetration." },
  { step: 2, title: "Air Removal", description: "Pre-vacuum or gravity displacement removes air from the chamber." },
  { step: 3, title: "Steam Injection", description: "Saturated steam is introduced to achieve sterilization temperature." },
  { step: 4, title: "Exposure Phase", description: "Items are held at sterilization temperature for the validated duration." },
  { step: 5, title: "Exhaust & Drying", description: "Steam is exhausted and items are dried under controlled conditions." },
  { step: 6, title: "Verification", description: "Physical, chemical, and biological indicators confirm sterilization." },
];

const specifications = [
  { label: "Operating Temperature", value: "121°C - 134°C (250°F - 273°F)" },
  { label: "Operating Pressure", value: "15 - 30 PSI" },
  { label: "Cycle Time", value: "15 - 45 minutes (exposure)" },
  { label: "Total Cycle", value: "45 - 90 minutes including drying" },
  { label: "Chamber Sizes", value: "1m³ to 20m³" },
  { label: "Steam Quality", value: "Saturated, 97% minimum dryness" },
];

const cycleTypes = [
  { 
    title: "Pre-Vacuum Cycle", 
    description: "Multiple vacuum pulses remove air, ensuring complete steam penetration for porous loads and wrapped items.",
    temp: "134°C / 3.5 minutes"
  },
  { 
    title: "Gravity Displacement", 
    description: "Steam displaces air by gravity, suitable for non-porous items and liquid sterilization.",
    temp: "121°C / 15-30 minutes"
  },
  { 
    title: "Flash Sterilization", 
    description: "Rapid sterilization for unwrapped items needed immediately, with shortened cycles.",
    temp: "132°C / 3-10 minutes"
  },
];

const compatibleMaterials = [
  "Stainless steel instruments",
  "Surgical tools",
  "Glass containers",
  "Rubber goods",
  "Textiles and linens",
  "Heat-stable plastics",
  "Wrapped instrument sets",
  "Laboratory equipment",
];

const compliance = [
  { title: "ISO 17665", description: "Sterilization of health care products - Moist heat" },
  { title: "EN 285", description: "Sterilization - Steam sterilizers - Large sterilizers" },
  { title: "ANSI/AAMI ST79", description: "Comprehensive guide to steam sterilization" },
  { title: "FDA 21 CFR Part 820", description: "Quality System Regulation" },
];

export default function SteamSterilization() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Flame className="h-8 w-8" />
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                Sterilization Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Steam Sterilization
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              High-pressure saturated steam autoclaving for surgical instruments, reusable medical 
              equipment, and heat-resistant materials. The most widely used and cost-effective 
              sterilization method in healthcare.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-orange-600 hover:bg-white/90">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Download Datasheet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "Fast Cycles", value: "15-45 min" },
              { icon: Droplets, label: "No Residues", value: "Chemical-free" },
              { icon: Thermometer, label: "Temperature", value: "121-134°C" },
              { icon: Gauge, label: "Pressure", value: "15-30 PSI" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                badge="Overview"
                title="What is Steam Sterilization?"
                subtitle=""
                align="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  Steam sterilization (autoclaving) uses high-pressure saturated steam at 
                  temperatures of 121°C to 134°C to achieve sterilization. It is the oldest, 
                  safest, and most cost-effective sterilization method available.
                </p>
                <p className="leading-relaxed mb-6">
                  The process works by denaturing proteins and destroying microorganisms 
                  through the latent heat released when steam contacts cooler surfaces. 
                  It leaves no toxic residues and is environmentally friendly.
                </p>
                <p className="leading-relaxed">
                  Our steam sterilization facility operates validated cycles for a wide 
                  range of applications, from surgical instrument sets to laboratory equipment.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cycle Types */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Cycle Types"
            title="Available Steam Cycles"
            subtitle="We offer multiple validated cycle types to meet different sterilization requirements."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {cycleTypes.map((cycle, index) => (
              <motion.div
                key={cycle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{cycle.title}</h3>
                <p className="text-muted-foreground mb-4">{cycle.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Thermometer className="h-4 w-4" />
                  {cycle.temp}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Process"
            title="Sterilization Process"
            subtitle="Our validated 6-step process ensures complete sterility and regulatory compliance."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Materials & Compliance */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                badge="Compatibility"
                title="Compatible Materials"
                subtitle="Steam sterilization is suitable for heat-resistant materials."
                align="left"
              />
              <div className="grid grid-cols-2 gap-3">
                {compatibleMaterials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                badge="Compliance"
                title="Regulatory Standards"
                subtitle="Our steam sterilization meets all applicable standards."
                align="left"
              />
              <div className="space-y-4">
                {compliance.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <Shield className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Steam Sterilization Services?"
        subtitle="Contact us to discuss your requirements and receive a customized quote."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Download Technical Datasheet", href: "/contact", download: true }}
        variant="default"
      />
    </Layout>
  );
}
