import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Shield, Medal } from "lucide-react";

const credentials = [
  { icon: Trophy, title: "Best Event Planner 2024", subtitle: "Kerala Tourism Awards" },
  { icon: Shield, title: "ISO 9001 Certified", subtitle: "Quality Management" },
  { icon: Medal, title: "Top 10 in India", subtitle: "Wedding Wire Awards 2023" },
  { icon: Trophy, title: "Excellence Award", subtitle: "South India Event Forum" },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-subheading text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Our Credentials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Awards & <span className="gold-text">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
            >
              <c.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
