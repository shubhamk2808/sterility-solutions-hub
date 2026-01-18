import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, ArrowLeft, Thermometer, Package, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import accessories from "@/assets/products/accessories.jpg";

const categories = [
  {
    icon: Thermometer,
    title: "Incubators",
    description: "Precision incubators for biological indicator culture.",
    products: [
      { name: "Mini Incubator 56°C", sku: "INC-MINI-56", description: "Compact incubator for steam BIs" },
      { name: "Dual-Temp Incubator", sku: "INC-DUAL", description: "35°C and 56°C chambers" },
      { name: "Auto-Reader System", sku: "INC-AUTO", description: "Automated fluorescent reading" },
    ],
  },
  {
    icon: Package,
    title: "Sterilization Packaging",
    description: "Wraps, pouches, and reels for sterile barrier systems.",
    products: [
      { name: "CSR Wrap - Blue", sku: "WRAP-CSR-B", description: "SMS sterilization wrap" },
      { name: "Self-Seal Pouches", sku: "POUCH-SS", description: "Various sizes available" },
      { name: "Flat Reels", sku: "REEL-FLAT", description: "Heat-seal pouching material" },
    ],
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Labels, tape, and record-keeping supplies.",
    products: [
      { name: "Indicator Tape - Steam", sku: "TAPE-IND-ST", description: "Type 1 process indicator tape" },
      { name: "Sterilization Labels", sku: "LABEL-STER", description: "Lot tracking labels" },
      { name: "Log Books", sku: "LOG-BOOK", description: "Sterilization cycle records" },
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Cleaning and maintenance supplies for sterilizers.",
    products: [
      { name: "Chamber Cleaner", sku: "CLEAN-CHAM", description: "Non-corrosive chamber cleaner" },
      { name: "Gasket Lubricant", sku: "LUB-GASKET", description: "Door gasket conditioner" },
      { name: "Water Treatment", sku: "WATER-TX", description: "Steam generator water treatment" },
    ],
  },
];

export default function Accessories() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white overflow-hidden">
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
                Accessories & Supplies
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Complete range of sterilization support products including incubators, 
                packaging materials, documentation supplies, and maintenance products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-700 hover:bg-white/90">
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
                src={accessories} 
                alt="Sterilization Accessories" 
                className="rounded-2xl shadow-2xl"
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
            title="Browse Accessories"
            subtitle="Everything you need to support your sterilization operations."
          />
          
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-8 border-b border-border bg-surface">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, index) => (
                      <motion.div
                        key={product.sku}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-6 bg-surface rounded-xl border border-border hover:shadow-md transition-shadow"
                      >
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded mb-3 inline-block">
                          {product.sku}
                        </span>
                        <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                        <Button asChild variant="outline" size="sm" className="rounded-full w-full">
                          <Link to="/contact">Inquire</Link>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Sterilization Supplies?"
        subtitle="Contact us for bulk pricing and customized supply solutions."
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "View All Products", href: "/products" }}
        variant="gradient"
      />
    </Layout>
  );
}
