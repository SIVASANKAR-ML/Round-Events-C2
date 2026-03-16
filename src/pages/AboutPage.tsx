import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Award, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import { stats } from "@/lib/data";

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statIcons = [Calendar, Users, Award, Star];

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto">
            <SectionHeader label="About Us" title="Where Elegance Meets" highlight="Excellence" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <h3 className="font-heading text-2xl mb-4 brand-text">Our Story</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Round Events is Kochi&apos;s premier event management company, dedicated to curating world-class
                  experiences that leave lasting impressions. Our team of passionate professionals blends creativity
                  with precision, ensuring every detail is meticulously planned and flawlessly executed.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  From intimate celebrations to grand corporate galas, we bring your vision to life with
                  sophistication and style that sets new standards in the industry. With over a decade of
                  experience, we have grown to become one of the most trusted names in event management across Kerala.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Our approach is simple: listen to our clients, understand their vision, and deliver beyond
                  expectations. Every event is a new canvas, and we paint it with passion, precision, and creativity.
                </p>

                {/* Video placeholder */}
                <div className="glass-card aspect-video flex items-center justify-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ml-1"
                      style={{ borderLeftWidth: '14px', borderLeftColor: 'hsl(var(--primary))' }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="glass-card p-6 text-center group hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      <div className="font-heading text-3xl brand-text mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Team placeholder */}
            <div className="mt-20">
              <h3 className="font-heading text-2xl text-center mb-10 brand-text">Meet Our Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Founder & CEO", "Creative Director", "Operations Head", "Marketing Lead"].map((role, i) => (
                  <div key={role} className="glass-card p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-sm">Team Member</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default AboutPage;
