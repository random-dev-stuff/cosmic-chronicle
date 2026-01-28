import { motion } from 'framer-motion';
import { Rocket, Target, Heart, Users, Globe, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Newsletter } from '@/components/home/Newsletter';

const values = [
  {
    icon: Target,
    title: 'Accuracy',
    description: 'We prioritize factual, well-researched content that you can trust.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for space exploration drives everything we create.',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Making space science understandable and exciting for everyone.',
  },
  {
    icon: Globe,
    title: 'Vision',
    description: 'Looking ahead to humanity\'s future as a multi-planetary species.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'CosmosBlog was founded with a mission to make space exploration accessible to everyone.',
  },
  {
    year: '2021',
    title: 'Growing Community',
    description: 'Reached 10,000 monthly readers and launched our newsletter.',
  },
  {
    year: '2022',
    title: 'Expert Network',
    description: 'Partnered with aerospace engineers and scientists for expert insights.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded to cover international space programs and tourism initiatives.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Launched our AI assistant to help readers explore space topics interactively.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-6">
                Your Window to the{' '}
                <span className="text-gradient-aurora">Cosmos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're a team of space enthusiasts, writers, and scientists dedicated 
                to bringing you the most comprehensive coverage of humanity's journey 
                beyond Earth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
                Making Space Accessible to Everyone
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Space exploration has always captured the human imagination. From the 
                  first footsteps on the Moon to the ambitious plans for Mars colonization, 
                  we've been there to document and explain it all.
                </p>
                <p>
                  Our mission is simple: to be your trusted source for everything related 
                  to space tourism and the future of human space travel. We believe that 
                  understanding our cosmic neighborhood shouldn't require a PhD in astrophysics.
                </p>
                <p>
                  Whether you're dreaming of becoming a space tourist, curious about the 
                  latest developments in commercial spaceflight, or simply fascinated by 
                  the universe we inhabit, CosmosBlog is your gateway to the stars.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card-elevated p-8 aurora-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-aurora flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-gradient-aurora">50K+</p>
                    <p className="text-sm text-muted-foreground">Monthly Readers</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-display text-2xl font-bold">100+</p>
                    <p className="text-sm text-muted-foreground">Articles Published</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold">15</p>
                    <p className="text-sm text-muted-foreground">Expert Contributors</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold">25</p>
                    <p className="text-sm text-muted-foreground">Countries Reached</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold">4.9★</p>
                    <p className="text-sm text-muted-foreground">Reader Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-4">
              What Guides Us
            </h2>
            <p className="text-muted-foreground">
              These core principles shape everything we do, from the stories we tell 
              to how we engage with our community.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center aurora-glow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 mx-auto rounded-2xl bg-gradient-aurora flex items-center justify-center mb-4"
                >
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-4">
              How We Got Here
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border/50"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary" />
                <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                <h3 className="font-display text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-aurora flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our community of space enthusiasts and stay updated with the 
              latest in space tourism and exploration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/blog" className="btn-aurora">
                <span>Read Our Articles</span>
              </a>
              <a href="/contact" className="btn-ghost-cosmic">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default About;
