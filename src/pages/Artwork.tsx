import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

const artworks = [
  { id: 1, src: artwork1, title: "Neon City", span: "row-span-2" },
  { id: 2, src: artwork2, title: "Phoenix Rising", span: "" },
  { id: 3, src: artwork3, title: "Sentinel", span: "" },
  { id: 4, src: artwork4, title: "Cosmic Drift", span: "" },
  { id: 5, src: artwork5, title: "Temple of Light", span: "row-span-2" },
  { id: 6, src: artwork6, title: "Shadow Warrior", span: "" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Artwork = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Artwork
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Original illustrations and concept art from our creative team.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3"
        >
          {artworks.map((art) => (
            <motion.div
              key={art.id}
              variants={item}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-lg"
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                    {art.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Artwork;
