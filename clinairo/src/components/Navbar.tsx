import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Features", href: "/#features" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
            <span className="text-white font-bold text-xl font-display">C</span>
          </div>
          <span className="text-2xl font-bold font-display tracking-tight text-slate-900">
            Clinairo.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <Link
            to="/#contact"
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-600 hover:text-brand-600 border-b border-slate-50 pb-2 block"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-600 hover:text-brand-600 border-b border-slate-50 pb-2 block"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-600 text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-brand-700"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
