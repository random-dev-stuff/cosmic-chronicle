import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '@/components/layout/Layout';
import { getArticleBySlug, articles } from '@/data/articles';
import { ArticleCard } from '@/components/blog/ArticleCard';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-aurora">
            <span>Back to Blog</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Get related articles
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // Get current article index for navigation
  const currentIndex = articles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        {/* Cover Image */}
        <div className="h-[50vh] sm:h-[60vh] relative">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto -mt-32 relative z-10"
          >
            {/* Back Button */}
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </button>

            {/* Category */}
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
            </div>

            {/* Author & Actions */}
            <div className="flex items-center justify-between py-6 border-t border-b border-border/50">
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50"
          >
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </motion.article>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Navigation */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border/50">
            <div className="grid sm:grid-cols-2 gap-4">
              {prevArticle && (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="glass-card p-4 group hover:border-primary/30 transition-colors"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <ChevronLeft className="w-3 h-3" />
                    Previous
                  </span>
                  <p className="font-display font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {prevArticle.title}
                  </p>
                </Link>
              )}
              {nextArticle && (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="glass-card p-4 group hover:border-primary/30 transition-colors sm:text-right"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground mb-2">
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </span>
                  <p className="font-display font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;
