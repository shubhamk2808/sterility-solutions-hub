import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Award, FileCheck, CheckCircle, ClipboardCheck, RefreshCw, Eye, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const certifications = [
  {
    title: "ISO 13485:2016",
    description: "Medical devices quality management systems. Requirements for regulatory purposes.",
    scope: "Design, development, and provision of sterilization services and monitoring products.",
    icon: Shield,
  },
  {
    title: "ISO 11135:2014",
    description: "Sterilization of health-care products — Ethylene oxide — Requirements for development, validation and routine control.",
    scope: "EO sterilization services for medical devices.",
    icon: Award,
  },
  {
    title: "ISO 17665-1:2006",
    description: "Sterilization of health care products — Moist heat — Requirements for development, validation and routine control.",
    scope: "Steam sterilization services and validation.",
    icon: FileCheck,
  },
  {
    title: "FDA Registered",
    description: "Registered establishment with the U.S. Food and Drug Administration for medical device sterilization.",
    scope: "Contract sterilization of medical devices.",
    icon: CheckCircle,
  },
];

const qmsElements = [
  { icon: ClipboardCheck, title: "Document Control", description: "Controlled procedures and work instructions for all processes." },
  { icon: RefreshCw, title: "CAPA System", description: "Systematic corrective and preventive action program." },
  { icon: Eye, title: "Internal Audits", description: "Regular internal audits to ensure compliance and continuous improvement." },
  { icon: Users, title: "Management Review", description: "Periodic management review of quality objectives and performance." },
];

const validationServices = [
  {
    title: "Installation Qualification (IQ)",
    description: "Documented verification that equipment is installed according to specifications and manufacturer requirements.",
  },
  {
    title: "Operational Qualification (OQ)",
    description: "Documented verification that equipment operates within specified parameters across its operating range.",
  },
  {
    title: "Performance Qualification (PQ)",
    description: "Documented verification that equipment consistently performs according to predetermined specifications.",
  },
  {
    title: "Cycle Development",
    description: "Development of product-specific sterilization cycles with appropriate safety margins.",
  },
  {
    title: "Dose Mapping",
    description: "Characterization of dose distribution for gamma irradiation processes.",
  },
  {
    title: "Bioburden Testing",
    description: "Determination of microbial load on products prior to sterilization.",
  },
];

const documentation = [
  "Certificate of Sterility",
  "Batch Processing Records",
  "Biological Indicator Results",
  "Chemical Indicator Results",
  "Parametric Release Data",
  "Equipment Calibration Records",
  "Deviation Reports (if any)",
  "Environmental Monitoring Data",
];

export default function Quality() {
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
              Quality & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Committed to Excellence in Quality
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our quality management system ensures every sterilization cycle meets the highest 
              standards of safety, efficacy, and regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Quality Policy"
              title="Our Commitment to Quality"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-surface rounded-2xl border border-border"
            >
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "BiosteriMed is committed to providing safe, effective sterilization services and products 
                that consistently meet customer requirements and applicable regulatory standards. We achieve 
                this through continuous improvement of our quality management system, investment in our people 
                and technology, and a relentless focus on patient safety."
              </p>
              <p className="mt-6 font-semibold text-foreground">— BiosteriMed Quality Management</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Certifications"
            title="Regulatory Certifications"
            subtitle="Our facilities maintain the following certifications and registrations."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <p className="text-sm"><span className="font-medium text-foreground">Scope:</span> <span className="text-muted-foreground">{cert.scope}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Certificates
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* QMS Elements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Quality System"
            title="Quality Management System"
            subtitle="Key elements of our ISO 13485 compliant quality management system."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qmsElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <element.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{element.title}</h3>
                <p className="text-sm text-muted-foreground">{element.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Services */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Validation"
            title="Validation & Testing Services"
            subtitle="Comprehensive validation services to support your sterilization needs."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {validationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Documentation"
                title="Complete Traceability"
                subtitle="Every sterilization batch is accompanied by comprehensive documentation."
                align="left"
              />
              <p className="text-muted-foreground mb-8">
                Our documentation packages provide complete traceability from receipt through 
                release, supporting your regulatory compliance and audit readiness.
              </p>
              <Button asChild className="rounded-full">
                <Link to="/contact">Request Sample Documentation</Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-semibold text-foreground mb-6">Standard Documentation Package</h3>
              <div className="grid grid-cols-2 gap-3">
                {documentation.map((doc, index) => (
                  <motion.div
                    key={doc}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Questions About Our Quality Systems?"
        subtitle="Our quality team is available to discuss certifications, validation, and compliance requirements."
        primaryCTA={{ label: "Contact Quality Team", href: "/contact" }}
        secondaryCTA={{ label: "Download Quality Manual", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
