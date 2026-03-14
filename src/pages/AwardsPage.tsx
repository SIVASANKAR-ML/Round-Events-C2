import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Shield, Medal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import { credentials } from "@/lib/data";

const icons = [Trophy, Shield, Medal, Trophy];

const AwardsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto">
            <SectionHeader label="Our Credentials" title="Awards &" highlight="Certificates" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {credentials.map((c, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-card p-8 text-center group hover:border-primary/30 transition-colors"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.subtitle}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default AwardsPage;
