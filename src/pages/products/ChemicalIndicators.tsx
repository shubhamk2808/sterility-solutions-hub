import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Download, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import chemicalIndicators from "@/assets/products/chemical-indicators.jpg";

const products = [
  {
    name: "Type 1 Process Indicator",
    description: "External indicator tape for identifying processed vs unprocessed items.",
    sku: "CI-T1-TAPE",
    applications: ["Steam", "EO"],
    specifications: {
      "Type": "ISO 11140 Type 1",
      "Format": "Adhesive tape roll",
      "Length": "50m per roll",
      "Width": "19mm",
    },
  },
  {
    name: "Type 4 Multi-Variable Indicator",
    description: "Internal indicator responding to multiple sterilization parameters.",
    sku: "CI-T4-MV",
    applications: ["Steam"],
    specifications: {
      "Type": "ISO 11140 Type 4",
      "Format": "Indicator strips",
      "Pack Size": "250 strips",
      "Parameters": "Time, temperature, steam",
    },
  },
  {
    name: "Type 5 Integrating Indicator",
    description: "Integrating indicator correlating to biological indicator performance.",
    sku: "CI-T5-INT",
    applications: ["Steam", "EO"],
    specifications: {
      "Type": "ISO 11140 Type 5",
      "Format": "Card indicators",
      "Pack Size": "100 cards",
      "Correlation": "BI equivalent",
    },
  },
  {
    name: "Type 6 Emulating Indicator",
    description: "Cycle-specific indicator for critical sterilization parameter verification.",
    sku: "CI-T6-EMU",
    applications: ["Steam 134°C", "Steam 121°C"],
    specifications: {
      "Type": "ISO 11140 Type 6",
      "Format": "Indicator strips",
      "Pack Size": "200 strips",
      "Cycles": "134°C/3.5min or 121°C/15min",
    },
  },
];

export default function ChemicalIndicators() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
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
                Chemical Indicators
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Visual confirmation of sterilization exposure through color-changing indicators. 
                ISO 11140 compliant indicators for steam, EO, and other sterilization methods.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
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
                src={chemicalIndicators} 
                alt="Chemical Indicators" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Products"
            title="Available Products"
            subtitle="Comprehensive range of chemical indicators for all sterilization methods."
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
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {product.sku}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                          >
                            {app}
                          </span>
                        ))}
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

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Features"
            title="Why Choose Our Chemical Indicators"
            subtitle="Quality and compliance you can trust."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ISO 11140 compliant",
              "Clear color change",
              "Long shelf life",
              "Multiple formats available",
              "Technical support included",
              "Batch documentation",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Custom Solution?"
        subtitle="Contact us to discuss your specific requirements for chemical indicators."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View All Products", href: "/products" }}
        variant="gradient"
      />
    </Layout>
  );
}
