import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  delay?: number;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn("group h-full", className)}
    >
      <Link 
        to={href}
        className="flex flex-col h-full bg-card rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      >
        <div className="w-14 h-14 rounded-xl gradient-medical flex items-center justify-center mb-5">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        
        <h3 className="text-heading-4 text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}
