import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Shield, Clock, Headphones, FileCheck, CheckCircle, Zap, Building2, Factory, FlaskConical, Microscope, Wind, Flame, Radiation, Award, Users, Globe, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { TrustSection, ComplianceBanner } from "@/components/ui/TrustSection";
import { ProcessTimeline, eoSterilizationSteps } from "@/components/ui/ProcessTimeline";
import { GSAPSection, GSAPWrapper } from "@/components/ui/GSAPWrapper";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-medical-facility.jpg";
import chemicalIndicators from "@/assets/products/chemical-indicators.jpg";
import biologicalIndicators from "@/assets/products/biological-indicators.jpg";
import bowieDick from "@/assets/products/bowie-dick.jpg";
import accessories from "@/assets/products/accessories.jpg";

gsap.registerPlugin(ScrollTrigger);

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

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Cycles Completed" },
  { value: 500, suffix: "+", label: "Products Validated" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Hero animation sequence - calm, professional entrance
    tl.fromTo(
      hero.querySelector("[data-hero-badge]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      hero.querySelector("[data-hero-title]"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )
    .fromTo(
      hero.querySelector("[data-hero-description]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(
      hero.querySelector("[data-hero-cta]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(
      hero.querySelector("[data-hero-trust]"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Stats counter animation
  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counters = container.querySelectorAll("[data-stat-value]");

    if (prefersReducedMotion) {
      counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));
        const suffix = counter.getAttribute("data-suffix") || "";
        (counter as HTMLElement).textContent = target.toLocaleString() + suffix;
      });
      return;
    }

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-target"));
      const suffix = counter.getAttribute("data-suffix") || "";
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          (counter as HTMLElement).textContent = Math.floor(obj.value).toLocaleString() + suffix;
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section - Clean, medical, authoritative */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden bg-foreground">
        {/* Background image with subtle overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical sterilization facility" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/70" />
        </div>
        
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div data-hero-badge className="mb-8 opacity-0">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-background/20">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm text-background/90 font-medium">ISO 13485 Certified | FDA Registered</span>
              </div>
            </div>
            
            {/* Main headline */}
            <h1 
              data-hero-title 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 opacity-0"
            >
              Certified Medical{" "}
              <span className="text-secondary">Sterilization</span>{" "}
              Services
            </h1>
            
            {/* Description */}
            <p 
              data-hero-description 
              className="text-lg text-background/80 leading-relaxed mb-8 max-w-xl opacity-0"
            >
              Ensuring sterility assurance and regulatory compliance for healthcare organizations 
              through validated sterilization processes and quality monitoring products.
            </p>
            
            {/* CTA buttons */}
            <div data-hero-cta className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0">
              <Button asChild size="lg" className="text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contact" className="flex items-center gap-2">
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base border-background/30 text-background hover:bg-background/10"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call: +1 (234) 567-890
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div data-hero-trust className="flex flex-wrap gap-6 opacity-0">
              {[
                { icon: Award, label: "ISO Certified" },
                { icon: Users, label: "500+ Clients" },
                { icon: Globe, label: "Global Service" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-background/70">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <ComplianceBanner />

      {/* Services Section */}
      <GSAPSection className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sterilization Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading sterilization services tailored to your specific requirements, 
              backed by ISO certifications and regulatory compliance.
            </p>
          </div>
          
          <GSAPWrapper animation="stagger" staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-card rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-medical"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* Process Visualization Section */}
      <GSAPSection className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Sterilization Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our methodical, validated approach ensures complete sterility and regulatory compliance at every step.
            </p>
          </div>

          <ProcessTimeline steps={eoSterilizationSteps} />
        </div>
      </GSAPSection>

      {/* Why Choose Us */}
      <GSAPSection className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Why BiosteriMed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Trusted Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine advanced technology with rigorous quality standards to deliver reliable sterilization solutions.
            </p>
          </div>
          
          <GSAPWrapper animation="stagger" staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group bg-card rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* Products Section */}
      <GSAPSection className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Monitoring Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete range of chemical and biological indicators, test packs, and accessories for sterility assurance.
            </p>
          </div>
          
          <GSAPWrapper animation="stagger" staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.href}
                className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {product.productCount} Products
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    View Products
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* Statistics */}
      <section ref={statsRef} className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <GSAPWrapper animation="stagger" staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <span 
                    data-stat-value 
                    data-target={stat.value} 
                    data-suffix={stat.suffix}
                  >
                    0
                  </span>
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </GSAPWrapper>
        </div>
      </section>

      {/* Certifications & Trust */}
      <GSAPSection className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quality & Compliance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facilities and processes are certified to the highest international standards.
            </p>
          </div>

          <TrustSection />
        </div>
      </GSAPSection>

      {/* Industries */}
      <GSAPSection className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare organizations worldwide for mission-critical sterilization needs.
            </p>
          </div>
          
          <GSAPWrapper animation="stagger" staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                to={industry.href}
                className="group flex flex-col items-center text-center p-6 lg:p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
              </Link>
            ))}
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <GSAPWrapper animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Ensure Compliance & Safety?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact our team today to discuss your sterilization requirements and receive a customized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/resources">
                  Download Brochure
                </Link>
              </Button>
            </div>
          </GSAPWrapper>
        </div>
      </section>
    </Layout>
  );
}
