import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo-biosterimed.png";

const footerLinks = {
  services: [
    { label: "EO Sterilization", href: "/services/eo-sterilization" },
    { label: "Steam Sterilization", href: "/services/steam-sterilization" },
    { label: "Gamma Irradiation", href: "/services/gamma-irradiation" },
  ],
  products: [
    { label: "Chemical Indicators", href: "/products/chemical-indicators" },
    { label: "Biological Indicators", href: "/products/biological-indicators" },
    { label: "Bowie-Dick Test Packs", href: "/products/bowie-dick" },
    { label: "Accessories", href: "/products/accessories" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Quality & Certifications", href: "/quality" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const certifications = [
  "ISO 13485:2016",
  "ISO 11135:2014",
  "ISO 17665-1:2006",
  "FDA Registered",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="BiosteriMed" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/80 mb-6 max-w-sm">
              Ensuring sterility assurance and regulatory compliance for healthcare organizations 
              through certified sterilization services and validated products.
            </p>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Phone className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@biosterimed.com" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@biosterimed.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Medical Drive, Healthcare City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-background/60 text-sm">Certifications:</span>
            {certifications.map((cert) => (
              <span 
                key={cert} 
                className="px-3 py-1 bg-background/10 rounded-full text-sm text-background/80"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-background/60 text-sm">
              © {new Date().getFullYear()} BiosteriMed. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-background/5">
        <div className="container-custom py-4">
          <p className="text-xs text-background/50 text-center">
            BiosteriMed provides sterilization services and products compliant with international standards. 
            Information on this website is for general reference. For specific compliance requirements, 
            consult relevant regulatory bodies.
          </p>
        </div>
      </div>
    </footer>
  );
}
