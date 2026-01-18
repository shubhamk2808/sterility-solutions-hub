import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wind, Flame, Radiation, ArrowRight, CheckCircle, Shield, Clock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const services = [
  {
    icon: Wind,
    title: "EO Sterilization",
    description: "Ethylene Oxide sterilization is ideal for heat and moisture-sensitive medical devices. Our validated EO processes ensure complete sterility while maintaining material integrity.",
    features: [
      "Low temperature processing (37-63°C)",
      "Compatible with plastics and electronics",
      "FDA 21 CFR Part 820 compliant",
      "Complete aeration for residue removal",
      "Validated cycle parameters",
    ],
    href: "/services/eo-sterilization",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Flame,
    title: "Steam Sterilization",
    description: "High-pressure saturated steam autoclaving for surgical instruments, reusable medical equipment, and heat-resistant materials with rapid turnaround times.",
    features: [
      "Rapid 15-30 minute cycles",
      "Cost-effective solution",
      "No chemical residues",
      "ISO 17665 validated processes",
      "Ideal for surgical instruments",
    ],
    href: "/services/steam-sterilization",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Radiation,
    title: "Gamma Irradiation",
    description: "Gamma ray sterilization for bulk processing of single-use medical devices and pharmaceutical products with deep penetration and no residues.",
    features: [
      "Deep penetration capability",
      "No chemical residues",
      "Bulk processing efficiency",
      "ISO 11137 compliant",
      "Pharmaceutical grade",
    ],
    href: "/services/gamma-irradiation",
    color: "from-purple-500 to-pink-500",
  },
];

const processSteps = [
  { step: 1, title: "Consultation", description: "We assess your sterilization requirements and recommend the optimal method." },
  { step: 2, title: "Validation", description: "Develop and validate cycle parameters specific to your products." },
  { step: 3, title: "Processing", description: "Execute sterilization cycles with continuous monitoring and quality control." },
  { step: 4, title: "Documentation", description: "Provide complete batch records and certificates of sterility." },
];

const benefits = [
  { icon: Shield, title: "Regulatory Compliance", description: "All processes meet FDA, ISO, and CE requirements" },
  { icon: Clock, title: "Fast Turnaround", description: "24-72 hour processing for standard orders" },
  { icon: FileCheck, title: "Full Documentation", description: "Complete traceability and audit-ready records" },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Sterilization Solutions
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Industry-leading sterilization services tailored to your specific requirements, 
              backed by ISO certifications and complete regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="rounded-full">
                    <Link to={service.href} className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${service.color} opacity-10`} />
                  <div className="absolute inset-4 bg-card rounded-xl border border-border shadow-lg p-8">
                    <h3 className="font-semibold text-foreground mb-6">Key Benefits</h3>
                    <div className="space-y-4">
                      {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{benefit.title}</div>
                            <div className="text-sm text-muted-foreground">{benefit.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined process designed for efficiency, quality, and compliance."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step.toString().padStart(2, '0')}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-border translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Custom Sterilization Solutions?"
        subtitle="Our experts will help you select the right sterilization method for your products."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </Layout>
  );
}
