import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroLaptop from '@/assets/hero-laptop-4d.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Ethona Digital Lab
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Where Intelligence Creates
            </p>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              AI-powered digital marketing and automation to help brands grow smarter
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-accent text-primary-foreground hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6"
              >
                Get a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-glow-subtle transition-all duration-300 text-lg px-8 py-6"
              >
                Explore Solutions
              </Button>
            </div>
          </motion.div>

          {/* Right Column - 4D Laptop Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <img 
                src={heroLaptop} 
                alt="4D Holographic Digital Marketing Dashboard" 
                className="w-full h-auto drop-shadow-2xl"
              />
              {/* Glow effect behind laptop */}
              <div className="absolute inset-0 bg-primary/30 blur-3xl -z-10 scale-75" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
