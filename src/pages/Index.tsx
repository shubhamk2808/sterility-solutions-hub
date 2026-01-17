import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Headphones, FileCheck, CheckCircle, Zap, Building2, Factory, FlaskConical, Microscope, Wind, Flame, Radiation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { TrustBadges } from "@/components/ui/TrustBadge";
import { CTASection } from "@/components/ui/CTASection";

import heroImage from "@/assets/hero-medical-facility.jpg";
import chemicalIndicators from "@/assets/products/chemical-indicators.jpg";
import biologicalIndicators from "@/assets/products/biological-indicators.jpg";
import bowieDick from "@/assets/products/bowie-dick.jpg";
import accessories from "@/assets/products/accessories.jpg";

const services = [
  {
    icon: Wind,
    title: "EO Sterilization",
    description: "Ethylene Oxide sterilization for heat and moisture-sensitive medical devices with complete regulatory compliance.",
    features: ["Low temperature process", "Material compatibility", "FDA compliant"],
    href: "/services/eo-sterilization",
  },
  {
    icon: Flame,
    title: "Steam Sterilization",
    description: "High-pressure saturated steam autoclave sterilization for surgical instruments and reusable medical equipment.",
    features: ["Rapid turnaround", "Cost effective", "Validated cycles"],
    href: "/services/steam-sterilization",
  },
  {
    icon: Radiation,
    title: "Gamma Irradiation",
    description: "Gamma ray sterilization for bulk processing of single-use medical devices and pharmaceutical products.",
    features: ["High penetration", "No residues", "Bulk processing"],
    href: "/services/gamma-irradiation",
  },
];

const products = [
  {
    title: "Chemical Indicators",
    description: "Visual confirmation of sterilization exposure with color-changing indicators.",
    image: chemicalIndicators,
    href: "/products/chemical-indicators",
    productCount: 24,
  },
  {
    title: "Biological Indicators",
    description: "Spore-based sterility verification for all sterilization methods.",
    image: biologicalIndicators,
    href: "/products/biological-indicators",
    productCount: 18,
  },
  {
    title: "Bowie-Dick Test Packs",
    description: "Steam penetration and air removal testing for autoclaves.",
    image: bowieDick,
    href: "/products/bowie-dick",
    productCount: 8,
  },
  {
    title: "Accessories",
    description: "Complete range of sterilization support products and supplies.",
    image: accessories,
    href: "/products/accessories",
    productCount: 32,
  },
];

const whyChooseUs = [
  { icon: Shield, title: "Regulatory Compliance", description: "ISO 13485, ISO 11135, FDA registered facilities" },
  { icon: Clock, title: "Fast Turnaround", description: "24-72 hour processing for standard orders" },
  { icon: Zap, title: "Advanced Technology", description: "State-of-the-art sterilization equipment" },
  { icon: Headphones, title: "Expert Support", description: "24/7 technical assistance from specialists" },
  { icon: FileCheck, title: "Complete Documentation", description: "Full traceability and certificates of sterility" },
  { icon: CheckCircle, title: "Quality Assurance", description: "Multi-stage validation and testing protocols" },
];

const industries = [
  { icon: Building2, title: "Hospitals & Clinics", href: "/industries" },
  { icon: Factory, title: "Device Manufacturers", href: "/industries" },
  { icon: FlaskConical, title: "Pharmaceuticals", href: "/industries" },
  { icon: Microscope, title: "Research Labs", href: "/industries" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Medical sterilization facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <TrustBadges variant="compact" />
              </div>
              
              <h1 className="text-display-1 md:text-[4.5rem] leading-tight text-background mb-6">
                Certified Medical{" "}
                <span className="text-gradient">Sterilization</span>{" "}
                Services & Products
              </h1>
              
              <p className="text-body-lg text-background/80 mb-8 max-w-xl">
                Ensuring sterility assurance and regulatory compliance for healthcare organizations 
                through certified sterilization services and validated products worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact" className="flex items-center gap-2">
                    Request a Quote <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base border-background/30 text-background hover:bg-background/10">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container-custom">
          <TrustBadges />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Sterilization Solutions"
            subtitle="Industry-leading sterilization services tailored to your specific requirements, backed by ISO certifications and regulatory compliance."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Products"
            title="Sterilization Monitoring Products"
            subtitle="Complete range of chemical and biological indicators, test packs, and accessories for sterility assurance."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Why BiosteriMed"
            title="Your Trusted Sterilization Partner"
            subtitle="We combine advanced technology with rigorous quality standards to deliver reliable sterilization solutions."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding gradient-medical text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={25} suffix="+" label="Years Experience" />
            <StatCounter value={10000} suffix="+" label="Cycles Completed" />
            <StatCounter value={500} suffix="+" label="Products Validated" />
            <StatCounter value={99} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Industries"
            title="Industries We Serve"
            subtitle="Trusted by healthcare organizations worldwide for mission-critical sterilization needs."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={industry.href}
                  className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl gradient-medical flex items-center justify-center mb-4">
                    <industry.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{industry.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Ensure Compliance & Safety?"
        subtitle="Contact our team today to discuss your sterilization requirements and receive a customized quote."
        primaryCTA={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ label: "Download Brochure", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
