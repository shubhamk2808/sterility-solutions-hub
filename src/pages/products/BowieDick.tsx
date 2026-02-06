import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Box, CheckCircle, Download, ArrowRight, Package, FileText, AlertCircle } from "lucide-react";

const products = [
  {
    name: "Daily Test Pack (Disposable)",
    sku: "BD-DTP-30",
    description: "Single-use test pack for daily air removal and steam penetration testing",
    features: ["Ready to use", "No preparation required", "Clear pass/fail indication"],
    usage: "Daily"
  },
  {
    name: "Process Challenge Device",
    sku: "BD-PCD-10",
    description: "Reusable PCD for routine monitoring of pre-vacuum steam sterilizers",
    features: ["Reusable housing", "Replacement sheets available", "Cost-effective"],
    usage: "Routine"
  },
  {
    name: "Electronic Bowie-Dick",
    sku: "BD-ELEC-1",
    description: "Electronic monitoring system for automated Bowie-Dick testing",
    features: ["Digital readout", "Data logging", "Wireless connectivity option"],
    usage: "Advanced"
  },
  {
    name: "Hollow Load Test Pack",
    sku: "BD-HLP-20",
    description: "Specialized test pack for hollow/lumened device sterilization",
    features: ["Simulates hollow loads", "Challenging test", "ISO 11140-4 compliant"],
    usage: "Specialized"
  }
];

const testingProtocol = [
  { step: 1, title: "Run Empty Chamber", description: "Perform test at start of day on empty, warmed-up sterilizer" },
  { step: 2, title: "Place Test Pack", description: "Position pack in designated location (usually front-bottom)" },
  { step: 3, title: "Run Standard Cycle", description: "Execute standard pre-vacuum cycle (134°C, 3.5 min)" },
  { step: 4, title: "Evaluate Results", description: "Check for uniform color change across entire indicator sheet" }
];

export default function BowieDick() {
  return (
    <Layout>
      <PageHero
        badge="Bowie-Dick Test Packs"
        title={<>Bowie-Dick <span className="text-gradient">Test Packs</span></>}
        description="Standardized test packs for verifying steam sterilizer air removal and steam penetration per EN 285 and ISO 11140-4 requirements."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 w-4 h-4" /> Download Guide
          </Button>
        </div>
      </PageHero>

      {/* Info Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-700">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Required daily test for pre-vacuum steam sterilizers per regulatory guidelines</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Product Range"
            title="Bowie-Dick Test Products"
            subtitle="Disposable, reusable, and electronic options for all testing needs."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-slate-50 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-amber-600 font-medium mb-1">SKU: {product.sku}</div>
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  </div>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs">
                    {product.usage}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
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

      {/* Testing Protocol */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="How to Test"
            title="Testing Protocol"
            subtitle="Standard procedure for Bowie-Dick testing."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {testingProtocol.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ensure Sterilizer Performance"
        subtitle="Contact us for Bowie-Dick test products and testing guidance."
        primaryCTA={{ label: "Get Quote", href: "/contact" }}
        secondaryCTA={{ label: "All Products", href: "/products" }}
      />
    </Layout>
  );
}
