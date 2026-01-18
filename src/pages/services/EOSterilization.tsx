import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wind, CheckCircle, ArrowRight, FileText, Clock, Shield, Thermometer, Package, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const processSteps = [
  { step: 1, title: "Intake & Documentation", description: "Products are received, inspected, and documented with full traceability." },
  { step: 2, title: "Pre-conditioning", description: "Products are preconditioned to optimal humidity and temperature levels." },
  { step: 3, title: "Sterilization Cycle", description: "EO gas exposure under validated cycle parameters for complete sterilization." },
  { step: 4, title: "Aeration", description: "Controlled aeration to remove EO residues to safe levels per ISO 10993-7." },
  { step: 5, title: "Quality Control", description: "Biological indicators and parametric release verification." },
  { step: 6, title: "Certification", description: "Issuance of Certificate of Sterility with complete batch documentation." },
];

const specifications = [
  { label: "Operating Temperature", value: "37°C - 63°C (99°F - 145°F)" },
  { label: "EO Concentration", value: "450 - 1200 mg/L" },
  { label: "Relative Humidity", value: "40% - 80%" },
  { label: "Cycle Duration", value: "2 - 12 hours (sterilization phase)" },
  { label: "Aeration Time", value: "8 - 24 hours (product dependent)" },
  { label: "Chamber Sizes", value: "2m³ to 30m³" },
];

const compatibleMaterials = [
  "Plastics (PE, PP, PVC, PET)",
  "Electronics and batteries",
  "Rubber and silicone",
  "Fiber optics",
  "Combination devices",
  "Pre-filled syringes",
  "Catheters and tubing",
  "Surgical kits",
];

const compliance = [
  { title: "ISO 11135", description: "Sterilization of health-care products - Ethylene oxide" },
  { title: "ISO 10993-7", description: "Biological evaluation - EO residues" },
  { title: "FDA 21 CFR Part 820", description: "Quality System Regulation" },
  { title: "EN 556-1", description: "Requirements for terminally sterilized products" },
];

export default function EOSterilization() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Wind className="h-8 w-8" />
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                Sterilization Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              EO Sterilization
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Ethylene Oxide sterilization for heat and moisture-sensitive medical devices. 
              Our validated EO processes ensure complete sterility while maintaining material integrity 
              and meeting all regulatory requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-blue-600 hover:bg-white/90">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Download Datasheet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                badge="Overview"
                title="What is EO Sterilization?"
                subtitle=""
                align="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  Ethylene Oxide (EO) sterilization is a low-temperature sterilization method 
                  that uses EO gas to achieve sterility. It is the preferred method for medical 
                  devices that cannot withstand the high temperatures of steam sterilization.
                </p>
                <p className="leading-relaxed mb-6">
                  EO penetrates packaging materials and complex device geometries, making it 
                  ideal for pre-packaged, single-use medical devices. The process operates at 
                  temperatures between 37-63°C, preserving material properties and functionality.
                </p>
                <p className="leading-relaxed">
                  Our EO sterilization facility is equipped with multiple chamber sizes and 
                  validated cycle parameters to accommodate a wide range of products and volumes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Important Note</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      EO residues must be within acceptable limits per ISO 10993-7. 
                      Aeration times vary based on product materials and packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Process"
            title="How It Works"
            subtitle="Our validated 6-step process ensures complete sterility and regulatory compliance."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Materials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                badge="Compatibility"
                title="Compatible Materials"
                subtitle="EO sterilization is suitable for a wide range of materials and products."
                align="left"
              />
              <div className="grid grid-cols-2 gap-3">
                {compatibleMaterials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                badge="Compliance"
                title="Regulatory Standards"
                subtitle="Our EO sterilization processes meet all applicable standards."
                align="left"
              />
              <div className="space-y-4">
                {compliance.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-surface rounded-lg border border-border">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us to discuss your EO sterilization requirements and receive a customized quote."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Download Technical Datasheet", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
