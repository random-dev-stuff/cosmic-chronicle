import { motion } from 'framer-motion';
import { Rocket, Compass, Star, Telescope } from 'lucide-react';

const highlights = [
  {
    icon: Rocket,
    title: 'Space Tourism',
    description: 'Discover the latest in commercial space travel and how you can be part of the next generation of space explorers.',
  },
  {
    icon: Compass,
    title: 'Exploration',
    description: 'From Mars missions to deep space probes, follow humanity\'s journey to understand our place in the universe.',
  },
  {
    icon: Star,
    title: 'Future Tech',
    description: 'Cutting-edge technologies that are making space more accessible than ever before.',
  },
  {
    icon: Telescope,
    title: 'Discovery',
    description: 'New findings about exoplanets, cosmic phenomena, and the mysteries that await beyond our solar system.',
  },
];

export function Highlights() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What We Cover
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Your Window to the Stars
          </h2>
          <p className="text-muted-foreground">
            Comprehensive coverage of everything happening in space exploration and 
            tourism, from breaking news to in-depth analysis.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-colors aurora-glow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 mx-auto rounded-2xl bg-gradient-aurora flex items-center justify-center mb-4"
              >
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
