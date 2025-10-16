import { motion } from 'framer-motion';
import { Search, Mail, Share2, Workflow, TrendingUp } from 'lucide-react';

const proofTiles = [
  {
    icon: Search,
    title: 'SEO & SEM',
    benefit: 'Drive organic traffic that converts',
    kpi: '+38% CTR',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    benefit: 'Personalized campaigns at scale',
    kpi: '+127% Open Rate',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Share2,
    title: 'Social Media',
    benefit: 'Engage audiences across platforms',
    kpi: '+215% Engagement',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Workflow,
    title: 'Automations',
    benefit: 'Scale operations intelligently',
    kpi: '80% Time Saved',
    gradient: 'from-blue-600 to-indigo-600',
  },
];

const ProofTiles = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven strategies that deliver measurable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofTiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-3d-hover transition-all duration-500">
                {/* Top Gradient Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${tile.gradient}`} />
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tile.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${tile.gradient} rounded-xl p-3 w-fit mb-4 shadow-card`}>
                    <tile.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tile.title}
                  </h3>
                  
                  {/* Benefit */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {tile.benefit}
                  </p>
                  
                  {/* KPI Badge */}
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${tile.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-card`}>
                    <TrendingUp className="w-4 h-4" />
                    {tile.kpi}
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

export default ProofTiles;
