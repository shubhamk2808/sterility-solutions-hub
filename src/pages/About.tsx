import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Lightbulb, Award, Building, Calendar } from "lucide-react";
import aboutFacility from "@/assets/about-facility.jpg";

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

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-medical-blue/10 text-medical-blue rounded-full text-sm font-medium mb-6">
                About BiosteriMed
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Sterility Assurance</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For nearly two decades, BiosteriMed has been at the forefront of medical sterilization services, 
                helping healthcare organizations worldwide ensure patient safety through validated, compliant 
                sterilization processes and quality products.
              </p>
              <div className="flex flex-wrap gap-6">
                {facilities.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-medical-blue">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={aboutFacility}
                alt="BiosteriMed sterilization facility"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-medical-teal/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-medical-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">19+ Years</div>
                    <div className="text-sm text-muted-foreground">Industry Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="bg-gradient-to-br from-medical-blue to-medical-blue/80 text-white p-8 rounded-2xl" delay={0}>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide healthcare organizations with reliable, validated sterilization services and quality 
                products that ensure patient safety, regulatory compliance, and operational efficiency. We are 
                committed to advancing sterility assurance through innovation, expertise, and unwavering quality standards.
              </p>
            </AnimatedCard>
            <AnimatedCard className="bg-gradient-to-br from-medical-teal to-medical-teal/80 text-white p-8 rounded-2xl" delay={0.1}>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the global leader in medical sterilization services, recognized for our technical excellence, 
                regulatory expertise, and commitment to advancing healthcare safety. We envision a world where 
                every medical device reaches patients in a verified sterile condition.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="Principles That Guide Us"
            subtitle="Our core values define who we are and how we serve our clients every day."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedCard key={index} className="bg-white p-6 rounded-xl" delay={index * 0.1}>
                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-medical-blue" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="Milestones & Achievements"
            subtitle="Key moments that have shaped BiosteriMed into an industry leader."
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-medical-blue/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center gap-2 text-medical-blue font-bold text-lg mb-2">
                        <Calendar className="w-5 h-5" />
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-medical-blue rounded-full ring-4 ring-medical-blue/20" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Facility"
                title="State-of-the-Art Infrastructure"
                subtitle="Our facilities are designed and maintained to meet the strictest international standards for medical device sterilization."
                align="left"
              />
              <div className="space-y-4">
                {[
                  "ISO Class 7 and Class 8 clean rooms for sensitive processing",
                  "12+ industrial-scale sterilization chambers",
                  "Advanced environmental monitoring systems",
                  "Dedicated quality control laboratories",
                  "Temperature and humidity controlled storage",
                  "Full batch traceability and documentation systems"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-medical-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-medical-teal rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Building className="w-8 h-8 text-medical-blue mb-3" />
                  <div className="text-2xl font-bold text-foreground">2,500m²</div>
                  <div className="text-sm text-muted-foreground">Total Facility Area</div>
                </div>
                <div className="bg-medical-blue rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-white/80">Annual Cycles</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-medical-teal rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-white/80">Quality Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Award className="w-8 h-8 text-medical-teal mb-3" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
