import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import { useFrappe } from "@/hooks/useFrappe";
import { getBlogPosts } from "@/api/index";
import type { BlogPost } from "@/types/api";

const BlogSkeleton = () => (
  <div className="glass-card overflow-hidden animate-pulse">
    <div className="h-56 bg-secondary/50" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-secondary/50 rounded w-1/2" />
      <div className="h-3 bg-secondary/50 rounded w-full" />
      <div className="h-3 bg-secondary/50 rounded w-3/4" />
    </div>
  </div>
);

const formatDate = (date: string) =>
  date
    ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : "";

const BlogPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: posts, loading, error } = useFrappe<BlogPost[]>(getBlogPosts);

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto">
            <SectionHeader label="Our Journal" title="Latest" highlight="Blog" />
            {error && (
              <p className="text-center text-muted-foreground py-12">Failed to load blog posts. Please try again later.</p>
            )}
            {!loading && !error && posts?.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No blog posts yet. Check back soon!</p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
                : posts?.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="glass-card overflow-hidden group block h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-200"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent group-hover:from-card/80 transition-colors duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3">
                            {post.published_date && (
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_date)}
                              </span>
                            )}
                            {post.author && (
                              <span className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" /> {post.author}
                              </span>
                            )}
                          </div>
                          <h3 className="font-heading text-xl mb-3 brand-text group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                          <span className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPage;
