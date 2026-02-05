import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(({ 
  badge, 
  title, 
  subtitle, 
  align = "center",
  className 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-heading-1 md:text-display-2 text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-body-lg text-muted-foreground",
          align === "center" && "max-w-2xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
});

SectionHeader.displayName = "SectionHeader";
