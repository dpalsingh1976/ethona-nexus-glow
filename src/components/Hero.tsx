import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroLaptop from '@/assets/hero-laptop-4d.png';
import { Search, Mail, Facebook, Instagram, Linkedin, Twitter, MessageSquare, Workflow } from 'lucide-react';

const floatingIcons = [
  { Icon: Search, label: 'SEO', position: 'top-[15%] left-[5%]', delay: 0.2 },
  { Icon: Mail, label: 'Email', position: 'top-[35%] left-[0%]', delay: 0.4 },
  { Icon: Facebook, label: 'Facebook', position: 'bottom-[35%] left-[2%]', delay: 0.6 },
  { Icon: Instagram, label: 'Instagram', position: 'bottom-[15%] left-[8%]', delay: 0.8 },
  { Icon: Linkedin, label: 'LinkedIn', position: 'top-[20%] right-[5%]', delay: 1.0 },
  { Icon: Twitter, label: 'Twitter', position: 'top-[40%] right-[0%]', delay: 1.2 },
  { Icon: MessageSquare, label: 'Chatbots', position: 'bottom-[30%] right-[3%]', delay: 1.4 },
  { Icon: Workflow, label: 'Automations', position: 'bottom-[10%] right-[8%]', delay: 1.6 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background with Depth */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Gradient waves for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_100%_50%_/_0.05)_0%,_transparent_50%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-6"
          >
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent"
              style={{ textShadow: '0 0 20px rgba(0, 163, 255, 0.2)' }}
            >
              Ethona Digital Lab
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              AI-powered digital marketing and automation to help brands grow smarter
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="relative bg-gradient-glass backdrop-blur-sm border-2 border-primary/50 text-foreground hover:border-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-6 group overflow-hidden"
              >
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - 4D Laptop Visual with Floating Icons */}
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
              {/* Cyan/Blue halo around laptop */}
              <div className="absolute inset-0 -z-30 blur-[100px] opacity-60">
                <div className="absolute inset-0 bg-gradient-radial from-primary/40 via-primary/20 to-transparent" />
              </div>
              
              {/* Background integration layers - deeper blending */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/15 to-transparent blur-3xl -z-20 scale-125" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/35 via-transparent to-secondary/20 blur-[80px] -z-10 scale-110" />
              
              {/* Floating shadow beneath laptop for 3D depth */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl -z-40" />
              
              {/* Laptop image with enhanced blend */}
              <div className="relative">
                <img 
                  src={heroLaptop} 
                  alt="4D Holographic Digital Marketing Dashboard" 
                  className="w-full h-auto drop-shadow-2xl opacity-95 mix-blend-screen"
                  style={{ filter: 'contrast(1.1) brightness(1.05)' }}
                />
                
                {/* Multi-layer gradient overlay for seamless blend */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />
                
                {/* Glow pulse animation on screen */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-glow-pulse pointer-events-none" />
              </div>
              
              {/* Enhanced foreground blend - smoother transition */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
              
              {/* Floating Icons around laptop */}
              {floatingIcons.map(({ Icon, label, position, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay },
                    scale: { duration: 0.5, delay },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay,
                    }
                  }}
                  className={`absolute ${position} hidden lg:block`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-300" />
                    <div className="relative bg-gradient-glass backdrop-blur-md border border-primary/30 rounded-xl p-3 group-hover:border-primary/60 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
