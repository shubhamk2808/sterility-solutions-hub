import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Download, ArrowLeft, Microscope, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import biologicalIndicators from "@/assets/products/biological-indicators.jpg";

const products = [
  {
    name: "Steam BI - Self Contained",
    description: "Self-contained biological indicator for steam sterilization with built-in growth medium.",
    sku: "BI-SC-134",
    organism: "Geobacillus stearothermophilus",
    readTime: "24-48 hours",
    specifications: {
      "Cycle": "134°C/3.5min or 121°C/15min",
      "Population": "≥1×10⁶ spores",
      "D-value": "≥1.5 min at 121°C",
      "Incubation": "55-60°C",
    },
  },
  {
    name: "Rapid Steam BI",
    description: "Rapid-read biological indicator with fluorescent readout in as little as 1 hour.",
    sku: "BI-RAPID-ST",
    organism: "Geobacillus stearothermophilus",
    readTime: "1-3 hours",
    specifications: {
      "Cycle": "132-134°C cycles",
      "Population": "≥1×10⁶ spores",
      "Read Method": "Fluorescent enzyme",
      "Incubation": "Auto-reader required",
    },
  },
  {
    name: "EO Biological Indicator",
    description: "Biological indicator for Ethylene Oxide sterilization monitoring.",
    sku: "BI-EO-SC",
    organism: "Bacillus atrophaeus",
    readTime: "48-168 hours",
    specifications: {
      "Cycle": "EO sterilization",
      "Population": "≥1×10⁶ spores",
      "D-value": "≥2.5 min at 54°C/600mg/L EO",
      "Incubation": "35-37°C",
    },
  },
  {
    name: "H₂O₂ Biological Indicator",
    description: "Biological indicator for hydrogen peroxide vapor sterilization.",
    sku: "BI-H2O2-SC",
    organism: "Geobacillus stearothermophilus",
    readTime: "24 hours",
    specifications: {
      "Cycle": "H₂O₂ vapor/plasma",
      "Population": "≥1×10⁶ spores",
      "Format": "Self-contained",
      "Incubation": "55-60°C",
    },
  },
];

const benefits = [
  { icon: Microscope, title: "Gold Standard", description: "BIs provide the highest level of sterility assurance." },
  { icon: Clock, title: "Rapid Options", description: "Get results in as little as 1 hour with rapid-read BIs." },
  { icon: Shield, title: "ISO 11138 Compliant", description: "All products meet international standards." },
];

export default function BiologicalIndicators() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary to-primary text-white overflow-hidden">
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
                Biological Indicators
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Spore-based sterility verification providing the highest level of assurance. 
                Available for steam, EO, H₂O₂, and other sterilization methods.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
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
                src={biologicalIndicators} 
                alt="Biological Indicators" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Products"
            title="Available Products"
            subtitle="Complete range of biological indicators for sterility assurance."
          />
          
          <div className="space-y-8">
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
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                          {product.sku}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Organism: </span>
                          <span className="font-medium text-foreground italic">{product.organism}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Read Time: </span>
                          <span className="font-medium text-foreground">{product.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-80">
                      <div className="bg-surface rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-4">Specifications</h4>
                        <div className="space-y-2">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{key}</span>
                              <span className="font-medium text-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                          <Button asChild className="flex-1 rounded-full" size="sm">
                            <Link to="/contact">Request Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Technical Support?"
        subtitle="Our experts can help you select the right biological indicators for your application."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View All Products", href: "/products" }}
        variant="gradient"
      />
    </Layout>
  );
}
