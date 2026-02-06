import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceComparisonTool } from "@/components/ui/ServiceComparisonTool";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { motion } from "framer-motion";

export default function Compare() {
  return (
    <Layout>
      <PageHero
        badge="Comparison Tool"
        title={<>Compare <span className="text-gradient">Sterilization Methods</span></>}
        description="Use our interactive comparison tool to evaluate EO, Steam, and Gamma sterilization methods side-by-side. Find the optimal solution for your products and requirements."
      />

      {/* Full Comparison Tool */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ServiceComparisonTool showHeader={false} />
        </div>
      </section>

      {/* Decision Guide */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge="Decision Guide"
            title="Which Method is Right for You?"
            subtitle="Quick guidelines to help you choose the appropriate sterilization technology."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Choose EO When:</h3>
              <ul className="space-y-3">
                {[
                  "Your product is heat-sensitive",
                  "Complex geometries need penetration",
                  "Electronics or batteries are present",
                  "Plastic materials must be preserved",
                  "Low temperature is critical"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Choose Steam When:</h3>
              <ul className="space-y-3">
                {[
                  "Heat-resistant metals or glass",
                  "Surgical instruments to sterilize",
                  "Fast turnaround is needed",
                  "No chemical residuals allowed",
                  "Cost-effectiveness is priority"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Choose Gamma When:</h3>
              <ul className="space-y-3">
                {[
                  "Terminal sterilization in packaging",
                  "High-volume production runs",
                  "Dense packaging materials",
                  "No post-processing needed",
                  "Single-use medical devices"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Still Not Sure Which Method to Choose?"
        subtitle="Our sterilization experts can evaluate your products and recommend the optimal method."
        primaryCTA={{ label: "Get Expert Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View All Services", href: "/services" }}
      />
    </Layout>
  );
}
