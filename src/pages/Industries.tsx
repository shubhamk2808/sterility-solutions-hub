import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, Factory, FlaskConical, Microscope, 
  CheckCircle, ArrowRight, Shield, Clock, FileText, Award
} from "lucide-react";

const industries = [
  {
    id: "hospitals",
    icon: Building2,
    title: "Hospitals & Clinics",
    description: "Comprehensive sterilization support for healthcare facilities of all sizes.",
    challenges: [
      "Maintaining sterility assurance across diverse instrument types",
      "Meeting joint commission and regulatory requirements",
      "Managing high-volume processing demands",
      "Ensuring staff competency and training"
    ],
    solutions: [
      "Full range of biological and chemical indicators",
      "Bowie-Dick testing products for daily verification",
      "Process validation and documentation support",
      "Training materials and technical guidance"
    ],
    products: ["Chemical Indicators", "Biological Indicators", "Bowie-Dick Packs", "Sterilization Wraps"]
  },
  {
    id: "manufacturers",
    icon: Factory,
    title: "Medical Device Manufacturers",
    description: "Contract sterilization services for medical device companies worldwide.",
    challenges: [
      "FDA and international regulatory compliance",
      "Product-specific validation requirements",
      "Scalable capacity for production volumes",
      "Complete documentation for audits"
    ],
    solutions: [
      "EO, Steam, and Gamma sterilization services",
      "Cycle development and validation",
      "Parametric release programs",
      "Full regulatory documentation packages"
    ],
    products: ["EO Sterilization", "Gamma Irradiation", "Validation Services", "Documentation"]
  },
  {
    id: "pharma",
    icon: FlaskConical,
    title: "Pharmaceutical Companies",
    description: "GMP-compliant sterilization for pharmaceutical manufacturing.",
    challenges: [
      "cGMP and aseptic processing requirements",
      "Bioburden control and reduction",
      "Clean room compatible processes",
      "Stability and compatibility testing"
    ],
    solutions: [
      "Validated low-bioburden processing",
      "Endotoxin reduction capabilities",
      "Clean room grade packaging options",
      "Stability study support"
    ],
    products: ["Biological Indicators", "Environmental Monitoring", "Sterility Testing", "Validation"]
  },
  {
    id: "research",
    icon: Microscope,
    title: "Research Laboratories",
    description: "Sterilization products and services for research and academic institutions.",
    challenges: [
      "Varied and specialized equipment needs",
      "Budget constraints and cost efficiency",
      "Small batch and custom requirements",
      "Technical expertise availability"
    ],
    solutions: [
      "Flexible ordering with small minimums",
      "Technical consultation and support",
      "Custom cycle development",
      "Educational resources and training"
    ],
    products: ["Steam Indicators", "Autoclaving Supplies", "Lab Consumables", "Technical Support"]
  }
];

const whyChoose = [
  { icon: Shield, title: "Regulatory Expertise", description: "Deep knowledge of FDA, ISO, and international requirements" },
  { icon: Clock, title: "Fast Turnaround", description: "Standard processing within 5-7 business days" },
  { icon: FileText, title: "Documentation", description: "Complete batch records and certificates" },
  { icon: Award, title: "Certified Processes", description: "ISO 13485, 11135, 17665, 11137 compliant" }
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-medical-blue/10 text-medical-blue rounded-full text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tailored Solutions for{" "}
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From hospitals to medical device manufacturers, we understand the unique 
              sterilization challenges each industry faces and provide targeted solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-medical-blue/10 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-medical-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/contact">
                        Discuss Your Needs <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <AnimatedCard className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-4">Relevant Products & Services</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {industry.products.map((product, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg text-center">
                          <span className="text-sm font-medium text-medical-blue">{product}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Need more info?</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/products">Browse Products</Link>
                        </Button>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Why BiosteriMed"
            title="Industry-Leading Expertise"
            subtitle="What sets us apart in serving diverse healthcare industries."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-medical-blue" />
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
        title="Which Industry Do You Represent?"
        subtitle="Let's discuss how we can support your specific sterilization needs."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </Layout>
  );
}
