import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Search,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageSquare,
  Workflow,
} from 'lucide-react';

const services = [
  { icon: Search, label: 'SEO', delay: 0 },
  { icon: Mail, label: 'Email', delay: 0.1 },
  { icon: Facebook, label: 'Facebook', delay: 0.2 },
  { icon: Instagram, label: 'Instagram', delay: 0.3 },
  { icon: Linkedin, label: 'LinkedIn', delay: 0.4 },
  { icon: Twitter, label: 'Twitter', delay: 0.5 },
  { icon: MessageSquare, label: 'Chatbots', delay: 0.6 },
  { icon: Workflow, label: 'Automations', delay: 0.7 },
];

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Icons */}
      <TooltipProvider>
        <div className="absolute inset-0 pointer-events-none">
          {services.map((service, index) => {
            const Icon = service.icon;
            const angle = (index / services.length) * 2 * Math.PI - Math.PI / 2;
            const radius = window.innerWidth < 768 ? 180 : 320;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            // Show only 4 icons on mobile
            const isMobile = window.innerWidth < 768;
            const mobileIcons = ['SEO', 'Email', 'Chatbots', 'Automations'];
            if (isMobile && !mobileIcons.includes(service.label)) {
              return null;
            }

            return (
              <motion.div
                key={service.label}
                className="absolute top-1/2 left-1/2 pointer-events-auto"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: x,
                  y: y,
                }}
                transition={{
                  delay: service.delay,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="relative group cursor-pointer"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-300" />
                      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 shadow-glass group-hover:shadow-glow-subtle group-hover:border-primary/50 transition-all duration-300">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{service.label}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}
        </div>
      </TooltipProvider>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 bg-gradient-accent bg-clip-text text-transparent">
            Ethona Digital Lab
          </h1>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow-subtle transition-all duration-300 text-lg px-10 py-6"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
