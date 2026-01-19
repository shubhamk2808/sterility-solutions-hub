import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { motion } from "framer-motion";
import { Zap, Flame, Radiation, Shield, Clock, FileCheck, Microscope, Award } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "EO Sterilization",
    description: "Ethylene Oxide sterilization for heat and moisture-sensitive medical devices. Ideal for complex geometries and electronic components.",
    features: [
      "Low-temperature processing (37-63°C)",
      "Compatible with most polymers",
      "Validated cycle development",
      "Complete residual testing"
    ],
    href: "/services/eo-sterilization"
  },
  {
    icon: Flame,
    title: "Steam Sterilization",
    description: "Moist heat sterilization using saturated steam under pressure. The gold standard for heat-resistant medical devices and surgical instruments.",
    features: [
      "Rapid cycle times",
      "No chemical residuals",
      "Environmentally friendly",
      "Cost-effective processing"
    ],
    href: "/services/steam-sterilization"
  },
  {
    icon: Radiation,
    title: "Gamma Irradiation",
    description: "High-energy gamma radiation for terminal sterilization. Excellent penetration for dense packaging and sealed products.",
    features: [
      "High penetration capability",
      "No temperature increase",
      "Suitable for final packaging",
      "Dose mapping validation"
    ],
    href: "/services/gamma-irradiation"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We assess your product requirements, materials, and regulatory needs."
  },
  {
    step: "02",
    title: "Validation",
    description: "Development of validated sterilization cycles specific to your products."
  },
  {
    step: "03",
    title: "Processing",
    description: "Execution of sterilization with full environmental monitoring."
  },
  {
    step: "04",
    title: "Quality Release",
    description: "Complete documentation and certificate of sterility issued."
  }
];

const capabilities = [
  { icon: Shield, label: "ISO 13485 Certified", description: "Quality management for medical devices" },
  { icon: Clock, label: "Fast Turnaround", description: "Standard 5-7 day processing" },
  { icon: FileCheck, label: "Full Documentation", description: "Complete batch records and certificates" },
  { icon: Microscope, label: "In-House Testing", description: "BI/CI testing and validation" }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-medical-blue/10 text-medical-blue rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-gradient">Sterilization Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ethylene oxide to gamma irradiation, we offer a full range of validated sterilization 
              services to meet your regulatory requirements and product specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Sterilization Methods"
            title="Choose the Right Solution"
            subtitle="Each sterilization method offers unique advantages. Our experts will help you select the optimal process for your products."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined approach from initial consultation to final release."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="relative bg-white p-6 rounded-xl">
                <div className="text-5xl font-bold text-medical-blue/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-medical-blue text-white rounded-lg flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-medical-blue/30" />
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Why Choose Us"
            title="Our Capabilities"
            subtitle="Industry-leading expertise and infrastructure to support your sterilization needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-14 h-14 bg-medical-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-7 h-7 text-medical-blue" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cap.label}</h4>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-12 bg-gradient-to-r from-medical-blue to-medical-teal">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 13485</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 11135</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 17665</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">FDA Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Help Choosing?"
        subtitle="Our technical team can assess your products and recommend the optimal sterilization method."
        primaryCTA={{ label: "Request Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Quality Standards", href: "/quality" }}
      />
    </Layout>
  );
}
