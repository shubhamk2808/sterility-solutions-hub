import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/ui/CTASection";
import { GSAPSection, GSAPWrapper } from "@/components/ui/GSAPWrapper";
import { TrustSection } from "@/components/ui/TrustSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Heart, Shield, Users, Lightbulb, Award, Building, Calendar, CheckCircle } from "lucide-react";
import aboutFacility from "@/assets/about-facility.jpg";

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "Unwavering commitment to the highest standards in sterilization and quality assurance."
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "Building long-term relationships through responsive service and technical expertise."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously advancing our processes and technologies to meet evolving industry needs."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Operating with transparency, honesty, and ethical practices in every interaction."
  },
  {
    icon: Award,
    title: "Compliance Focus",
    description: "Rigorous adherence to international standards and regulatory requirements."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail in every sterilization cycle and validation process."
  }
];

const milestones = [
  { year: "2005", title: "Company Founded", description: "BiosteriMed established with a vision to provide world-class sterilization services." },
  { year: "2008", title: "ISO 13485 Certified", description: "Achieved ISO 13485 certification for medical device quality management." },
  { year: "2012", title: "Facility Expansion", description: "Expanded operations with new state-of-the-art sterilization chambers." },
  { year: "2015", title: "FDA Registration", description: "Registered with the U.S. FDA for medical device sterilization services." },
  { year: "2018", title: "Global Expansion", description: "Extended services to international markets across Europe and Asia." },
  { year: "2023", title: "Advanced Technology", description: "Implemented next-generation monitoring and validation systems." }
];

const facilities = [
  { label: "Clean Room Classification", value: "ISO Class 7 & 8" },
  { label: "Sterilization Chambers", value: "12+ Industrial Units" },
  { label: "Processing Capacity", value: "50,000+ cycles/year" },
  { label: "Quality Lab Space", value: "2,500 sq. meters" }
];

const facilityFeatures = [
  "ISO Class 7 and Class 8 clean rooms for sensitive processing",
  "12+ industrial-scale sterilization chambers",
  "Advanced environmental monitoring systems",
  "Dedicated quality control laboratories",
  "Temperature and humidity controlled storage",
  "Full batch traceability and documentation systems"
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      hero.querySelector("[data-badge]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo(
      hero.querySelector("[data-title]"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.2"
    )
    .fromTo(
      hero.querySelector("[data-description]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(
      hero.querySelector("[data-stats]"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    )
    .fromTo(
      hero.querySelector("[data-image]"),
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.8 },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Timeline animation
  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = container.querySelectorAll("[data-milestone]");

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span 
                data-badge 
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0"
              >
                About BiosteriMed
              </span>
              <h1 
                data-title 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight opacity-0"
              >
                Your Trusted Partner in{" "}
                <span className="text-primary">Sterility Assurance</span>
              </h1>
              <p 
                data-description 
                className="text-lg text-muted-foreground leading-relaxed mb-8 opacity-0"
              >
                For nearly two decades, BiosteriMed has been at the forefront of medical sterilization services, 
                helping healthcare organizations worldwide ensure patient safety through validated, compliant 
                sterilization processes and quality products.
              </p>
              <div data-stats className="grid grid-cols-2 gap-6 opacity-0">
                {facilities.map((item, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div data-image className="relative opacity-0">
              <img
                src={aboutFacility}
                alt="BiosteriMed sterilization facility"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">19+ Years</div>
                    <div className="text-sm text-muted-foreground">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <GSAPSection className="section-padding bg-background">
        <div className="container-custom">
          <GSAPWrapper animation="stagger" staggerDelay={0.15} className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To provide healthcare organizations with reliable, validated sterilization services and quality 
                products that ensure patient safety, regulatory compliance, and operational efficiency. We are 
                committed to advancing sterility assurance through innovation, expertise, and unwavering quality standards.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="w-14 h-14 bg-secondary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                To be the global leader in medical sterilization services, recognized for our technical excellence, 
                regulatory expertise, and commitment to advancing healthcare safety. We envision a world where 
                every medical device reaches patients in a verified sterile condition.
              </p>
            </div>
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* Core Values */}
      <GSAPSection className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values define who we are and how we serve our clients every day.
            </p>
          </div>
          <GSAPWrapper animation="stagger" staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </GSAPWrapper>
        </div>
      </GSAPSection>

      {/* Timeline */}
      <GSAPSection className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key moments that have shaped BiosteriMed into an industry leader.
            </p>
          </div>
          
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  data-milestone
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center gap-2 text-primary font-bold text-lg mb-2">
                        <Calendar className="w-5 h-5" />
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </GSAPSection>

      {/* Facility */}
      <GSAPSection className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Facility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-muted-foreground mb-8">
                Our facilities are designed and maintained to meet the strictest international standards 
                for medical device sterilization.
              </p>
              <GSAPWrapper animation="stagger" staggerDelay={0.1} className="space-y-3">
                {facilityFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </GSAPWrapper>
            </div>
            <GSAPWrapper animation="scale" className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <Building className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">2,500m²</div>
                  <div className="text-sm text-muted-foreground">Total Facility Area</div>
                </div>
                <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-primary-foreground/80">Annual Cycles</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary rounded-xl p-6 text-secondary-foreground">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-secondary-foreground/80">Quality Rate</div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <Award className="w-8 h-8 text-secondary mb-3" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </GSAPWrapper>
          </div>
        </div>
      </GSAPSection>

      {/* Certifications */}
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

      {/* CTA */}
      <CTASection
        title="Ready to Partner with Industry Leaders?"
        subtitle="Join hundreds of healthcare organizations who trust BiosteriMed for their sterilization needs."
        primaryCTA={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />
    </Layout>
  );
}
