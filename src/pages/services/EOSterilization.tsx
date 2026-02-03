import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { ProcessVisualization, eoProcessSteps } from "@/components/ui/ProcessVisualization";
import { FAQSection, eoFAQs } from "@/components/ui/FAQSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Zap, CheckCircle, FileText, Download, ArrowRight, 
  Shield, Beaker, Package, FileCheck 
} from "lucide-react";

import eoImage from "@/assets/services/eo-sterilization.jpg";

const benefits = [
  "Low-temperature processing (37-63°C) - ideal for heat-sensitive materials",
  "Excellent material compatibility with most polymers and plastics",
  "Superior penetration for complex device geometries",
  "Validated cycles for electronics and battery-powered devices",
  "Complete residual testing and aeration protocols",
  "Full regulatory compliance (ISO 11135, FDA 21 CFR Part 820)"
];

const specifications = [
  { label: "Operating Temperature", value: "37-63°C" },
  { label: "EO Concentration", value: "450-1200 mg/L" },
  { label: "Relative Humidity", value: "40-80% RH" },
  { label: "Cycle Duration", value: "2-6 hours" },
  { label: "Aeration Time", value: "8-24 hours" },
  { label: "Chamber Capacity", value: "Up to 30m³" }
];

const compatibleMaterials = [
  "Polyethylene (PE)", "Polypropylene (PP)", "PVC", "Polycarbonate",
  "ABS Plastics", "Silicone", "Nylon", "Polyurethane",
  "Paper/Cardboard", "Tyvek®", "Electronics", "Batteries"
];

export default function EOSterilization() {
  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={eoImage} alt="EO Sterilization Facility" className="w-full h-full object-cover" />
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
                  <Zap className="w-7 h-7 text-background" />
                </div>
                <span className="px-3 py-1 bg-background/20 backdrop-blur text-background rounded-full text-sm font-medium">
                  ISO 11135 Compliant
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                Ethylene Oxide (EO){" "}
                <span className="text-secondary">Sterilization</span>
              </h1>
              <p className="text-lg text-background/80 leading-relaxed mb-8 max-w-xl">
                The preferred method for sterilizing heat and moisture-sensitive medical devices. 
                Our validated EO processes ensure complete sterility while preserving product integrity 
                and functionality.
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
                <Shield className="w-5 h-5 text-primary" />
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

      {/* Process Visualization */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="The Process"
            title="How EO Sterilization Works"
            subtitle="A carefully controlled multi-step process ensuring complete sterility and product safety."
          />
          <ProcessVisualization title="EO Sterilization Process" steps={eoProcessSteps} />
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Technical Data"
                title="Process Specifications"
                subtitle="Our EO sterilization operates within strict validated parameters."
                align="left"
              />
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <AnimatedCard key={index} delay={index * 0.05} className="bg-surface p-4 rounded-xl border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="text-lg font-semibold text-primary">{spec.value}</div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                badge="Compatibility"
                title="Compatible Materials"
                subtitle="EO sterilization is suitable for a wide range of materials."
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
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {material}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Documentation"
            title="What You Receive"
            subtitle="Complete documentation package for regulatory compliance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Certificate of Sterility", desc: "Official sterility certification for each batch" },
              { icon: FileCheck, title: "Batch Records", desc: "Complete processing parameters and data" },
              { icon: Beaker, title: "BI/CI Test Results", desc: "Biological and chemical indicator reports" },
              { icon: Package, title: "Residual Reports", desc: "EO residual levels per ISO 10993-7" }
            ].map((doc, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-card p-6 rounded-xl text-center border border-border hover:border-primary/30 hover:shadow-medical transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <doc.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground">{doc.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about EO sterilization services."
          />
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={eoFAQs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us for a consultation and quote for your EO sterilization needs."
        primaryCTA={{ label: "Request Quote", href: "/contact" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
      />
    </Layout>
  );
}
