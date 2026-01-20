import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  badge?: string;
}

export function FAQSection({ title, subtitle, faqs, badge }: FAQSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {(title || badge) && (
        <div className="text-center mb-10">
          {badge && (
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}

// Pre-built FAQ collections
export const generalFAQs: FAQ[] = [
  {
    question: "What sterilization methods does BiosteriMed offer?",
    answer: "BiosteriMed offers three primary sterilization methods: Ethylene Oxide (EO) sterilization for heat and moisture-sensitive devices, Steam sterilization (autoclave) for heat-resistant instruments, and Gamma irradiation for bulk processing of pre-packaged products. Our team can help you determine the optimal method for your specific product requirements."
  },
  {
    question: "What certifications does BiosteriMed hold?",
    answer: "We maintain comprehensive certifications including ISO 13485:2016 for quality management, ISO 11135:2014 for EO sterilization, ISO 17665-1:2006 for steam sterilization, and ISO 11137-1/2:2006 for radiation sterilization. Our facilities are FDA registered and we support CE marking requirements under MDR."
  },
  {
    question: "What is the typical turnaround time for sterilization services?",
    answer: "Turnaround times vary by method: Steam sterilization can be completed in 24-48 hours, EO sterilization typically requires 3-5 business days (including aeration), and Gamma irradiation is usually completed within 5-7 business days. Expedited services are available for urgent requirements."
  },
  {
    question: "Do you provide validation services?",
    answer: "Yes, we offer comprehensive validation services including IQ/OQ/PQ protocols, cycle development, dose mapping for gamma irradiation, bioburden testing, and sterility testing. Our validation team can support your regulatory submissions with complete documentation packages."
  },
  {
    question: "What documentation do you provide after sterilization?",
    answer: "We provide complete documentation including Certificates of Sterility/Irradiation, batch processing records, BI/CI test results, environmental monitoring data, calibration certificates, and all relevant validation protocols and reports for regulatory compliance."
  },
];

export const eoFAQs: FAQ[] = [
  {
    question: "What is Ethylene Oxide (EO) sterilization?",
    answer: "EO sterilization is a low-temperature gas sterilization process that uses ethylene oxide gas to kill microorganisms. It's ideal for heat and moisture-sensitive medical devices that cannot withstand the high temperatures of steam sterilization."
  },
  {
    question: "What materials are compatible with EO sterilization?",
    answer: "EO is compatible with most medical device materials including plastics, polymers, electronics, adhesives, and combination products. Materials that may be affected include certain rubbers and some specialty polymers. Our team can assess your specific product for compatibility."
  },
  {
    question: "How long does EO sterilization take?",
    answer: "A complete EO cycle typically takes 3-5 business days, including preconditioning (2-4 hours), exposure (2-6 hours), aeration (12-48 hours depending on product), and release testing (24-48 hours). The aeration time varies based on product material and packaging."
  },
  {
    question: "What are EO residue limits?",
    answer: "We comply with ISO 10993-7 residue limits. For short-term contact devices, the limit is 25 mg/device for EO and 250 mg/device for ECH. For prolonged contact devices, limits are 100 mg/device for EO and 2000 mg/device for ECH. We validate aeration times to meet these requirements."
  },
];

export const steamFAQs: FAQ[] = [
  {
    question: "What is steam sterilization?",
    answer: "Steam sterilization (autoclaving) uses high-pressure saturated steam at temperatures of 121-134°C to achieve sterilization. It's the fastest, most economical sterilization method for heat and moisture-resistant medical devices and instruments."
  },
  {
    question: "What cycle types are available?",
    answer: "We offer gravity displacement cycles for non-porous loads, pre-vacuum (dynamic air removal) cycles for porous loads and wrapped items, and flash sterilization cycles for immediate use. Cycle parameters are validated per ISO 17665 requirements."
  },
  {
    question: "Can electronics be steam sterilized?",
    answer: "Generally, electronics cannot withstand steam sterilization due to the high temperature (121-134°C) and moisture exposure. For electronic medical devices, EO sterilization or gamma irradiation would be more appropriate options."
  },
];

export const gammaFAQs: FAQ[] = [
  {
    question: "What is gamma irradiation sterilization?",
    answer: "Gamma irradiation uses high-energy gamma rays from Cobalt-60 sources to sterilize medical devices. The radiation penetrates packaging to sterilize products in their final sealed containers, making it ideal for single-use devices."
  },
  {
    question: "What is dose mapping and why is it important?",
    answer: "Dose mapping is a product-specific study that determines the radiation dose distribution throughout your product during processing. It ensures all areas of the product receive the minimum required dose while not exceeding the maximum limit for material compatibility."
  },
  {
    question: "What is the typical sterilization dose for medical devices?",
    answer: "The minimum sterilization dose is typically 25 kGy (2.5 Mrad) for most medical devices, validated per ISO 11137. The actual dose depends on the product's bioburden and the sterility assurance level (SAL) required, typically 10⁻⁶ for medical devices."
  },
];
