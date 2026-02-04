import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Headphones, FileCheck, CheckCircle, Zap, Building2, Factory, FlaskConical, Microscope, Wind, Flame, Radiation, Award, Users, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { TrustBadges } from "@/components/ui/TrustBadge";
import { CTASection } from "@/components/ui/CTASection";
import { SterilizationSelector } from "@/components/ui/SterilizationSelector";
import { TestimonialsSection } from "@/components/ui/TestimonialCard";
import { ServiceComparisonTool } from "@/components/ui/ServiceComparisonTool";
import { ClientLogosSection, LogoMarquee } from "@/components/ui/ClientLogosSection";
import { GlobalSearch } from "@/components/ui/GlobalSearch";

import heroImage from "@/assets/hero-sterilization-lab.jpg";
import eoImage from "@/assets/services/eo-sterilization.jpg";
import steamImage from "@/assets/services/steam-sterilization.jpg";
import gammaImage from "@/assets/services/gamma-irradiation.jpg";
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
    image: eoImage,
  },
  {
    icon: Flame,
    title: "Steam Sterilization",
    description: "High-pressure saturated steam autoclave sterilization for surgical instruments and reusable medical equipment.",
    features: ["Rapid turnaround", "Cost effective", "Validated cycles"],
    href: "/services/steam-sterilization",
    image: steamImage,
  },
  {
    icon: Radiation,
    title: "Gamma Irradiation",
    description: "Gamma ray sterilization for bulk processing of single-use medical devices and pharmaceutical products.",
    features: ["High penetration", "No residues", "Bulk processing"],
    href: "/services/gamma-irradiation",
    image: gammaImage,
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
  { icon: Building2, title: "Hospitals & Clinics", href: "/industries", description: "CSSD and SPD solutions" },
  { icon: Factory, title: "Device Manufacturers", href: "/industries", description: "Contract sterilization" },
  { icon: FlaskConical, title: "Pharmaceuticals", href: "/industries", description: "Pharmaceutical-grade processing" },
  { icon: Microscope, title: "Research Labs", href: "/industries", description: "Laboratory sterilization" },
];

const clientLogos = [
  { name: "ISO 13485", icon: Award },
  { name: "FDA Registered", icon: Shield },
  { name: "500+ Clients", icon: Users },
  { name: "Global Reach", icon: Globe },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - Image-First Design */}
      <section className="relative min-h-[85vh] flex flex-col overflow-hidden">
        {/* Full Hero Image - Visible and Prominent */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional medical sterilization facility with advanced equipment" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Subtle gradient overlay - less blocking */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-transparent to-transparent lg:from-foreground/60" />
        </div>
        
        {/* Content positioned at bottom-left */}
        <div className="container-custom relative z-10 mt-auto pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4">
              <TrustBadges variant="compact" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-background mb-4">
              Certified Medical{" "}
              <span className="text-gradient">Sterilization</span>{" "}
              Services & Products
            </h1>
            
            <p className="text-base md:text-lg text-background/90 mb-6 max-w-xl">
              Ensuring sterility assurance and regulatory compliance for healthcare organizations 
              through certified sterilization services and validated products worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-background/40 text-background hover:bg-background/10">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Search bar */}
            <div className="hidden md:block max-w-md">
              <GlobalSearch variant="standalone" />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar at Bottom - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 bg-foreground/80 backdrop-blur-md border-t border-background/10"
        >
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "10M+", label: "Products Sterilized" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-background">{stat.value}</div>
                  <div className="text-xs md:text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Logo Marquee - Client Trust */}
      <LogoMarquee />

      {/* Services Section - Enhanced with images */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Sterilization Solutions"
            subtitle="Industry-leading sterilization services tailored to your specific requirements, backed by ISO certifications and regulatory compliance."
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Button asChild size="lg">
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Comparison Tool - New Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Compare Methods"
            title="Find the Right Sterilization Method"
            subtitle="Compare sterilization technologies side-by-side to determine the best solution for your products and materials."
          />
          <ServiceComparisonTool maxFeatures={6} />
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
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

      {/* Sterilization Method Selector - Interactive Section */}
      <section className="section-padding bg-gradient-to-b from-surface to-background">
        <div className="container-custom">
          <SectionHeader
            badge="Find Your Solution"
            title="Sterilization Method Selector"
            subtitle="Answer a few questions about your product to find the optimal sterilization method for your needs."
          />
          <SterilizationSelector />
        </div>
      </section>

      {/* Why Choose Us - Redesigned with icons */}
      <section className="section-padding bg-surface">
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
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-medical transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Certifications Section */}
      <ClientLogosSection variant="certifications" />

      {/* Statistics - Enhanced */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Healthcare Leaders Worldwide</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped thousands of organizations achieve and maintain sterility assurance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={25} suffix="+" label="Years Experience" />
            <StatCounter value={10000} suffix="+" label="Cycles Completed" />
            <StatCounter value={500} suffix="+" label="Products Validated" />
            <StatCounter value={99} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Industries - Enhanced with hover effects */}
      <section className="section-padding bg-background">
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
                  className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-medical transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
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
        secondaryCTA={{ label: "Download Brochure", href: "/resources" }}
        variant="gradient"
      />
    </Layout>
  );
}
