import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Rocket } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 mx-auto rounded-3xl bg-gradient-aurora flex items-center justify-center mb-8"
            >
              <Rocket className="w-12 h-12 text-primary-foreground" />
            </motion.div>

            <h1 className="font-display text-8xl sm:text-9xl font-bold text-gradient-aurora mb-4">404</h1>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Lost in Space</h2>
            <p className="text-muted-foreground mb-8">
              Looks like this page drifted too far into the cosmos.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-aurora">
                <span className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
