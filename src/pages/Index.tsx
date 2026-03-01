import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex h-[85vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-black md:h-screen">
        {/* Background Video
            - poster: Shows the image immediately while video loads
            - preload="auto": Tells browser to start downloading as soon as page hits
        */}
        <video
          src="/headervid.mp4"
          poster="/header-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none transition-opacity duration-1000"
          onCanPlay={(e) => e.target.classList.remove("opacity-0")}
        />

        {/* Centered Logo Overlay - LARGER SIZE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center justify-center px-4"
        >
          <img
            src="/headerimage.png"
            alt="Studio V9"
            /* Increased sizes: 90% on mobile, up to 700px on desktop */
            className="h-auto w-[90%] max-w-[450px] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)] md:max-w-[600px] lg:max-w-[750px]"
          />
        </motion.div>

        {/* Subtle Bottom Vignette to help transition to the next section */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Intro Text Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            V9 Studios: Bringing <span className="text-gradient">Motion</span>{" "}
            to Imagination
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground">
            Art direction, animation, and visual storytelling crafted with
            precision.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
