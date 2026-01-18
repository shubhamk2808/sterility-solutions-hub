import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Filter, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

import chemicalIndicators from "@/assets/products/chemical-indicators.jpg";
import biologicalIndicators from "@/assets/products/biological-indicators.jpg";
import bowieDick from "@/assets/products/bowie-dick.jpg";
import accessories from "@/assets/products/accessories.jpg";

const categories = [
  {
    title: "Chemical Indicators",
    description: "Visual confirmation of sterilization exposure through color-changing indicators. Available for steam, EO, and other sterilization methods.",
    image: chemicalIndicators,
    href: "/products/chemical-indicators",
    productCount: 24,
    features: ["Steam indicators", "EO indicators", "Multi-variable", "Integrating indicators"],
  },
  {
    title: "Biological Indicators",
    description: "Spore-based sterility verification providing the highest level of assurance. Available for all major sterilization methods.",
    image: biologicalIndicators,
    href: "/products/biological-indicators",
    productCount: 18,
    features: ["Steam BIs", "EO BIs", "Self-contained", "Rapid readout"],
  },
  {
    title: "Bowie-Dick Test Packs",
    description: "Steam penetration and air removal testing for pre-vacuum steam sterilizers. Essential for daily autoclave testing.",
    image: bowieDick,
    href: "/products/bowie-dick",
    productCount: 8,
    features: ["Disposable packs", "Electronic testing", "ISO 11140 compliant", "Daily testing"],
  },
  {
    title: "Accessories",
    description: "Complete range of sterilization support products including incubators, wraps, pouches, and documentation supplies.",
    image: accessories,
    href: "/products/accessories",
    productCount: 32,
    features: ["Incubators", "Sterilization wraps", "Pouches & reels", "Labels & tape"],
  },
];

const featuredProducts = [
  { name: "Steam BI - Self Contained", category: "Biological Indicators", sku: "BI-SC-134" },
  { name: "Type 6 Integrating Indicator", category: "Chemical Indicators", sku: "CI-T6-INT" },
  { name: "Daily Bowie-Dick Test Pack", category: "Bowie-Dick", sku: "BD-DAILY-01" },
  { name: "Mini Incubator 56°C", category: "Accessories", sku: "INC-MINI-56" },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sterilization Monitoring Products
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Complete range of chemical indicators, biological indicators, test packs, 
              and accessories for comprehensive sterility assurance and compliance.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 rounded-full bg-white text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Categories"
            title="Browse by Category"
            subtitle="Explore our comprehensive range of sterilization monitoring products."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={category.href}
                  className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {category.productCount} Products
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-surface text-muted-foreground text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      View Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Featured"
            title="Popular Products"
            subtitle="Our most requested sterilization monitoring products."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <p className="text-xs text-primary font-medium">SKU: {product.sku}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact" className="flex items-center gap-2">
                Request Product Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Help Selecting Products?"
        subtitle="Our technical team can help you choose the right products for your sterilization needs."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "Download Catalog", href: "/contact", download: true }}
        variant="gradient"
      />
    </Layout>
  );
}
