import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import weddingImg from "@/assets/wedding.jpg";
import corporateImg from "@/assets/corporate.jpg";
import birthdayImg from "@/assets/birthday.jpg";
import rentalsImg from "@/assets/rentals.jpg";

const services = [
  {
    title: "Weddings",
    description:
      "From traditional ceremonies to contemporary celebrations, we create dream weddings that reflect your unique love story.",
    image: weddingImg,
  },
  {
    title: "Corporate Events",
    description:
      "Impress stakeholders with perfectly orchestrated conferences, product launches, and corporate galas.",
    image: corporateImg,
  },
  {
    title: "Birthday Parties",
    description:
      "Celebrate milestones with themed parties, elegant décor, and unforgettable entertainment experiences.",
    image: birthdayImg,
  },
  {
    title: "Rentals",
    description:
      "Premium event equipment, furniture, and décor rentals to elevate any occasion with sophistication.",
    image: rentalsImg,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-subheading text-primary tracking-[0.2em] uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Our <span className="gold-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-3 gold-text">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
