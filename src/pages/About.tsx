import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Building, Clock, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import aboutFacility from "@/assets/about-facility.jpg";

const values = [
  { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards in all our operations and client relationships." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in every sterilization cycle and customer interaction." },
  { icon: Users, title: "Collaboration", description: "We work closely with clients to understand and meet their unique requirements." },
  { icon: Heart, title: "Patient Safety", description: "Every process we perform is driven by our commitment to patient safety." },
];

const milestones = [
  { year: "1999", title: "Company Founded", description: "BiosteriMed established as a specialized sterilization service provider." },
  { year: "2005", title: "ISO 13485 Certified", description: "Achieved ISO 13485 certification for quality management systems." },
  { year: "2010", title: "Facility Expansion", description: "Opened new 50,000 sq ft state-of-the-art sterilization facility." },
  { year: "2015", title: "FDA Registration", description: "Received FDA establishment registration for medical device sterilization." },
  { year: "2020", title: "Global Expansion", description: "Extended services to international markets across Europe and Asia." },
  { year: "2024", title: "Innovation Hub", description: "Launched R&D center for next-generation sterilization technologies." },
];

const facilities = [
  { title: "Class 7 Clean Rooms", description: "ISO Class 7 certified cleanroom environments for sensitive processing" },
  { title: "EO Sterilization Chambers", description: "Multiple Ethylene Oxide chambers for various load sizes" },
  { title: "Steam Autoclaves", description: "Industrial-grade autoclaves with validated cycle parameters" },
  { title: "Environmental Monitoring", description: "24/7 automated monitoring of all critical parameters" },
  { title: "Quality Control Labs", description: "In-house testing for biological and chemical indicators" },
  { title: "Documentation Systems", description: "Electronic batch record systems for complete traceability" },
];

export default function About() {
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
              About BiosteriMed
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              25+ Years of Excellence in Medical Sterilization
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From our founding to becoming a global leader in sterilization services, 
              our commitment to quality and patient safety has never wavered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pioneering Sterilization Excellence Since 1999
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BiosteriMed was founded with a simple mission: to provide healthcare organizations 
                with reliable, compliant sterilization services that prioritize patient safety above all else.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Over the past 25 years, we've grown from a small regional provider to an internationally 
                recognized leader in medical sterilization. Our growth has been driven by our unwavering 
                commitment to quality, continuous investment in technology, and deep understanding of 
                regulatory requirements.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-surface rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Global Clients</div>
                </div>
                <div className="p-6 bg-surface rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutFacility} 
                  alt="BiosteriMed Facility" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Est. 1999</div>
                    <div className="text-sm text-muted-foreground">25+ Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-card rounded-2xl border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver exceptional sterilization services and products that ensure patient safety, 
                regulatory compliance, and operational efficiency for healthcare organizations worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 bg-card rounded-2xl border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global standard of excellence in medical sterilization, continuously innovating 
                to advance healthcare safety and setting new benchmarks for quality and compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="Principles That Guide Us"
            subtitle="Our core values are the foundation of everything we do, from daily operations to long-term strategy."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="Milestones & Achievements"
            subtitle="Key moments in our journey to becoming a global leader in sterilization services."
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <div className="ml-12 md:ml-0 md:mr-8">
                        <div className="text-4xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="ml-12 md:ml-8">
                        <div className="text-4xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Facilities"
            title="State-of-the-Art Equipment"
            subtitle="Our facilities are equipped with the latest technology and maintained to the highest standards."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Partner With Us?"
        subtitle="Contact our team to learn how BiosteriMed can support your sterilization needs."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
        variant="gradient"
      />
    </Layout>
  );
}
