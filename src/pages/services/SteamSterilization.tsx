import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Flame, CheckCircle, FileText, Download, ArrowRight, 
  Thermometer, Clock, Shield, Beaker, Droplets, FileCheck, Leaf
} from "lucide-react";

const benefits = [
  "Rapid cycle times - most processes complete in 15-45 minutes",
  "No chemical residuals - safe for patient contact immediately",
  "Environmentally friendly - uses only water and heat",
  "Cost-effective processing for compatible materials",
  "Well-established validation protocols (ISO 17665)",
  "Ideal for surgical instruments and heat-resistant devices"
];

const processSteps = [
  {
    step: 1,
    title: "Loading & Conditioning",
    description: "Products loaded and chamber air removed via vacuum cycles.",
    icon: Thermometer
  },
  {
    step: 2,
    title: "Steam Exposure",
    description: "Saturated steam at 121-134°C penetrates all surfaces.",
    icon: Droplets
  },
  {
    step: 3,
    title: "Sterilization Hold",
    description: "Temperature maintained for validated exposure time.",
    icon: Clock
  },
  {
    step: 4,
    title: "Drying Phase",
    description: "Vacuum drying removes moisture from products.",
    icon: Flame
  },
  {
    step: 5,
    title: "Quality Release",
    description: "BI testing and documentation completed.",
    icon: FileCheck
  }
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
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-500/10 via-background to-medical-teal/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/services" className="inline-flex items-center text-medical-blue hover:underline mb-4">
                ← Back to Services
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Flame className="w-7 h-7 text-orange-500" />
                </div>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium">
                  ISO 17665 Compliant
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Steam{" "}
                <span className="text-gradient">Sterilization</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The gold standard for sterilizing heat-resistant medical devices and surgical instruments. 
                Steam sterilization offers rapid, effective, and environmentally friendly processing with 
                no chemical residuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-4 h-4" /> Download Datasheet
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-500" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
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

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="The Process"
            title="How Steam Sterilization Works"
            subtitle="Moist heat under pressure provides rapid and reliable sterilization."
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-sm text-orange-500 font-medium mb-2">Step {step.step}</div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle Types */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Cycle Options"
            title="Available Cycle Types"
            subtitle="Different cycles optimized for specific product requirements."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cycleTypes.map((cycle, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl">
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
      <section className="section-padding bg-white">
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
                  <AnimatedCard key={index} delay={index * 0.05} className="bg-slate-50 p-4 rounded-lg">
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
                    className="px-4 py-2 bg-slate-50 border border-border rounded-full text-sm text-foreground hover:border-orange-500 hover:text-orange-500 transition-colors"
                  >
                    {material}
                  </motion.span>
                ))}
              </div>
            </div>
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
