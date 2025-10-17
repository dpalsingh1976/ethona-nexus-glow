import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroLaptop from '@/assets/hero-laptop-4d.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background with Professional Depth */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated ambient glow orbs with better positioning */}
        <div className="absolute top-[20%] left-[15%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-[650px] h-[650px] bg-secondary/12 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[160px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Multi-layer gradient waves for professional depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/6" />
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 via-transparent to-primary/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_100%_50%_/_0.06)_0%,_transparent_60%)]" />
        
        {/* Subtle grid pattern for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Premium badge/label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">AI-Powered Solutions</span>
              </div>
            </motion.div>

            {/* Main heading with enhanced styling */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,163,255,0.3)]">
                Ethona Digital Lab
              </span>
            </h1>

            {/* Tagline with better hierarchy */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/95">
                Where Intelligence Creates
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                AI-powered digital marketing and automation to help brands grow smarter
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white border-0 shadow-[0_0_30px_rgba(0,163,255,0.4)] hover:shadow-[0_0_40px_rgba(0,163,255,0.6)] transition-all duration-300 text-lg px-8 py-6 group overflow-hidden font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative bg-transparent backdrop-blur-sm border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 shadow-[0_0_20px_rgba(0,163,255,0.2)] hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] transition-all duration-300 text-lg px-8 py-6 group font-semibold"
              >
                <span className="relative z-10">Explore Solutions</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8 justify-center lg:justify-start pt-6 text-sm text-foreground/60"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>98% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Completely Seamless Laptop Integration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:-mr-32 xl:-mr-40"
          >
            <motion.div
              animate={{ 
                y: [0, -25, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Laptop image with complete transparency and seamless integration */}
              <div className="relative">
                <img 
                  src={heroLaptop} 
                  alt="4D Holographic Digital Marketing Dashboard" 
                  className="w-full h-auto relative z-10"
                  style={{ 
                    filter: 'drop-shadow(0 25px 80px rgba(0, 163, 255, 0.25)) brightness(1.2) contrast(1.05)',
                  }}
                />
                
                {/* Soft glow behind laptop that matches page background perfectly */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-[100px]" />
                </div>
                
                {/* Additional ambient glow layers */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-20">
                  <div className="absolute inset-0 bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent blur-[120px] animate-glow-pulse" />
                </div>
                
                {/* Bottom fade to blend with page */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background/80 via-background/40 to-transparent pointer-events-none -z-5" />
                
                {/* Extended bottom blend for complete seamlessness */}
                <div className="absolute -bottom-32 -left-32 -right-32 h-64 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none -z-5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

