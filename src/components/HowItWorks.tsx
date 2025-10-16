import { motion } from 'framer-motion';
import { Target, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Plan',
    description: 'Analyze your goals and design a tailored growth strategy',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy AI-powered campaigns and automation workflows',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    description: 'Continuously improve with data-driven insights',
    gradient: 'from-cyan-500 to-cyan-600',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-glow pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to accelerate your digital growth
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <line 
                  x1="16%" 
                  y1="0" 
                  x2="50%" 
                  y2="0" 
                  stroke="hsl(217 91% 60% / 0.2)" 
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
                <line 
                  x1="50%" 
                  y1="0" 
                  x2="84%" 
                  y2="0" 
                  stroke="hsl(217 91% 60% / 0.2)" 
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-white border border-border rounded-2xl p-8 shadow-card hover:shadow-3d-hover transition-all duration-500 text-center"
                  style={{ perspective: '1000px' }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${step.gradient} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-card`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`bg-gradient-to-r ${step.gradient} rounded-2xl p-4 shadow-card group-hover:shadow-card-hover transition-all duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow (Mobile Only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
