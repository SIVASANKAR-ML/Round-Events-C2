import { Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-heading text-xl gold-text mb-4 tracking-widest">ROUND EVENTS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kochi&apos;s premier event management company. Crafting unforgettable moments since 2014.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About Us", "Services", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(" ", "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Instagram, href: "https://instagram.com/roundevents" },
                { icon: Facebook, href: "https://facebook.com/roundevents" },
                { icon: Youtube, href: "https://youtube.com/roundevents" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 98765 43210
              </a>
              <a href="mailto:hello@roundevents.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> hello@roundevents.in
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Round Events. All rights reserved. | Event Planners in Kochi, Kerala
        </div>
      </div>
    </footer>
  );
};

export default Footer;
