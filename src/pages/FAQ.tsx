import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection, generalFAQs, eoFAQs, steamFAQs, gammaFAQs } from "@/components/ui/FAQSection";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, Wind, Flame, Radiation, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const allFAQs = [
  ...generalFAQs.map(f => ({ ...f, category: "general" })),
  ...eoFAQs.map(f => ({ ...f, category: "eo" })),
  ...steamFAQs.map(f => ({ ...f, category: "steam" })),
  ...gammaFAQs.map(f => ({ ...f, category: "gamma" })),
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFAQs = searchQuery
    ? allFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <Layout>
      <PageHero
        badge="Help Center"
        title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
        description="Find answers to common questions about our sterilization services, processes, and compliance requirements."
      >
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg rounded-xl"
          />
        </div>
      </PageHero>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Search Results */}
          {filteredFAQs ? (
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Search Results ({filteredFAQs.length})
                </h2>
                <p className="text-muted-foreground">
                  {filteredFAQs.length > 0 
                    ? `Found ${filteredFAQs.length} results for "${searchQuery}"`
                    : `No results found for "${searchQuery}"`
                  }
                </p>
              </div>
              {filteredFAQs.length > 0 && (
                <FAQSection faqs={filteredFAQs} />
              )}
            </div>
          ) : (
            /* Tabbed FAQs */
            <Tabs defaultValue="general" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted p-1 rounded-xl">
                <TabsTrigger value="general" className="flex items-center gap-2 rounded-lg">
                  <HelpCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">General</span>
                </TabsTrigger>
                <TabsTrigger value="eo" className="flex items-center gap-2 rounded-lg">
                  <Wind className="w-4 h-4" />
                  <span className="hidden sm:inline">EO</span>
                </TabsTrigger>
                <TabsTrigger value="steam" className="flex items-center gap-2 rounded-lg">
                  <Flame className="w-4 h-4" />
                  <span className="hidden sm:inline">Steam</span>
                </TabsTrigger>
                <TabsTrigger value="gamma" className="flex items-center gap-2 rounded-lg">
                  <Radiation className="w-4 h-4" />
                  <span className="hidden sm:inline">Gamma</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <FAQSection 
                  title="General Questions"
                  subtitle="Common questions about BiosteriMed and our services."
                  faqs={generalFAQs} 
                />
              </TabsContent>
              
              <TabsContent value="eo">
                <FAQSection 
                  title="EO Sterilization"
                  subtitle="Questions about Ethylene Oxide sterilization process."
                  faqs={eoFAQs} 
                />
              </TabsContent>
              
              <TabsContent value="steam">
                <FAQSection 
                  title="Steam Sterilization"
                  subtitle="Questions about autoclave and steam sterilization."
                  faqs={steamFAQs} 
                />
              </TabsContent>
              
              <TabsContent value="gamma">
                <FAQSection 
                  title="Gamma Irradiation"
                  subtitle="Questions about gamma radiation sterilization."
                  faqs={gammaFAQs} 
                />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our technical team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:technical@biosterimed.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Email Technical Support
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact our team today to discuss your sterilization requirements."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />
    </Layout>
  );
}
