import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { ProcessVisualization, steamProcessSteps } from "@/components/ui/ProcessVisualization";
import { FAQSection, steamFAQs } from "@/components/ui/FAQSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Flame, CheckCircle, Download, ArrowRight, 
  Clock, Shield, Leaf
} from "lucide-react";

import steamImage from "@/assets/services/steam-sterilization.jpg";

const benefits = [
  "Rapid cycle times - most processes complete in 15-45 minutes",
  "No chemical residuals - safe for patient contact immediately",
  "Environmentally friendly - uses only water and heat",
  "Cost-effective processing for compatible materials",
  "Well-established validation protocols (ISO 17665)",
  "Ideal for surgical instruments and heat-resistant devices"
];

const specifications = [
  { label: "Temperature Range", value: "121-134°C" },
  { label: "Pressure", value: "15-30 PSI" },
  { label: "Exposure Time", value: "3-30 minutes" },
  { label: "Total Cycle Time", value: "15-90 minutes" },
  { label: "Chamber Capacity", value: "Up to 20m³" },
  { label: "Vacuum Capability", value: "Pre & Post Vacuum" }
];

const compatibleMaterials = [
  "Stainless Steel", "Titanium", "Glass", "Silicone (high-temp)",
  "Surgical Instruments", "Textile Wraps", "Some Plastics", "Rubber",
  "Ceramic", "Aluminum", "Brass", "Chrome-plated Items"
];

const cycleTypes = [
  { name: "Gravity Displacement", time: "30-60 min", temp: "121°C", description: "For unwrapped instruments and liquids" },
  { name: "Pre-Vacuum (Prevac)", time: "15-30 min", temp: "132-134°C", description: "For wrapped goods and porous loads" },
  { name: "Flash Sterilization", time: "3-10 min", temp: "132°C", description: "For immediate-use unwrapped items" },
  { name: "Liquid Cycle", time: "Variable", temp: "121°C", description: "For liquids in vented containers" }
];

export default function SteamSterilization() {
  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={steamImage} alt="Steam Sterilization Facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/services" className="inline-flex items-center text-background/80 hover:text-background mb-4">
                ← Back to Services
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-background/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Flame className="w-7 h-7 text-background" />
                </div>
                <span className="px-3 py-1 bg-background/20 backdrop-blur text-background rounded-full text-sm font-medium">
                  ISO 17665 Compliant
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                Steam{" "}
                <span className="text-secondary">Sterilization</span>
              </h1>
              <p className="text-lg text-background/80 leading-relaxed mb-8 max-w-xl">
                The gold standard for sterilizing heat-resistant medical devices and surgical instruments. 
                Steam sterilization offers rapid, effective, and environmentally friendly processing with 
                no chemical residuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                  <Download className="mr-2 w-4 h-4" /> Download Datasheet
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/95 backdrop-blur rounded-2xl shadow-xl p-8 border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5 text-orange-500" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eco Badge */}
      <section className="py-6 bg-green-50 border-y border-green-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-green-700">
            <Leaf className="w-5 h-5" />
            <span className="font-medium">Environmentally Friendly - Zero Chemical Emissions</span>
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="The Process"
            title="How Steam Sterilization Works"
            subtitle="Moist heat under pressure provides rapid and reliable sterilization."
          />
          <ProcessVisualization title="Steam Sterilization Process" steps={steamProcessSteps} />
        </div>
      </section>

      {/* Cycle Types */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Cycle Options"
            title="Available Cycle Types"
            subtitle="Different cycles optimized for specific product requirements."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cycleTypes.map((cycle, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-card p-6 rounded-xl border border-border hover:border-orange-500/30 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-foreground">{cycle.name}</h4>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm">
                    {cycle.temp}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{cycle.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Typical Duration: {cycle.time}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Materials */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Technical Data"
                title="Process Specifications"
                align="left"
              />
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <AnimatedCard key={index} delay={index * 0.05} className="bg-card p-4 rounded-xl border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="text-lg font-semibold text-orange-500">{spec.value}</div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                badge="Compatibility"
                title="Suitable Materials"
                align="left"
              />
              <div className="flex flex-wrap gap-2">
                {compatibleMaterials.map((material, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-orange-500 hover:text-orange-500 transition-colors"
                  >
                    {material}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about steam sterilization services."
          />
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={steamFAQs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Fast & Effective Sterilization"
        subtitle="Contact us for rapid turnaround steam sterilization services."
        primaryCTA={{ label: "Request Quote", href: "/contact" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
      />
    </Layout>
  );
}
