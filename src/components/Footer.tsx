import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Ethona Digital Lab
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              Where Intelligence Creates. AI-powered digital marketing and automation to help brands grow smarter.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@ethona.digital"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow-subtle"
              >
                <Mail className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow-subtle"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow-subtle"
              >
                <Twitter className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  SEO & SEM
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-foreground/70 hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Ethona Digital Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
