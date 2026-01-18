import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-biosterimed.png";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "EO Sterilization", href: "/services/eo-sterilization", description: "Ethylene Oxide sterilization for heat-sensitive devices" },
      { label: "Steam Sterilization", href: "/services/steam-sterilization", description: "High-pressure steam autoclave sterilization" },
      { label: "Gamma Irradiation", href: "/services/gamma-irradiation", description: "Gamma ray sterilization for bulk processing" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Chemical Indicators", href: "/products/chemical-indicators", description: "Visual confirmation of sterilization" },
      { label: "Biological Indicators", href: "/products/biological-indicators", description: "Spore-based sterility verification" },
      { label: "Bowie-Dick Test Packs", href: "/products/bowie-dick", description: "Steam penetration testing" },
      { label: "Accessories", href: "/products/accessories", description: "Sterilization support products" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant = "solid" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const shouldBeTransparent = variant === "transparent" || isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isTransparent = shouldBeTransparent && !scrolled && !mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent" 
          : "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border"
      }`}
    >
      {/* Top bar - only show when scrolled or not transparent */}
      <AnimatePresence>
        {(!isTransparent || scrolled) && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden lg:block bg-primary text-primary-foreground overflow-hidden"
          >
            <div className="container-custom py-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Phone className="h-4 w-4" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <a href="mailto:info@biosterimed.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Mail className="h-4 w-4" />
                    <span>info@biosterimed.com</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>ISO 13485 | ISO 11135 | FDA Registered</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navigation */}
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-10">
            <motion.img 
              src={logo} 
              alt="BiosteriMed" 
              className={`h-11 lg:h-14 w-auto transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive(item.href)
                      ? isTransparent 
                        ? "bg-white/20 text-white" 
                        : "text-primary bg-primary/10"
                      : isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
                    >
                      <div className="p-3">
                        {item.children.map((child, index) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={child.href}
                              className="flex flex-col p-4 rounded-xl hover:bg-muted transition-colors group"
                            >
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-sm text-muted-foreground mt-1">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              size="lg"
              className={`rounded-full px-6 ${
                isTransparent 
                  ? "bg-white text-primary hover:bg-white/90" 
                  : ""
              }`}
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-3 rounded-full transition-colors ${
              isTransparent && !mobileMenuOpen
                ? "text-white hover:bg-white/10" 
                : "text-foreground hover:bg-muted"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-custom py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div 
                className="pt-4 border-t border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button asChild className="w-full rounded-full" size="lg">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
