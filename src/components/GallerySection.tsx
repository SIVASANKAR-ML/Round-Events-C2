import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import weddingImg from "@/assets/wedding.jpg";
import corporateImg from "@/assets/corporate.jpg";
import rentalsImg from "@/assets/rentals.jpg";

const images = [
  { src: gallery1, alt: "Elegant floral centerpieces", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Dramatic venue lighting", span: "" },
  { src: gallery3, alt: "Outdoor sunset event", span: "" },
  { src: weddingImg, alt: "Wedding ceremony setup", span: "md:col-span-2" },
  { src: corporateImg, alt: "Corporate event stage", span: "" },
  { src: rentalsImg, alt: "Premium tent setup", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-subheading text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl">
            Event <span className="gold-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <p className="text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
