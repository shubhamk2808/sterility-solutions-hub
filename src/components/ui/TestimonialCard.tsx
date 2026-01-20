import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  metric?: {
    value: string;
    label: string;
  };
  rating?: number;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  metric,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl border border-border p-6 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Metric */}
      {metric && (
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
          <div className="text-2xl font-bold text-primary">{metric.value}</div>
          <div className="text-sm text-muted-foreground">{metric.label}</div>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{title}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    quote: "BiosteriMed's EO sterilization services have been instrumental in our product launch success. Their validation expertise and quick turnaround exceeded our expectations.",
    author: "Dr. Sarah Chen",
    title: "VP Quality Assurance",
    company: "MedTech Innovations",
    metric: { value: "40% faster", label: "Product time-to-market" },
    rating: 5,
  },
  {
    quote: "We've reduced our contamination incidents to zero since partnering with BiosteriMed. Their rigorous quality management and documentation support are exceptional.",
    author: "James Richardson",
    title: "CSSD Director",
    company: "Regional Medical Center",
    metric: { value: "0%", label: "Contamination rate" },
    rating: 5,
  },
  {
    quote: "The technical expertise and regulatory knowledge at BiosteriMed is unmatched. They've become a true extension of our quality team.",
    author: "Maria Garcia",
    title: "Regulatory Affairs Manager",
    company: "Global Pharma Inc.",
    metric: { value: "100%", label: "Audit pass rate" },
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Healthcare Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how BiosteriMed helps healthcare organizations achieve their sterility assurance goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
