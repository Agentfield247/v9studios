import { motion } from "framer-motion";
import { Mail, Send, Twitter, Youtube } from "lucide-react";
import Layout from "@/components/Layout";

const socials = [
  {
    label: "Email",
    value: "hello@v9studios.art",
    href: "mailto:hello@v9studios.art",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@V9Studios",
    href: "https://t.me/V9Studios",
    icon: Send,
  },
  {
    label: "Twitter / X",
    value: "@V9Studios",
    href: "https://x.com/V9Studios",
    icon: Twitter,
  },
  {
    label: "YouTube",
    value: "V9 Studios Animation",
    href: "https://youtube.com/@V9Studios",
    icon: Youtube,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  return (
    <Layout>
      <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-16 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Ready to create something extraordinary? Let's talk.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 flex w-full flex-col gap-2"
        >
          {socials.map((social) => (
            <motion.li key={social.label} variants={item}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-lg px-5 py-4 transition-colors hover:bg-secondary"
              >
                <social.icon
                  size={20}
                  className="shrink-0 text-primary transition-transform group-hover:scale-110"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {social.label}
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {social.value}
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </Layout>
  );
};

export default Contact;
