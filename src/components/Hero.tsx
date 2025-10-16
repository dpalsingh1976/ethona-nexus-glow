import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Ethona Digital Lab
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            AI-Powered Digital Marketing & Automation
          </p>

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
