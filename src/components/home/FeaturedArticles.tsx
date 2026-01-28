import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedArticles } from '@/data/articles';
import { ArticleCard } from '@/components/blog/ArticleCard';

export function FeaturedArticles() {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Featured Stories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Latest from the Cosmos
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              View all articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Featured Articles Grid */}
        <div className="space-y-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
