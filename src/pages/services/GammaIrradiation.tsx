import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Radiation, CheckCircle, Shield, Zap, Package, Clock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const processSteps = [
  { step: 1, title: "Product Receipt", description: "Products received and inspected for packaging integrity and documentation." },
  { step: 2, title: "Dosimetry Mapping", description: "Dose mapping studies ensure uniform radiation distribution throughout the load." },
  { step: 3, title: "Irradiation", description: "Controlled exposure to Cobalt-60 gamma rays at validated dose levels." },
  { step: 4, title: "Dose Verification", description: "Dosimeters verify delivered dose meets specifications." },
  { step: 5, title: "Quality Release", description: "Batch records reviewed and products released after verification." },
  { step: 6, title: "Documentation", description: "Certificate of Irradiation issued with complete dose records." },
];

const specifications = [
  { label: "Radiation Source", value: "Cobalt-60 (⁶⁰Co)" },
  { label: "Sterilization Dose", value: "25 kGy (typical)" },
  { label: "Dose Range", value: "5 - 50 kGy" },
  { label: "Dose Uniformity", value: "≤ 2.0 (max/min ratio)" },
  { label: "Processing Temp", value: "Ambient (no heating)" },
  { label: "Batch Capacity", value: "Up to 100m³" },
];

const advantages = [
  { 
    icon: Zap, 
    title: "Deep Penetration", 
    description: "Gamma rays penetrate packaging and dense materials, ensuring complete sterilization of complex products." 
  },
  { 
    icon: Package, 
    title: "Final Package Sterilization", 
    description: "Products are sterilized in their final packaging, eliminating post-processing contamination risk." 
  },
  { 
    icon: Clock, 
    title: "No Quarantine", 
    description: "No aeration or degassing required - products are immediately available after processing." 
  },
  { 
    icon: FileCheck, 
    title: "Precise Dosimetry", 
    description: "Accurate dose measurement and documentation for complete regulatory compliance." 
  },
];

const compatibleMaterials = [
  "Single-use medical devices",
  "Pharmaceutical products",
  "Combination products",
  "Implants and grafts",
  "Diagnostic kits",
  "Tissue products",
  "Cosmetic products",
  "Laboratory supplies",
];

const compliance = [
  { title: "ISO 11137", description: "Sterilization of health care products - Radiation" },
  { title: "ISO 13485", description: "Medical devices - Quality management systems" },
  { title: "21 CFR Part 211", description: "Current Good Manufacturing Practice" },
  { title: "EN 552", description: "Sterilization by irradiation" },
];

export default function GammaIrradiation() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
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
                <Radiation className="h-8 w-8" />
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                Sterilization Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gamma Irradiation
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Gamma ray sterilization using Cobalt-60 for bulk processing of single-use medical 
              devices and pharmaceutical products. Deep penetration ensures complete sterilization 
              with no chemical residues.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-purple-600 hover:bg-white/90">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Download Datasheet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Advantages"
            title="Why Choose Gamma Irradiation?"
            subtitle="Key benefits of gamma sterilization for medical devices and pharmaceuticals."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                badge="Overview"
                title="How Gamma Irradiation Works"
                subtitle=""
                align="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  Gamma irradiation uses high-energy photons emitted from Cobalt-60 to achieve 
                  sterilization. The gamma rays penetrate the product and packaging, ionizing 
                  molecules and damaging microbial DNA to achieve sterility.
                </p>
                <p className="leading-relaxed mb-6">
                  Unlike other sterilization methods, gamma irradiation doesn't require elevated 
                  temperatures or chemicals. Products are processed at ambient temperature and 
                  can be used immediately after irradiation - no aeration or quarantine required.
                </p>
                <p className="leading-relaxed">
                  Our gamma irradiation facility uses precision dosimetry to ensure accurate, 
                  consistent dose delivery. Every batch is monitored and documented to meet 
                  strict regulatory requirements.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Radiation className="h-5 w-5 text-purple-500" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Process"
            title="Irradiation Process"
            subtitle="Our controlled process ensures consistent dose delivery and complete documentation."
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
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Materials & Compliance */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                badge="Applications"
                title="Common Applications"
                subtitle="Gamma irradiation is ideal for a wide range of products."
                align="left"
              />
              <div className="grid grid-cols-2 gap-3">
                {compatibleMaterials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                badge="Compliance"
                title="Regulatory Standards"
                subtitle="Our gamma irradiation meets all applicable standards."
                align="left"
              />
              <div className="space-y-4">
                {compliance.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <Shield className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
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
        title="Need Gamma Irradiation Services?"
        subtitle="Contact us to discuss your irradiation requirements and receive a customized quote."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Download Technical Datasheet", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
