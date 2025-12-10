import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Beta Access", href: "#beta" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Data Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/purelytics", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/purelytics", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/purelytics", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">P</span>
                </div>
                <span className="font-bold text-2xl">Purelytics</span>
              </a>
              <p className="text-primary-foreground/60 mb-6 max-w-sm leading-relaxed">
                Empowering consumers with instant ingredient clarity. Scan, decode, and understand what's really in your products.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:purelytics@gmail.com" 
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">purelytics@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Warangal, Telangana, India</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
              <span>© 2025 Purelytics. All rights reserved.</span>
            </div>
            
            {/* Made in India badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <span className="text-lg">🇮🇳</span>
                <span className="text-sm font-medium text-primary-foreground/80">
                  Made with <Heart className="w-3 h-3 inline fill-primary text-primary mx-1" /> in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
