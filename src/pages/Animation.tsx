import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Layout from "@/components/Layout";

const animations = [
  { id: 1, title: "Echoes of Light" },
  { id: 2, title: "Neon Drift" },
  { id: 3, title: "Fractured Realm" },
  { id: 4, title: "Golden Hour" },
  { id: 5, title: "Velocity" },
  { id: 6, title: "Dreamstate" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Animation = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Animation
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            A selection of motion work spanning commercial, editorial, and experimental projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {animations.map((anim) => (
            <motion.div
              key={anim.id}
              variants={item}
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-card transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Play size={24} className="ml-0.5 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  {anim.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Animation;
