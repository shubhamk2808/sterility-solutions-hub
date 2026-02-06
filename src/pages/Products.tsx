import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { Search, Filter, Download, Phone, Shield, Truck, Award, HeadphonesIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import chemicalIndicators from "@/assets/products/chemical-indicators.jpg";
import biologicalIndicators from "@/assets/products/biological-indicators.jpg";
import bowieDick from "@/assets/products/bowie-dick.jpg";
import accessories from "@/assets/products/accessories.jpg";

const productCategories = [
  {
    title: "Chemical Indicators",
    description: "Visual indicators for monitoring sterilization parameters including temperature, time, and sterilant presence.",
    image: chemicalIndicators,
    href: "/products/chemical-indicators",
    count: 24
  },
  {
    title: "Biological Indicators",
    description: "Spore-based indicators providing direct measurement of sterilization process lethality.",
    image: biologicalIndicators,
    href: "/products/biological-indicators",
    count: 18
  },
  {
    title: "Bowie-Dick Test Packs",
    description: "Standardized test packs for verifying steam sterilizer air removal and steam penetration.",
    image: bowieDick,
    href: "/products/bowie-dick",
    count: 12
  },
  {
    title: "Sterilization Accessories",
    description: "Essential accessories including wraps, pouches, labels, and sterilization trays.",
    image: accessories,
    href: "/products/accessories",
    count: 36
  }
];

const features = [
  { icon: Shield, title: "Quality Assured", description: "All products meet ISO and regulatory standards" },
  { icon: Truck, title: "Fast Shipping", description: "Global delivery with tracking" },
  { icon: Award, title: "Certified Products", description: "Full documentation provided" },
  { icon: HeadphonesIcon, title: "Technical Support", description: "Expert assistance available" }
];

const featuredProducts = [
  { name: "Type 5 Integrating Indicator", category: "Chemical", sku: "CI-T5-100" },
  { name: "Self-Contained BI (Steam)", category: "Biological", sku: "BI-SC-50" },
  { name: "Bowie-Dick Daily Test Pack", category: "Bowie-Dick", sku: "BD-DTP-30" },
  { name: "Sterilization Wrap 24x24", category: "Accessories", sku: "SW-24-500" }
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <PageHero
        badge="Product Catalog"
        title={<>Sterilization{" "}<span className="text-gradient">Monitoring Products</span></>}
        description="Comprehensive range of chemical indicators, biological indicators, and sterilization accessories for validating and monitoring your sterilization processes."
      >
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 w-4 h-4" /> Filter
          </Button>
        </div>
      </PageHero>

      {/* Features Bar */}
      <section className="py-8 bg-white border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Browse by Category"
            title="Product Categories"
            subtitle="Explore our comprehensive range of sterilization monitoring products."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <ProductCard
                key={index}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Popular Items"
            title="Featured Products"
            subtitle="Our most requested sterilization monitoring products."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl">
                <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                <div className="text-sm text-muted-foreground mb-4">SKU: {product.sku}</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Quote
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-2xl">
              <Download className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Download Catalog</h3>
              <p className="text-white/80 mb-6">
                Get our complete product catalog with specifications, ordering information, and technical data.
              </p>
              <Button variant="secondary" size="lg">
                Download PDF Catalog
              </Button>
            </AnimatedCard>
            <AnimatedCard delay={0.1} className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-8 rounded-2xl">
              <Phone className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Need Assistance?</h3>
              <p className="text-white/80 mb-6">
                Our product specialists can help you select the right products for your sterilization needs.
              </p>
              <Button variant="secondary" size="lg">
                Contact Sales Team
              </Button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Can't Find What You Need?"
        subtitle="Contact us for custom solutions or special product requirements."
        primaryCTA={{ label: "Request Quote", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </Layout>
  );
}
