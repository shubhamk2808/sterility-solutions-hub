import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, FileText, Beaker, Settings, Building2, HelpCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "services" | "products" | "resources" | "pages";
  icon: typeof Search;
  keywords: string[];
}

const searchData: SearchResult[] = [
  // Services
  {
    id: "eo-sterilization",
    title: "EO Sterilization",
    description: "Ethylene Oxide sterilization for heat-sensitive medical devices",
    href: "/services/eo-sterilization",
    category: "services",
    icon: Beaker,
    keywords: ["ethylene oxide", "eo", "gas", "low temperature", "medical devices"],
  },
  {
    id: "steam-sterilization",
    title: "Steam Sterilization",
    description: "High-pressure steam autoclave sterilization",
    href: "/services/steam-sterilization",
    category: "services",
    icon: Beaker,
    keywords: ["steam", "autoclave", "moist heat", "surgical instruments"],
  },
  {
    id: "gamma-irradiation",
    title: "Gamma Irradiation",
    description: "Gamma ray sterilization for bulk processing",
    href: "/services/gamma-irradiation",
    category: "services",
    icon: Beaker,
    keywords: ["gamma", "radiation", "irradiation", "cobalt-60", "bulk"],
  },
  // Products
  {
    id: "chemical-indicators",
    title: "Chemical Indicators",
    description: "Visual confirmation of sterilization exposure",
    href: "/products/chemical-indicators",
    category: "products",
    icon: FileText,
    keywords: ["chemical", "indicator", "tape", "strips", "visual"],
  },
  {
    id: "biological-indicators",
    title: "Biological Indicators",
    description: "Spore-based sterility verification",
    href: "/products/biological-indicators",
    category: "products",
    icon: FileText,
    keywords: ["biological", "bi", "spore", "sterility", "verification"],
  },
  {
    id: "bowie-dick",
    title: "Bowie-Dick Test Packs",
    description: "Steam penetration and air removal testing",
    href: "/products/bowie-dick",
    category: "products",
    icon: FileText,
    keywords: ["bowie", "dick", "test", "pack", "steam", "penetration"],
  },
  {
    id: "accessories",
    title: "Sterilization Accessories",
    description: "Support products and supplies",
    href: "/products/accessories",
    category: "products",
    icon: Settings,
    keywords: ["accessories", "supplies", "pouches", "wraps"],
  },
  // Resources
  {
    id: "faq",
    title: "FAQ",
    description: "Frequently asked questions about sterilization",
    href: "/faq",
    category: "resources",
    icon: HelpCircle,
    keywords: ["faq", "questions", "help", "answers"],
  },
  {
    id: "resources",
    title: "Technical Resources",
    description: "Brochures, datasheets, and documentation",
    href: "/resources",
    category: "resources",
    icon: FileText,
    keywords: ["resources", "brochure", "datasheet", "documentation", "download"],
  },
  // Pages
  {
    id: "about",
    title: "About Us",
    description: "Learn about BiosteriMed's mission and history",
    href: "/about",
    category: "pages",
    icon: Building2,
    keywords: ["about", "company", "mission", "history", "team"],
  },
  {
    id: "quality",
    title: "Quality & Certifications",
    description: "ISO certifications and quality standards",
    href: "/quality",
    category: "pages",
    icon: FileText,
    keywords: ["quality", "certification", "iso", "fda", "compliance"],
  },
  {
    id: "industries",
    title: "Industries We Serve",
    description: "Healthcare sectors we support",
    href: "/industries",
    category: "pages",
    icon: Building2,
    keywords: ["industries", "healthcare", "hospital", "pharmaceutical", "laboratory"],
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch with our team",
    href: "/contact",
    category: "pages",
    icon: Building2,
    keywords: ["contact", "quote", "inquiry", "email", "phone"],
  },
];

const categoryLabels = {
  services: "Services",
  products: "Products",
  resources: "Resources",
  pages: "Pages",
};

interface GlobalSearchProps {
  variant?: "header" | "standalone";
}

export function GlobalSearch({ variant = "header" }: GlobalSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filterResults = useCallback((searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return searchData;
    
    const lowerQuery = searchQuery.toLowerCase();
    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some((kw) => kw.includes(lowerQuery))
      );
    });
  }, []);

  const filteredResults = filterResults(query);
  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    navigate(href);
  };

  if (variant === "standalone") {
    return (
      <div className="relative w-full max-w-2xl mx-auto">
        <div 
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 w-full px-4 py-3 bg-card border border-border rounded-xl cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200"
        >
          <Search className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground flex-1">Search services, products, resources...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput 
            placeholder="Search BiosteriMed..." 
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(groupedResults).map(([category, items]) => (
              <CommandGroup key={category} heading={categoryLabels[category as keyof typeof categoryLabels]}>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => handleSelect(item.href)}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandDialog>
      </div>
    );
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 text-muted-foreground"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search BiosteriMed..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedResults).map(([category, items], idx) => (
            <>
              {idx > 0 && <CommandSeparator />}
              <CommandGroup key={category} heading={categoryLabels[category as keyof typeof categoryLabels]}>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => handleSelect(item.href)}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

// Floating Search Button for mobile
export function FloatingSearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center md:hidden"
        aria-label="Open search"
      >
        <Search className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute inset-x-0 bottom-0 bg-background rounded-t-3xl shadow-2xl"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Search</h3>
                  <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-muted">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <GlobalSearch variant="standalone" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
