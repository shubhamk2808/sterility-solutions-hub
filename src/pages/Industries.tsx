import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Factory, FlaskConical, Microscope, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

const industries = [
  {
    icon: Building2,
    title: "Hospitals & Clinics",
    description: "Comprehensive sterilization support for Central Sterile Supply Departments (CSSD) ensuring patient safety and regulatory compliance.",
    challenges: [
      "Maintaining sterility assurance for surgical instruments",
      "Meeting Joint Commission and regulatory requirements",
      "Managing high-volume sterilization loads",
      "Training staff on best practices",
    ],
    solutions: [
      "Contract sterilization services for overflow capacity",
      "Full line of monitoring products (BIs, CIs, test packs)",
      "Validation and process qualification support",
      "On-site training and technical consultation",
    ],
    services: ["Steam Sterilization", "EO Sterilization"],
    products: ["Biological Indicators", "Chemical Indicators", "Bowie-Dick Test Packs"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Factory,
    title: "Medical Device Manufacturers",
    description: "Scalable sterilization solutions for OEM medical device companies from development through commercial production.",
    challenges: [
      "Validating sterilization processes for regulatory submission",
      "Scaling from R&D to commercial volumes",
      "Managing product-specific cycle development",
      "Maintaining supply chain efficiency",
    ],
    solutions: [
      "Full sterilization validation services (IQ/OQ/PQ)",
      "Cycle development for new products",
      "Contract sterilization at multiple volume levels",
      "Regulatory documentation support",
    ],
    services: ["EO Sterilization", "Gamma Irradiation", "Steam Sterilization"],
    products: ["Custom BI Validation Sets", "Process Challenge Devices"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical Companies",
    description: "GMP-compliant sterilization for pharmaceutical products, combination devices, and drug delivery systems.",
    challenges: [
      "Maintaining GMP compliance throughout sterilization",
      "Preserving drug stability during sterilization",
      "Complete batch documentation for FDA submissions",
      "Sterility testing and validation",
    ],
    solutions: [
      "GMP-compliant sterilization facilities",
      "Low-dose EO and radiation options for sensitive products",
      "Complete regulatory documentation packages",
      "Sterility testing services",
    ],
    services: ["EO Sterilization", "Gamma Irradiation"],
    products: ["Pharmaceutical-grade BIs", "Environmental Monitoring"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Microscope,
    title: "Research Laboratories",
    description: "Flexible sterilization solutions for research institutions, universities, and laboratory facilities.",
    challenges: [
      "Sterilizing diverse equipment and materials",
      "Managing small and variable batch sizes",
      "Maintaining research timelines",
      "Budget constraints",
    ],
    solutions: [
      "Flexible batch processing for variable volumes",
      "Quick turnaround for research timelines",
      "Cost-effective monitoring solutions",
      "Technical consultation for special requirements",
    ],
    services: ["Steam Sterilization", "EO Sterilization"],
    products: ["Laboratory-scale Indicators", "Compact Incubators"],
    color: "from-orange-500 to-amber-500",
  },
];

export default function Industries() {
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
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted Across Healthcare & Life Sciences
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              BiosteriMed provides specialized sterilization solutions tailored to the unique 
              requirements of each industry we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id={industry.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Header */}
                  <div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                      <industry.icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {industry.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Relevant Services</h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.services.map((service) => (
                            <span key={service} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Recommended Products</h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.products.map((product) => (
                            <span key={product} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div className="p-6 bg-surface rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground mb-4">Industry Challenges</h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground mb-4">Our Solutions</h3>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="rounded-full">
                      <Link to="/contact" className="flex items-center gap-2">
                        Discuss Your Needs <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {index < industries.length - 1 && (
                  <div className="mt-24 border-b border-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Partner With Us?"
        subtitle="Contact our team to discuss how we can support your industry-specific sterilization needs."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
        variant="gradient"
      />
    </Layout>
  );
}
