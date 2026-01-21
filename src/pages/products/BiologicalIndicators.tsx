import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Microscope, CheckCircle, Download, ArrowRight, Package, FileText } from "lucide-react";

const products = [
  {
    name: "Self-Contained BI (Steam)",
    sku: "BI-SC-STEAM-50",
    description: "Rapid readout self-contained biological indicator for steam sterilization",
    features: ["Geobacillus stearothermophilus spores", "24-48 hour readout", "1-hour rapid option available"],
    organism: "G. stearothermophilus"
  },
  {
    name: "Self-Contained BI (EO)",
    sku: "BI-SC-EO-50",
    description: "Biological indicator for ethylene oxide sterilization monitoring",
    features: ["Bacillus atrophaeus spores", "48-hour incubation", "Clear color change endpoint"],
    organism: "B. atrophaeus"
  },
  {
    name: "Spore Strips (Steam)",
    sku: "BI-SS-STEAM-100",
    description: "Traditional spore strips for steam sterilization validation",
    features: ["High spore population", "Paper carrier", "Requires separate incubation"],
    organism: "G. stearothermophilus"
  },
  {
    name: "Rapid Readout BI System",
    sku: "BI-RR-SYS",
    description: "Complete rapid readout system with incubator and indicators",
    features: ["Results in 1 hour", "Auto-reader option", "Digital documentation"],
    organism: "G. stearothermophilus"
  }
];

const incubationGuide = [
  { method: "Steam (Gravity)", temp: "55-60°C", time: "24-48 hours" },
  { method: "Steam (Pre-vacuum)", temp: "55-60°C", time: "24-48 hours" },
  { method: "Ethylene Oxide", temp: "35-37°C", time: "48 hours" },
  { method: "Dry Heat", temp: "55-60°C", time: "48 hours" }
];

export default function BiologicalIndicators() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/products" className="inline-flex items-center text-primary hover:underline mb-4">
              ← Back to Products
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Microscope className="w-7 h-7 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Biological <span className="text-gradient">Indicators</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Spore-based biological indicators providing the most accurate measurement of 
              sterilization process lethality per ISO 11138 standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 w-4 h-4" /> Download Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Product Range"
            title="Biological Indicator Products"
            subtitle="Self-contained and traditional formats for all sterilization methods."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-secondary font-medium mb-1">SKU: {product.sku}</div>
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
                    {product.organism}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="mr-1 w-4 h-4" /> Datasheet
                  </Button>
                  <Button size="sm">
                    <Package className="mr-1 w-4 h-4" /> Add to Quote
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Guide */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Reference Guide"
            title="Incubation Parameters"
            subtitle="Recommended incubation conditions by sterilization method."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {incubationGuide.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-foreground mb-4">{item.method}</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">Temperature:</span>
                    <span className="ml-2 font-medium text-secondary">{item.temp}</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Duration:</span>
                    <span className="ml-2 font-medium text-secondary">{item.time}</span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ensure Process Efficacy"
        subtitle="Contact us for biological indicator products and validation support."
        primaryCTA={{ label: "Get Quote", href: "/contact" }}
        secondaryCTA={{ label: "All Products", href: "/products" }}
      />
    </Layout>
  );
}
