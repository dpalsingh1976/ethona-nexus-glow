import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Target,
  Mail,
  Share2,
  MessageSquare,
  BarChart3,
  Workflow,
  TrendingUp,
  Zap,
  FileText,
  Database,
  Brain,
  GitMerge,
  PieChart,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    label: 'SEO Optimization',
    description: 'Rank higher with data-driven strategies and technical excellence',
  },
  {
    icon: Target,
    label: 'SEM / Paid Ads',
    description: 'Maximize ROI with intelligent ad campaign management',
  },
  {
    icon: Mail,
    label: 'Email Campaigns',
    description: 'Automated sequences that convert and nurture leads',
  },
  {
    icon: Share2,
    label: 'Social Media Automation',
    description: 'Engage audiences with AI-powered social strategies',
  },
  {
    icon: MessageSquare,
    label: 'AI Chatbots',
    description: '24/7 intelligent customer support and lead qualification',
  },
  {
    icon: BarChart3,
    label: 'Analytics & Insights',
    description: 'Real-time dashboards and predictive analytics',
  },
  {
    icon: Workflow,
    label: 'Workflow Automations',
    description: 'Streamline operations with custom automation flows',
  },
  {
    icon: TrendingUp,
    label: 'Sales Funnels',
    description: 'Optimized conversion paths from awareness to purchase',
  },
  {
    icon: Zap,
    label: 'Conversion Optimization (CRO)',
    description: 'A/B testing and UX improvements for higher conversions',
  },
  {
    icon: FileText,
    label: 'Content Generation',
    description: 'AI-assisted content creation at scale',
  },
  {
    icon: Database,
    label: 'RAG Search Systems',
    description: 'Advanced retrieval-augmented generation for knowledge bases',
  },
  {
    icon: Brain,
    label: 'LLM Integrations',
    description: 'Custom AI models tailored to your business needs',
  },
  {
    icon: GitMerge,
    label: 'Integrations',
    description: 'Seamless connections between all your tools and platforms',
  },
  {
    icon: PieChart,
    label: 'Reporting Dashboards',
    description: 'Beautiful, actionable insights delivered to your inbox',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive digital marketing and AI automation solutions to power your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-300" />
                <div className="relative bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 rounded-2xl p-6 shadow-glass hover:shadow-glow-subtle transition-all duration-300 h-full">
                  <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.label}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
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

export default Services;
