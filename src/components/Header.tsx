import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Animation", path: "/animation" },
  { label: "Artwork", path: "/artwork" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src="/logov9.png"
            alt="V9 Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="group relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[110] text-foreground md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block rounded-lg px-4 py-4 text-lg font-bold uppercase tracking-widest transition-all ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
