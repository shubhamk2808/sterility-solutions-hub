import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, Award, FileCheck, Microscope, RefreshCw, 
  ClipboardCheck, Download, CheckCircle, Building, Users
} from "lucide-react";

const certifications = [
  {
    name: "ISO 13485:2016",
    description: "Quality management systems for medical devices",
    scope: "Design, development, and provision of sterilization services"
  },
  {
    name: "ISO 11135:2014",
    description: "Sterilization of health-care products - Ethylene oxide",
    scope: "EO sterilization process development and routine processing"
  },
  {
    name: "ISO 17665-1:2006",
    description: "Sterilization of health-care products - Moist heat",
    scope: "Steam sterilization services and validation"
  },
  {
    name: "ISO 11137-1/2:2006",
    description: "Sterilization of health-care products - Radiation",
    scope: "Gamma irradiation sterilization services"
  },
  {
    name: "FDA Registered",
    description: "U.S. Food and Drug Administration",
    scope: "Medical device sterilization establishment registration"
  },
  {
    name: "CE Marking Support",
    description: "European Conformity",
    scope: "Support for CE marking requirements under MDR"
  }
];

const qmsElements = [
  {
    icon: ClipboardCheck,
    title: "Document Control",
    description: "Comprehensive document management system ensuring current, approved procedures."
  },
  {
    icon: Users,
    title: "Training & Competency",
    description: "Rigorous training programs and competency assessments for all personnel."
  },
  {
    icon: Microscope,
    title: "Process Validation",
    description: "IQ/OQ/PQ protocols for all sterilization equipment and processes."
  },
  {
    icon: RefreshCw,
    title: "CAPA System",
    description: "Systematic approach to corrective and preventive actions."
  },
  {
    icon: Building,
    title: "Facility Controls",
    description: "Environmental monitoring, calibration, and maintenance programs."
  },
  {
    icon: FileCheck,
    title: "Audit Program",
    description: "Internal audits and management reviews for continuous improvement."
  }
];

const validationServices = [
  { title: "Installation Qualification (IQ)", description: "Verification of proper equipment installation" },
  { title: "Operational Qualification (OQ)", description: "Testing of operating parameters and limits" },
  { title: "Performance Qualification (PQ)", description: "Demonstration of consistent process performance" },
  { title: "Cycle Development", description: "Product-specific sterilization cycle optimization" },
  { title: "Dose Mapping", description: "Radiation dose distribution studies" },
  { title: "Bioburden Testing", description: "Pre-sterilization microbial load assessment" }
];

const documentationProvided = [
  "Certificate of Sterility/Irradiation",
  "Batch processing records",
  "BI/CI test results",
  "Environmental monitoring data",
  "Calibration certificates",
  "Validation protocols and reports"
];

export default function Quality() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-medical-blue/10 text-medical-blue rounded-full text-sm font-medium mb-6">
              Quality & Certifications
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Committed to{" "}
              <span className="text-gradient">Quality Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our comprehensive quality management system ensures every sterilization process 
              meets the highest standards of safety, efficacy, and regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <Download className="mr-2 w-4 h-4" /> Download Quality Statement
              </Button>
              <Button variant="outline" size="lg">
                View Certifications
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard className="bg-gradient-to-br from-medical-blue to-medical-teal text-white p-8 md:p-12 rounded-2xl text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Quality Policy</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                "BiosteriMed is committed to providing sterilization services and products that 
                consistently meet customer requirements and applicable regulatory standards. We 
                achieve this through a robust quality management system, continuous improvement, 
                and a culture of quality awareness throughout our organization."
              </p>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  Approved by Management • Reviewed Annually • Last Updated: January 2024
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Certifications"
            title="Accreditations & Standards"
            subtitle="We maintain certifications to internationally recognized standards."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-medical-blue">{cert.scope}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* QMS Elements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Quality System"
            title="Quality Management Elements"
            subtitle="Key components of our ISO 13485 quality management system."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qmsElements.map((element, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-medical-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <element.icon className="w-6 h-6 text-medical-teal" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{element.title}</h4>
                <p className="text-sm text-muted-foreground">{element.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Services */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Validation"
                title="Validation & Testing Services"
                subtitle="Comprehensive validation services for sterilization processes."
                align="left"
              />
              <div className="space-y-4">
                {validationServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{service.title}</div>
                      <div className="text-sm text-muted-foreground">{service.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                badge="Documentation"
                title="Documentation Provided"
                subtitle="Complete documentation package for regulatory compliance."
                align="left"
              />
              <AnimatedCard className="bg-white p-6 rounded-xl">
                <ul className="space-y-3">
                  {documentationProvided.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-medical-blue" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 w-4 h-4" /> Request Sample Documentation
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-medical-teal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <RefreshCw className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Continuous Improvement</h2>
            <p className="text-lg text-white/90">
              We are committed to continually improving our quality management system through 
              regular internal audits, management reviews, customer feedback analysis, and 
              proactive identification of improvement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Questions About Our Quality Systems?"
        subtitle="Contact us for quality documentation, audit reports, or certification details."
        primaryCTA={{ label: "Contact Quality Team", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </Layout>
  );
}
