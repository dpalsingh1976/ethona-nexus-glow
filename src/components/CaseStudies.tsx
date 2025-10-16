import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    icon: TrendingUp,
    metric: '+150%',
    label: 'Engagement Increase',
    description: 'AI-driven social strategy for a B2B SaaS company',
    category: 'Social Media',
    gradient: 'from-blue-500 to-blue-600',
    before: '12%',
    after: '30%',
  },
  {
    icon: Users,
    metric: '3.2x',
    label: 'Lead Generation',
    description: 'Automated funnel with chatbot qualification system',
    category: 'Automation',
    gradient: 'from-indigo-500 to-indigo-600',
    before: '45',
    after: '144',
  },
  {
    icon: Target,
    metric: '45%',
    label: 'Cost Reduction',
    description: 'SEO + Content strategy replacing expensive ad spend',
    category: 'SEO & Content',
    gradient: 'from-cyan-500 to-cyan-600',
    before: '$12k/mo',
    after: '$6.6k/mo',
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real metrics from real clients who trusted us to transform their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-3d-hover transition-all duration-500"
              >
                {/* Top Gradient Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${study.gradient}`} />
                
                {/* Icon */}
                <div className={`bg-gradient-to-r ${study.gradient} rounded-xl p-3 w-fit mb-4 shadow-card`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium mb-4">
                  {study.category}
                </div>

                {/* Metric */}
                <div className={`text-5xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}>
                  {study.metric}
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {study.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {study.description}
                </p>

                {/* Progress Bar - Before/After */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Before: {study.before}</span>
                    <span>After: {study.after}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${study.gradient}`}
                    />
                  </div>
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
