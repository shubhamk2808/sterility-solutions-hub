import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  FileText, Download, BookOpen, Video, FileCheck, 
  Microscope, Shield, ClipboardList, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const resourceCategories = [
  {
    title: "Technical Brochures",
    icon: FileText,
    description: "Detailed information about our sterilization services and capabilities.",
    resources: [
      { title: "Company Overview Brochure", type: "PDF", size: "2.4 MB" },
      { title: "EO Sterilization Services", type: "PDF", size: "1.8 MB" },
      { title: "Steam Sterilization Guide", type: "PDF", size: "1.5 MB" },
      { title: "Gamma Irradiation Capabilities", type: "PDF", size: "1.9 MB" },
    ]
  },
  {
    title: "Product Datasheets",
    icon: ClipboardList,
    description: "Technical specifications for our monitoring products and indicators.",
    resources: [
      { title: "Chemical Indicators Catalog", type: "PDF", size: "3.2 MB" },
      { title: "Biological Indicators Specifications", type: "PDF", size: "2.1 MB" },
      { title: "Bowie-Dick Test Pack Guide", type: "PDF", size: "1.3 MB" },
      { title: "Sterilization Accessories Overview", type: "PDF", size: "1.7 MB" },
    ]
  },
  {
    title: "Regulatory & Compliance",
    icon: Shield,
    description: "Documentation to support your regulatory submissions and audits.",
    resources: [
      { title: "Quality Management Policy", type: "PDF", size: "0.8 MB" },
      { title: "ISO Certification Summary", type: "PDF", size: "0.5 MB" },
      { title: "FDA Registration Certificate", type: "PDF", size: "0.3 MB" },
      { title: "Validation Documentation Sample", type: "PDF", size: "1.1 MB" },
    ]
  },
  {
    title: "Educational Guides",
    icon: BookOpen,
    description: "Learn about sterilization science, best practices, and industry standards.",
    resources: [
      { title: "Introduction to Sterilization Methods", type: "PDF", size: "2.8 MB" },
      { title: "Sterilization Validation Primer", type: "PDF", size: "2.2 MB" },
      { title: "BI vs CI: Understanding Indicators", type: "PDF", size: "1.4 MB" },
      { title: "Regulatory Pathway Guide", type: "PDF", size: "1.9 MB" },
    ]
  },
];

const whitepapers = [
  {
    title: "Optimizing EO Sterilization Cycles for Modern Polymers",
    description: "A comprehensive guide to developing EO cycles for next-generation medical device materials.",
    readTime: "15 min read",
    date: "January 2024",
  },
  {
    title: "Reducing Time-to-Market with Accelerated Validation",
    description: "Strategies for efficient sterilization validation without compromising regulatory compliance.",
    readTime: "12 min read",
    date: "December 2023",
  },
  {
    title: "Sustainability in Medical Device Sterilization",
    description: "Exploring environmentally responsible sterilization practices and emerging technologies.",
    readTime: "10 min read",
    date: "November 2023",
  },
];

const caseStudies = [
  {
    title: "40% Faster Product Launch for MedTech Startup",
    industry: "Medical Devices",
    challenge: "Rapid validation for FDA 510(k) submission",
    result: "Reduced validation timeline from 6 months to 3.5 months",
  },
  {
    title: "Zero Contamination for Regional Hospital Network",
    industry: "Healthcare",
    challenge: "Recurring reprocessing failures with surgical instruments",
    result: "Achieved 100% sterility assurance with new protocols",
  },
  {
    title: "Global Compliance for Pharmaceutical Manufacturer",
    industry: "Pharmaceuticals",
    challenge: "Multi-country regulatory requirements for sterile drug products",
    result: "Single validation strategy accepted by FDA, EMA, and PMDA",
  },
];

export default function Resources() {
  return (
    <Layout>
      <PageHero
        badge="Resource Center"
        title={<>Technical Resources & <span className="text-gradient">Documentation</span></>}
        description="Access brochures, datasheets, whitepapers, and educational materials to support your sterilization decisions and regulatory compliance."
      />

      {/* Resource Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Downloads"
            title="Brochures & Datasheets"
            subtitle="Download technical documentation for our services and products."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, categoryIndex) => (
              <AnimatedCard 
                key={category.title} 
                delay={categoryIndex * 0.1}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
                  <category.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.resources.map((resource, index) => (
                      <li key={index}>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {resource.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground text-sm">
                            <span>{resource.size}</span>
                            <Download className="w-4 h-4" />
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Insights"
            title="Whitepapers & Articles"
            subtitle="In-depth analysis and insights from our sterilization experts."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <AnimatedCard 
                key={paper.title}
                delay={index * 0.1}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>{paper.readTime}</span>
                  <span>•</span>
                  <span>{paper.date}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-3 leading-tight">{paper.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{paper.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 w-4 h-4" /> Download PDF
                </Button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Success Stories"
            title="Case Studies"
            subtitle="Real-world examples of how we've helped clients achieve their goals."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <AnimatedCard
                key={study.title}
                delay={index * 0.1}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                    {study.industry}
                  </span>
                  <h4 className="font-semibold text-foreground mb-3">{study.title}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Challenge: </span>
                      <span className="text-foreground">{study.challenge}</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
                      <span className="text-muted-foreground">Result: </span>
                      <span className="text-primary font-medium">{study.result}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="ghost" size="sm" className="w-full">
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Video Library"
                title="Educational Videos"
                subtitle="Watch our experts explain sterilization concepts, facility tours, and best practices."
                align="left"
              />
              <div className="space-y-4">
                {[
                  "Facility Virtual Tour",
                  "Understanding EO Sterilization",
                  "Biological Indicator Interpretation",
                  "Steam Sterilization Best Practices",
                ].map((video, index) => (
                  <motion.div
                    key={video}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Video className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {video}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Video content coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Custom Documentation?"
        subtitle="Contact us for specific technical documentation, custom validation protocols, or regulatory support."
        primaryCTA={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
      />
    </Layout>
  );
}
