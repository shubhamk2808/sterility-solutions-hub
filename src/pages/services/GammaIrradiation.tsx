import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Radiation, CheckCircle, FileText, Download, ArrowRight, 
  Package, Clock, Shield, Beaker, FileCheck, Gauge
} from "lucide-react";

const benefits = [
  "High penetration capability - sterilizes through final packaging",
  "No temperature increase - safe for temperature-sensitive products",
  "No residuals - no aeration or outgassing required",
  "Validated dose mapping ensures uniform treatment",
  "Suitable for high-volume production runs",
  "Full compliance with ISO 11137 requirements"
];

const processSteps = [
  {
    step: 1,
    title: "Dose Mapping",
    description: "Initial dose mapping to determine optimal exposure parameters.",
    icon: Gauge
  },
  {
    step: 2,
    title: "Product Loading",
    description: "Products loaded onto irradiation carriers in controlled patterns.",
    icon: Package
  },
  {
    step: 3,
    title: "Irradiation",
    description: "Controlled exposure to Cobalt-60 gamma radiation source.",
    icon: Radiation
  },
  {
    step: 4,
    title: "Dosimetry",
    description: "Dose verification using calibrated dosimeters.",
    icon: Beaker
  },
  {
    step: 5,
    title: "Release",
    description: "Quality verification and documentation issued.",
    icon: FileCheck
  }
];

const specifications = [
  { label: "Radiation Source", value: "Cobalt-60" },
  { label: "Typical Dose Range", value: "15-35 kGy" },
  { label: "Dose Uniformity Ratio", value: "≤1.5" },
  { label: "Processing Time", value: "Minutes to hours" },
  { label: "Temperature Rise", value: "Minimal (<5°C)" },
  { label: "Penetration Depth", value: "High (dense packaging)" }
];

const compatibleMaterials = [
  "Medical Devices", "Surgical Kits", "Implants", "Syringes",
  "Catheters", "IV Sets", "Wound Care", "Tissue Products",
  "Pharmaceuticals", "Lab Consumables", "PPE", "Combination Products"
];

const doseApplications = [
  { dose: "10-15 kGy", application: "Bioburden reduction, tissue processing" },
  { dose: "15-25 kGy", application: "Standard medical device sterilization" },
  { dose: "25-35 kGy", application: "High bioburden products, spore reduction" },
  { dose: ">35 kGy", application: "Special applications, research materials" }
];

export default function GammaIrradiation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-500/10 via-background to-medical-teal/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/services" className="inline-flex items-center text-medical-blue hover:underline mb-4">
                ← Back to Services
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Radiation className="w-7 h-7 text-purple-500" />
                </div>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium">
                  ISO 11137 Compliant
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Gamma{" "}
                <span className="text-gradient">Irradiation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Terminal sterilization using high-energy gamma radiation. Ideal for sterilizing 
                products in their final sealed packaging with excellent penetration and no residuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-4 h-4" /> Download Datasheet
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="The Process"
            title="How Gamma Irradiation Works"
            subtitle="Controlled exposure to ionizing radiation for terminal sterilization."
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-sm text-purple-500 font-medium mb-2">Step {step.step}</div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Dose Applications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Dose Levels"
            title="Dose Applications"
            subtitle="Different dose ranges for various sterilization requirements."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doseApplications.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl">
                <div className="text-2xl font-bold text-purple-500 mb-2">{item.dose}</div>
                <p className="text-muted-foreground">{item.application}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Materials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Technical Data"
                title="Process Specifications"
                align="left"
              />
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <AnimatedCard key={index} delay={index * 0.05} className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="text-lg font-semibold text-purple-500">{spec.value}</div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                badge="Applications"
                title="Suitable Products"
                align="left"
              />
              <div className="flex flex-wrap gap-2">
                {compatibleMaterials.map((material, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="px-4 py-2 bg-slate-50 border border-border rounded-full text-sm text-foreground hover:border-purple-500 hover:text-purple-500 transition-colors"
                  >
                    {material}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Documentation"
            title="What You Receive"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Certificate of Irradiation", desc: "Official certification with dose delivered" },
              { icon: Gauge, title: "Dosimetry Report", desc: "Calibrated dosimeter readings" },
              { icon: FileCheck, title: "Batch Records", desc: "Complete processing documentation" },
              { icon: Package, title: "Dose Mapping Report", desc: "Initial validation documentation" }
            ].map((doc, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <doc.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground">{doc.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="High-Volume Sterilization Solutions"
        subtitle="Contact us for gamma irradiation services for your medical devices."
        primaryCTA={{ label: "Request Quote", href: "/contact" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
      />
    </Layout>
  );
}
