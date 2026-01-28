import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { Highlights } from '@/components/home/Highlights';
import { Newsletter } from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedArticles />
      <Highlights />
      <Newsletter />
    </Layout>
  );
};

export default Index;
