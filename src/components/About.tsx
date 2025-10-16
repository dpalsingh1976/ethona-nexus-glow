import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Your Partner in Digital Growth
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Ethona Digital Lab is where cutting-edge AI meets proven marketing strategies. We're not
              just another agency — we're your strategic partner in building intelligent growth engines.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our mission is simple: empower businesses to scale smarter through the fusion of AI
              automation and data-driven marketing. From SEO to LLM integrations, we build systems
              that work while you sleep.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe the future belongs to those who can harness intelligence to create value.
              That's why every solution we build combines human creativity with machine efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-card/40 backdrop-blur-md border border-primary/20 rounded-3xl p-8 shadow-glass">
              <div className="absolute -inset-1 bg-gradient-accent opacity-20 rounded-3xl blur" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary animate-glow-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">AI-First Approach</h3>
                    <p className="text-foreground/60">Automation at the core</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-secondary animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Data-Driven Results</h3>
                    <p className="text-foreground/60">Measurable growth metrics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Full-Stack Solutions</h3>
                    <p className="text-foreground/60">End-to-end implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
