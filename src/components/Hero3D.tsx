import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  Workflow,
  TrendingUp 
} from 'lucide-react';
import { useEffect, useRef } from 'react';

const serviceCards = [
  { icon: Search, label: 'SEO', color: 'from-blue-500 to-blue-600', metric: '+156%' },
  { icon: Mail, label: 'Email', color: 'from-indigo-500 to-indigo-600', metric: '+89%' },
  { icon: MessageSquare, label: 'Chatbots', color: 'from-cyan-500 to-cyan-600', metric: '24/7' },
  { icon: Workflow, label: 'Automations', color: 'from-blue-600 to-indigo-600', metric: '∞' },
  { icon: TrendingUp, label: 'Analytics', color: 'from-indigo-600 to-purple-600', metric: 'Real-time' },
];

const socialIcons = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
];

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) / (rect.width / 2);
      const moveY = (e.clientY - centerY) / (rect.height / 2);
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Glows */}
      <div className="absolute inset-0 bg-gradient-hero-top pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero-bottom pointer-events-none" />

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-blue bg-clip-text text-transparent leading-tight">
              Ethona Digital Lab
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Digital Marketing & AI Automations for measurable growth.
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-3 mb-10 justify-center lg:justify-start flex-wrap">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white border border-border rounded-full p-3 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer hover:border-primary/50">
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-blue text-white hover:shadow-3d-hover transition-all duration-300 text-lg px-10 py-6 h-auto shadow-3d"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Right Column - 3D Card Stack */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md mx-auto"
            >
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative mb-6"
                  style={{
                    transform: `translateZ(${index * 20}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-3d-hover transition-all duration-500">
                    {/* Blue Gradient Header Strip */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${service.color}`} />
                    
                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Icon Chip */}
                        <div className={`relative bg-gradient-to-r ${service.color} bg-opacity-10 backdrop-blur-sm rounded-xl p-3 shadow-glass`}>
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {service.label}
                          </h3>
                          {/* Tiny Sparkline (simplified) */}
                          <div className="flex items-center gap-1">
                            <div className="h-6 w-20 flex items-end gap-0.5">
                              {[40, 60, 45, 70, 55, 80, 65, 90].map((height, i) => (
                                <div 
                                  key={i} 
                                  className={`flex-1 bg-gradient-to-t ${service.color} rounded-sm`}
                                  style={{ height: `${height}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* KPI Badge */}
                      <div className={`bg-gradient-to-r ${service.color} text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-card`}>
                        {service.metric}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile - Simplified Grid */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {serviceCards.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white border border-border rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${service.color} rounded-lg p-2.5 w-fit mb-3`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {service.label}
                </h3>
                <div className={`text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
