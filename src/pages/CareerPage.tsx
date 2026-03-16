import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "@/hooks/use-toast";

const openings = [
  { title: "Event Coordinator", type: "Full-time", location: "Kochi", description: "Coordinate and manage events from planning to execution. 2+ years experience required." },
  { title: "Creative Designer", type: "Full-time", location: "Kochi", description: "Design event themes, décor concepts, and marketing materials. Proficiency in Adobe Suite required." },
  { title: "Marketing Executive", type: "Full-time", location: "Kochi / Remote", description: "Drive digital marketing campaigns and manage social media presence for the brand." },
  { title: "Intern - Event Management", type: "Internship", location: "Kochi", description: "Learn event planning from industry experts. Open to fresh graduates with a passion for events." },
];

const CareerPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Application sent!", description: "We'll review your application and get back to you." });
    setForm({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto">
            <SectionHeader label="Join Our Team" title="Career" highlight="Opportunities" />

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card p-6 group hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-200 cursor-pointer"
                >
                  <h3 className="font-heading text-lg brand-text mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3 group-hover:text-primary transition-colors" /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 group-hover:text-primary transition-colors" /> {job.location}</span>
                  </div>
                  <p className="text-foreground/70 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Application form */}
            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl text-center mb-8">Apply <span className="brand-text">Now</span></h3>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Position</label>
                  <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select position</option>
                    {openings.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about yourself..." />
                </div>
                <button type="submit" className="cta-button w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default CareerPage;
