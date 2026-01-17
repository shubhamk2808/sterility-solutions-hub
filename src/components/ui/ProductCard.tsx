import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  productCount?: number;
  delay?: number;
  className?: string;
}

export function ProductCard({
  title,
  description,
  image,
  href,
  productCount,
  delay = 0,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn("group", className)}
    >
      <Link 
        to={href}
        className="block bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-surface">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {productCount && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
              {productCount} Products
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-heading-4 text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            View Products
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
