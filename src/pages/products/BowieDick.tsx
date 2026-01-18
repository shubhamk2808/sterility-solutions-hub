import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Download, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import bowieDick from "@/assets/products/bowie-dick.jpg";

const products = [
  {
    name: "Daily Bowie-Dick Test Pack",
    description: "Disposable test pack for daily steam penetration testing of pre-vacuum autoclaves.",
    sku: "BD-DAILY-01",
    specifications: {
      "Type": "Disposable",
      "Size": "280mm × 280mm × 25mm",
      "Usage": "Single use",
      "Standard": "ISO 11140-4",
    },
  },
  {
    name: "Hollow Load Test Device",
    description: "Process challenge device for testing steam penetration in hollow instruments.",
    sku: "BD-HOLLOW-01",
    specifications: {
      "Type": "Reusable PCD",
      "Configuration": "Hollow tube simulation",
      "Material": "Stainless steel",
      "Standard": "EN 867-5",
    },
  },
  {
    name: "Electronic BD Test",
    description: "Electronic Bowie-Dick test system with digital recording and documentation.",
    sku: "BD-ELEC-01",
    specifications: {
      "Type": "Electronic",
      "Output": "Digital printout",
      "Memory": "500 cycles",
      "Standard": "ISO 11140-4",
    },
  },
];

const testingProtocol = [
  { step: 1, title: "Preparation", description: "Ensure autoclave chamber is empty and at ambient temperature." },
  { step: 2, title: "Placement", description: "Place test pack at the geometric center of the lowest shelf." },
  { step: 3, title: "Run Cycle", description: "Run the standard pre-vacuum Bowie-Dick test cycle." },
  { step: 4, title: "Evaluation", description: "Remove pack immediately after cycle and evaluate indicator." },
  { step: 5, title: "Documentation", description: "Record results and take corrective action if failed." },
];

export default function BowieDick() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                Product Category
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bowie-Dick Test Packs
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Steam penetration and air removal testing for pre-vacuum steam sterilizers. 
                Essential for daily autoclave qualification and performance verification.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-orange-600 hover:bg-white/90">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  <a href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Catalog
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={bowieDick} 
                alt="Bowie-Dick Test Packs" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Bowie-Dick */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container-custom">
          <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Why Bowie-Dick Testing is Essential</h3>
              <p className="text-amber-700 dark:text-amber-300">
                Pre-vacuum steam sterilizers must be tested daily before the first load to verify proper 
                air removal and steam penetration. Failed tests may indicate air leaks, inadequate vacuum, 
                or steam quality issues that could compromise sterilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Products"
            title="Available Products"
            subtitle="Complete range of Bowie-Dick test solutions for autoclave verification."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-8">
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded mb-4 inline-block">
                    {product.sku}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full rounded-full" size="sm">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Protocol */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Protocol"
            title="Testing Procedure"
            subtitle="Follow this standardized procedure for Bowie-Dick testing."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {testingProtocol.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Bowie-Dick Test Products?"
        subtitle="Contact us for pricing and availability on Bowie-Dick test packs and systems."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View All Products", href: "/products" }}
        variant="default"
      />
    </Layout>
  );
}
