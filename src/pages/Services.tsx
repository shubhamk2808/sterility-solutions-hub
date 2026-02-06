import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceComparisonTool } from "@/components/ui/ServiceComparisonTool";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wind, Flame, Radiation, Shield, Clock, FileCheck, Microscope, Award, ArrowRight, CheckCircle } from "lucide-react";

import eoImage from "@/assets/services/eo-sterilization.jpg";
import steamImage from "@/assets/services/steam-sterilization.jpg";
import gammaImage from "@/assets/services/gamma-irradiation.jpg";

const services = [
  {
    icon: Wind,
    title: "EO Sterilization",
    description: "Ethylene Oxide sterilization for heat and moisture-sensitive medical devices. Ideal for complex geometries and electronic components.",
    features: [
      "Low-temperature processing (37-63°C)",
      "Compatible with most polymers",
      "Validated cycle development",
      "Complete residual testing"
    ],
    href: "/services/eo-sterilization",
    image: eoImage,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
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
    href: "/services/steam-sterilization",
    image: steamImage,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
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
    href: "/services/gamma-irradiation",
    image: gammaImage,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30"
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
      <PageHero
        badge="Our Services"
        title={<>Comprehensive{" "}<span className="text-gradient">Sterilization Services</span></>}
        description="From ethylene oxide to gamma irradiation, we offer a full range of validated sterilization services to meet your regulatory requirements and product specifications."
      />

      {/* Services Grid - Enhanced with images */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Sterilization Methods"
            title="Choose the Right Solution"
            subtitle="Each sterilization method offers unique advantages. Our experts will help you select the optimal process for your products."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={service.href} className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Tool */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Compare Methods"
            title="Side-by-Side Comparison"
            subtitle="Compare sterilization technologies to find the best fit for your products."
          />
          <ServiceComparisonTool maxFeatures={8} />
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined approach from initial consultation to final release."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="relative bg-card p-6 rounded-xl border border-border">
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Why Choose Us"
            title="Our Capabilities"
            subtitle="Industry-leading expertise and infrastructure to support your sterilization needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cap.label}</h4>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 13485</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 11135</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <span className="font-medium">ISO 17665</span>
            </div>
            <div className="w-px h-8 bg-primary-foreground/30 hidden sm:block" />
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
