import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
  { icon: Search, label: 'SEO', delay: 0 },
  { icon: Target, label: 'SEM', delay: 0.1 },
  { icon: Mail, label: 'Email', delay: 0.2 },
  { icon: Share2, label: 'Social', delay: 0.3 },
  { icon: MessageSquare, label: 'Chatbots', delay: 0.4 },
  { icon: BarChart3, label: 'Analytics', delay: 0.5 },
  { icon: Workflow, label: 'Automations', delay: 0.6 },
  { icon: TrendingUp, label: 'Funnels', delay: 0.7 },
  { icon: Zap, label: 'CRO', delay: 0.8 },
  { icon: FileText, label: 'Content', delay: 0.9 },
  { icon: Database, label: 'RAG', delay: 1.0 },
  { icon: Brain, label: 'LLMs', delay: 1.1 },
  { icon: GitMerge, label: 'Integrations', delay: 1.2 },
  { icon: PieChart, label: 'Reporting', delay: 1.3 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {services.map((service, index) => {
          const Icon = service.icon;
          const angle = (index / services.length) * 2 * Math.PI;
          const radius = 420; // Increased radius to move icons further out
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={service.label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x,
                y: y,
              }}
              transition={{
                delay: service.delay,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="relative group cursor-pointer"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:bg-primary/30 transition-all duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-3 shadow-glass group-hover:shadow-glow-subtle group-hover:border-primary/60 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                  <p className="mt-1.5 text-[10px] font-medium text-foreground/70 whitespace-nowrap">{service.label}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Ethona Digital Lab
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Where Intelligence Creates
          </p>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            AI-powered digital marketing and automation to help brands grow smarter
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </div>
    </section>
  );
};

export default Hero;
