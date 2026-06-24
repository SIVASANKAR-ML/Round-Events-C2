import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useFrappe } from "@/hooks/useFrappe";
import { getBlogPost } from "@/api/index";
import type { BlogPostDetail } from "@/types/api";

const formatDate = (date: string) =>
  date
    ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { data: post, loading, error } = useFrappe<BlogPostDetail>(
    () => getBlogPost(slug!),
    [slug]
  );

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="pt-20 section-padding">
          <div className="animate-pulse space-y-8 container mx-auto max-w-3xl">
            <div className="h-[40vh] bg-secondary/50 rounded-xl" />
            <div className="space-y-3">
              <div className="h-6 bg-secondary/50 rounded w-1/3" />
              <div className="h-4 bg-secondary/50 rounded w-full" />
              <div className="h-4 bg-secondary/50 rounded w-5/6" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main>
        <Navbar />
        <div className="pt-20 section-padding text-center">
          <h1 className="font-heading text-3xl mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="cta-button-outline text-sm">Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="pt-20" ref={ref}>
        {/* Hero */}
        <section className="relative h-[50vh] overflow-hidden">
          <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/blog" className="text-primary text-sm flex items-center gap-2 mb-4 hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> All Posts
              </Link>
              <h1 className="font-heading text-3xl md:text-5xl brand-text mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                {post.published_date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {formatDate(post.published_date)}
                  </span>
                )}
                {post.author && (
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="prose prose-invert max-w-none text-foreground/70 leading-relaxed [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_img]:rounded-xl [&_a]:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-12 text-center">
              <Link to="/contact" className="cta-button inline-block">Plan Your Event With Us</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogDetailPage;
