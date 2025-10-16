import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

const automations = [
  {
    title: 'Lead to CRM Pipeline',
    steps: ['Lead Form', 'AI Summary', 'CRM Entry', 'Email Follow-up'],
    description: 'Automatically capture, qualify, and nurture leads with zero manual work',
    color: 'primary',
  },
  {
    title: 'Smart Chatbot Flow',
    steps: ['User Query', 'AI Qualification', 'Book Meeting', 'Send Confirmation'],
    description: 'Intelligent conversations that convert visitors into booked appointments',
    color: 'secondary',
  },
  {
    title: 'Content Distribution',
    steps: ['Create Content', 'AI Optimization', 'Multi-Channel Post', 'Track Engagement'],
    description: 'Publish and optimize content across all platforms simultaneously',
    color: 'primary',
  },
];

const Automations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="automations" className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Intelligent Automation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Smart Automations for Modern Businesses
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Transform manual workflows into intelligent systems that scale
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-accent opacity-20 rounded-3xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-card/40 backdrop-blur-md border border-primary/20 rounded-3xl p-8 shadow-glass">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{automation.title}</h3>
                    <p className="text-foreground/70 mb-6">{automation.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      {automation.steps.map((step, stepIndex) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="px-4 py-2 bg-muted/50 border border-primary/20 rounded-lg backdrop-blur-sm">
                            <span className="text-sm font-medium text-foreground">{step}</span>
                          </div>
                          {stepIndex < automation.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-primary/50 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                      <CheckCircle2 className="w-5 h-5 text-primary ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automations;
