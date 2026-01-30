import { Facebook, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  "Programs & Admissions": [
    "Programs",
    "Admissions Overview",
    "How to Apply",
    "Tuition & Costs",
    "Financial Aid",
    "Net Price Calculator",
    "FAFSA FAQ",
    "Admissions Representatives",
  ],
  "Student Resources": [
    "Calendar / News & Events",
    "Canvas Login",
    "Library",
    "Student Services",
    "Employer Partners",
    "Veterans & Military",
    "Faculty",
  ],
  "International Students": [
    "F-1 Student Visa",
    "F-1 Student Visa (Transfer-In with I-20)",
    "F-1 Student Visa (Change of Status)",
    "On-Campus Employment (F-1 Student Visa)",
    "Global Education Programs",
    "Maintaining Visa Status",
  ],
  Legal: ["Policies", "Accreditation & Affiliations"],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-white/10">
          {/* Logo & Contact */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-2 border-white/20">
                <span className="text-white font-serif font-bold text-xl">CC</span>
              </div>
              <div>
                <span className="text-white font-serif text-xl font-semibold">
                  Columbia College
                </span>
                <span className="block text-white/60 text-xs tracking-widest uppercase">
                  Washington DC
                </span>
              </div>
            </div>

            <h3 className="font-serif font-semibold text-xl mb-4">Campus</h3>

            <div className="space-y-3 text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  8620 Westwood Center Drive
                  <br />
                  Vienna, VA 22182
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:703.206.0508" className="hover:text-white transition-colors">
                  703.206.0508
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@ccdc.edu" className="hover:text-white transition-colors">
                  info@ccdc.edu
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-2/3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-serif font-semibold text-lg mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-primary text-sm transition-all duration-300 relative inline-block group"
                      >
                        <span className="relative">
                          {link}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <p className="text-center text-white/50 text-sm">
            Copyright © 2026 Columbia College DC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
