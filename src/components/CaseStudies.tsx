import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    icon: TrendingUp,
    metric: '+150%',
    label: 'Engagement Increase',
    description: 'AI-driven social strategy for a B2B SaaS company',
    category: 'Social Media',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Users,
    metric: '3.2x',
    label: 'Lead Generation',
    description: 'Automated funnel with chatbot qualification system',
    category: 'Automation',
    gradient: 'from-secondary/20 to-secondary/5',
  },
  {
    icon: Target,
    metric: '45%',
    label: 'Cost Reduction',
    description: 'SEO + Content strategy replacing expensive ad spend',
    category: 'SEO & Content',
    gradient: 'from-primary/20 to-primary/5',
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Proven Results
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real metrics from real clients who trusted us to transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-3xl blur transition-all duration-300" />
                <div className="relative bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 rounded-3xl p-8 shadow-glass hover:shadow-glow-subtle transition-all duration-300 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${study.gradient} rounded-t-3xl -z-10`} />
                  
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="mb-4">
                    <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                      {study.metric}
                    </div>
                    <div className="text-xl font-semibold text-foreground mb-2">
                      {study.label}
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary mb-4">
                      {study.category}
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
