import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, CheckCircle, Download, ArrowRight, Package, FileText } from "lucide-react";

const products = [
  {
    name: "Type 1 Process Indicator",
    sku: "CI-T1-100",
    description: "External indicator for package exposure verification",
    features: ["Steam, EO, and Dry Heat versions", "Clear color change", "Tape and label formats"],
    image: "https://images.unsplash.com/photo-1583912267550-d974311a9a6e?w=300&h=200&fit=crop"
  },
  {
    name: "Type 4 Multi-Variable Indicator",
    sku: "CI-T4-100",
    description: "Reacts to two or more critical parameters",
    features: ["Temperature and time response", "Internal use", "Multiple sterilization methods"],
    image: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=300&h=200&fit=crop"
  },
  {
    name: "Type 5 Integrating Indicator",
    sku: "CI-T5-100",
    description: "Reacts to all critical parameters over specified range",
    features: ["Correlates with BI performance", "Steam and EO versions", "High sensitivity"],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop"
  },
  {
    name: "Type 6 Emulating Indicator",
    sku: "CI-T6-100",
    description: "Cycle-specific indicator for defined sterilization cycle",
    features: ["Specific cycle parameters", "Precise endpoint", "Clear pass/fail indication"],
    image: "https://images.unsplash.com/photo-1576671414121-aa2d60f2c1a1?w=300&h=200&fit=crop"
  }
];

const specifications = [
  { label: "Classification", value: "ISO 11140-1 Compliant" },
  { label: "Storage", value: "15-30°C, <60% RH" },
  { label: "Shelf Life", value: "24-36 months" },
  { label: "Packaging", value: "100-1000 units/box" }
];

export default function ChemicalIndicators() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
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
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <FlaskConical className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chemical <span className="text-gradient">Indicators</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Visual indicators for monitoring sterilization parameters. Available in Types 1-6 
              per ISO 11140-1 for steam, EO, and dry heat sterilization processes.
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
            title="Available Products"
            subtitle="Complete range of chemical indicators for all sterilization monitoring needs."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 h-48 md:h-auto">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="text-sm text-primary font-medium mb-1">SKU: {product.sku}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
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
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Technical Data"
            title="General Specifications"
          />
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {specifications.map((spec, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl text-center">
                <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                <div className="font-semibold text-primary">{spec.value}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Technical Assistance?"
        subtitle="Our team can help you select the right indicators for your processes."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View All Products", href: "/products" }}
      />
    </Layout>
  );
}
