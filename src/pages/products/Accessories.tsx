import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, CheckCircle, Download, ArrowRight, FileText, ShoppingCart } from "lucide-react";

const categories = [
  {
    name: "Sterilization Wraps",
    products: [
      { name: "SMS Wrap 24x24\"", sku: "SW-SMS-24", price: "Per case (500 sheets)" },
      { name: "SMS Wrap 36x36\"", sku: "SW-SMS-36", price: "Per case (250 sheets)" },
      { name: "Paper/Poly Wrap", sku: "SW-PP-24", price: "Per case (500 sheets)" }
    ]
  },
  {
    name: "Sterilization Pouches",
    products: [
      { name: "Self-Seal Pouch 3.5x9\"", sku: "SP-SS-3509", price: "Per box (200 pouches)" },
      { name: "Self-Seal Pouch 5.25x10\"", sku: "SP-SS-5210", price: "Per box (200 pouches)" },
      { name: "Peel Pouch 7.5x13\"", sku: "SP-PL-7513", price: "Per box (100 pouches)" }
    ]
  },
  {
    name: "Indicator Labels & Tape",
    products: [
      { name: "Steam Indicator Tape", sku: "IT-STEAM-1", price: "Per roll (60 yards)" },
      { name: "EO Indicator Tape", sku: "IT-EO-1", price: "Per roll (60 yards)" },
      { name: "Sterile Labels", sku: "IL-STER-500", price: "Per roll (500 labels)" }
    ]
  },
  {
    name: "Sterilization Containers",
    products: [
      { name: "Rigid Container (Full)", sku: "RC-FULL-1", price: "Per unit" },
      { name: "Rigid Container (Half)", sku: "RC-HALF-1", price: "Per unit" },
      { name: "Filter Retention Plate", sku: "RC-FRP-10", price: "Per pack (10 plates)" }
    ]
  }
];

const features = [
  "FDA cleared and CE marked products",
  "Compatible with all major sterilization methods",
  "Lot-traceable for quality assurance",
  "Technical documentation included"
];

export default function Accessories() {
  return (
    <Layout>
      <PageHero
        badge="Sterilization Accessories"
        title={<>Sterilization <span className="text-gradient">Accessories</span></>}
        description="Complete range of sterilization wraps, pouches, labels, and containers to support your sterile processing operations."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 w-4 h-4" /> Download Catalog
          </Button>
        </div>
      </PageHero>

      {/* Features Bar */}
      <section className="py-6 bg-indigo-50 border-y border-indigo-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-indigo-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Product Range"
            title="Accessory Categories"
            subtitle="Everything you need for sterile packaging and processing."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-indigo-500" />
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.products.map((product, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground">{product.name}</div>
                        <div className="text-sm text-muted-foreground">SKU: {product.sku} • {product.price}</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <FileText className="mr-1 w-4 h-4" /> View All
                  </Button>
                  <Button size="sm" className="flex-1">
                    Request Quote
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Custom Packaging Solutions?"
        subtitle="Contact us for specialized packaging requirements and bulk orders."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "All Products", href: "/products" }}
      />
    </Layout>
  );
}
