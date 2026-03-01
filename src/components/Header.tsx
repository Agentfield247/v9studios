import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Animation", path: "/animation" },
  { label: "Artwork", path: "/artwork" },
  { label: "Contact", path: "/contact" },
];

// ... (imports remain the same)

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logov9.png"
            alt="V9 Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {/* ... (navItems mapping remains the same) */}
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

        {/* ... (rest of the mobile menu logic remains the same) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ... (Mobile nav AnimatePresence remains the same) */}
    </header>
  );
};

export default Header;
