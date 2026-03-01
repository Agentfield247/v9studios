import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ThreeDPhotoCarousel } from "@/components/ThreeDPhotoCarousel";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex h-[85vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-black md:h-screen">
        <video
          src="/headervid.mp4"
          poster="/header-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none transition-opacity duration-1000"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex w-full flex-col items-center justify-center px-4"
        >
          <img
            src="/headerimage.png"
            alt="Studio V9"
            className="h-auto w-[90%] max-w-[450px] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)] md:max-w-[600px] lg:max-w-[750px]"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Intro & 3D Carousel Section */}
      <section className="bg-background py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
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

          {/* THE CAROUSEL */}
          <div className="mt-16 w-full">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </section>

      {/* Navigation / Stylized Buttons Section */}
      <section className="bg-black/5 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Explore the Studio</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Animation Page Button */}
            <Link to="/animation">
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95 shadow-lg">
                <span className="relative z-10 font-bold uppercase tracking-wider">
                  Animation
                </span>
                <ArrowRight
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
                  size={20}
                />
              </button>
            </Link>

            {/* Artwork Page Button */}
            <Link to="/artwork">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full overflow-hidden transition-all hover:bg-primary hover:text-primary-foreground active:scale-95 shadow-lg">
                <span className="relative z-10 font-bold uppercase tracking-wider">
                  Artwork
                </span>
              </button>
            </Link>

            {/* Contact Page Button */}
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-colors shadow-lg active:scale-95">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
