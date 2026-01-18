import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, Shield, Clock, Headphones, FileCheck, CheckCircle, Zap, 
  Building2, Factory, FlaskConical, Microscope, Wind, Flame, Radiation,
  Play, ChevronRight
} from "lucide-react";
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
  { icon: Shield, title: "Regulatory Compliance", description: "ISO 13485, ISO 11135, FDA registered facilities ensuring complete compliance" },
  { icon: Clock, title: "Fast Turnaround", description: "24-72 hour processing for standard orders with express options available" },
  { icon: Zap, title: "Advanced Technology", description: "State-of-the-art sterilization equipment and monitoring systems" },
  { icon: Headphones, title: "Expert Support", description: "24/7 technical assistance from sterilization specialists" },
  { icon: FileCheck, title: "Complete Documentation", description: "Full traceability, batch records, and certificates of sterility" },
  { icon: CheckCircle, title: "Quality Assurance", description: "Multi-stage validation protocols and continuous monitoring" },
];

const industries = [
  { icon: Building2, title: "Hospitals & Clinics", description: "CSSD sterilization support", href: "/industries" },
  { icon: Factory, title: "Device Manufacturers", description: "OEM sterilization services", href: "/industries" },
  { icon: FlaskConical, title: "Pharmaceuticals", description: "GMP compliant processing", href: "/industries" },
  { icon: Microscope, title: "Research Labs", description: "Scientific sterilization", href: "/industries" },
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img 
            src={heroImage} 
            alt="Medical sterilization facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="container-custom relative z-10 pt-32 pb-20"
          style={{ y: textY, opacity: heroOpacity }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8"
              >
                <Shield className="h-4 w-4" />
                <span>ISO 13485 • ISO 11135 • FDA Registered</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-8">
                Certified Medical{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-white via-secondary-foreground to-white bg-clip-text text-transparent">
                    Sterilization
                  </span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/40 -skew-x-3"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>{" "}
                <br />Services & Products
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Ensuring sterility assurance and regulatory compliance for healthcare organizations 
                through certified sterilization services and validated products worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl shadow-black/20"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Request a Quote <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link to="/services" className="flex items-center gap-2">
                    <Play className="h-4 w-4" /> View Our Services
                  </Link>
                </Button>
              </div>

              {/* Quick Stats in Hero */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "10K+", label: "Cycles Completed" },
                  { value: "99%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-white">
                    <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-surface border-b border-border">
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

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
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

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/products" className="flex items-center gap-2">
                Browse All Products <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container-custom relative">
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
                className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={25} suffix="+" label="Years Experience" />
            <StatCounter value={10000} suffix="+" label="Cycles Completed" />
            <StatCounter value={500} suffix="+" label="Products Validated" />
            <StatCounter value={99} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Industries - Enhanced */}
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
                  className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{industry.title}</h3>
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
        secondaryCTA={{ label: "Download Brochure", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
