import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const LOGO_TOKEN = import.meta.env.VITE_LOGO_API_KEY;

const clients = [
  { name: "Jim Beam", domain: "jimbeam.com" },
  { name: "Bacardí", domain: "bacardi.com" },
  { name: "Kingfisher Ultra Premium Soda", domain: "kingfisherworld.com" },
  { name: "Red Bull", domain: "redbull.com" },
  { name: "MG Motor", domain: "mgmotor.co.in" },
  { name: "Kwality Wall's", domain: "kwalitywalls.in" },
  { name: "Medical Trust Hospital", domain: "medicaltrusthospital.com" },
  { name: "Marriott Bonvoy", domain: "marriott.com" },
  { name: "Kochi Marriott Hotel", domain: "marriott.com" },
  { name: "Novotel", domain: "novotel.com" },
  { name: "RED FM 93.5", domain: "redfmindia.in" },
  { name: "Forum Malls", domain: "forummalls.in" },
  { name: "ITC Limited", domain: "itcportal.com" },
  { name: "The Artiste Tribute Portfolio", domain: "marriott.com" },
  { name: "Aster Medcity", domain: "asterdmhealthcare.com" },
  { name: "Radisson Hotels", domain: "radissonhotels.com" },
  { name: "Grand Hyatt", domain: "hyatt.com" },
  { name: "TIME ADS", domain: "timeads.in" },
  { name: "Crowne Plaza", domain: "ihg.com" },
  { name: "CGH Earth", domain: "cghearth.com" },
  { name: "Joyalukkas", domain: "joyalukkas.in" },
];

const logoUrl = (domain: string) => `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}`;

const chunkInto = <T,>(items: T[], rows: number) => {
  const result: T[][] = Array.from({ length: rows }, () => []);
  items.forEach((item, i) => result[i % rows].push(item));
  return result;
};

const rows = chunkInto(clients, 3);

const LogoRow = ({
  items,
  direction,
}: {
  items: typeof clients;
  direction: "left" | "right";
}) => {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4 md:gap-6 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {track.map((client, i) => (
          <div
            key={`${client.domain}-${i}`}
            className="flex items-center justify-center h-16 w-28 md:h-20 md:w-36 p-1 shrink-0 hover:border-primary/30 transition-colors duration-300"
          >
            <img
              src={logoUrl(client.domain)}
              alt={client.name}
              title={client.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const LogoSection = () => {
  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader label="Trusted By" title="Trusted" highlight="Partners" />
        <div className="space-y-1">
          {rows.map((rowItems, i) => (
            <LogoRow key={i} items={rowItems} direction={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
