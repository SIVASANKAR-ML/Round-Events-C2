import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Quote, Trophy, Calendar, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import { services, galleryImages, testimonials, credentials, stats } from "@/lib/data";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const statIcons = [Calendar, Users, Award, Star];

  return (
    <main>
      <Navbar />
      <HeroCarousel />

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader label="About Us" title="Where Elegance Meets" highlight="Excellence" />
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-foreground/70 leading-relaxed mb-6">
                Round Events is Kochi&apos;s premier event management company, dedicated to curating world-class experiences
                that leave lasting impressions. Our team of passionate professionals blends creativity with precision.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <div key={stat.label} className="glass-card p-4 text-center">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-heading text-2xl brand-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              <Link to="/about" className="cta-button-outline text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader label="What We Do" title="Our" highlight="Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.slice(0, 4).map((service, i) => (
              <AnimatedSection key={service.slug}>
                <Link to={`/services/${service.slug}`} className="glass-card overflow-hidden group block h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg mb-2 brand-text">{service.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="cta-button-outline text-sm inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader label="Our Work" title="Event" highlight="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] mb-10">
            {galleryImages.slice(0, 4).map((img, i) => (
              <AnimatedSection key={i}>
                <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                    <p className="text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">{img.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="cta-button-outline text-sm inline-flex items-center gap-2">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader label="Testimonials" title="What Our" highlight="Clients Say" />
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.name}>
                <div className="glass-card p-8 relative h-full">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic font-subheading text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials" className="cta-button-outline text-sm inline-flex items-center gap-2">
              Read More Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader label="Our Credentials" title="Awards &" highlight="Certificates" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {credentials.map((c, i) => (
              <AnimatedSection key={c.title}>
                <div className="glass-card p-6 text-center group hover:border-primary/30 transition-colors">
                  <Trophy className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Link to="/awards" className="cta-button-outline text-sm inline-flex items-center gap-2">
              View All Awards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto text-center">
          <SectionHeader label="Get In Touch" title="Let's Plan Your" highlight="Event" />
          <AnimatedSection>
            <p className="text-foreground/70 max-w-xl mx-auto mb-8">
              Ready to create something extraordinary? Get in touch with our team for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cta-button text-base">
                Contact Us
              </Link>
              <a href="tel:+919876543210" className="cta-button-outline text-base">
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
