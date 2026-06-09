import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, ArrowUpRight, Award, ShieldAlert, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Overview", href: "#hero" },
    { label: "Bento Stack", href: "#bento" },
    { label: "SaaS Projects", href: "#projects" },
    { label: "Get in Touch", href: "#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030712]/70 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* Dynamic scroll progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            style={{ scaleX: scrollProgress, transformOrigin: "left" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with cursor indicator */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-blue-500 p-[1.5px] shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[11px] bg-[#030712] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Mansoor Ahmed
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Software Engineer
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/10 backdrop-blur-xl">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right action items */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold text-white tracking-wide uppercase overflow-hidden group bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Interactive CV
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400"
              title="Interactive CV"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[74px] left-0 w-full z-45 bg-[#030712]/95 border-b border-white/10 backdrop-blur-2xl md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-zinc-300 hover:text-white px-3 py-1.5 hover:bg-white/5 rounded-xl transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <hr className="border-white/5" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-sm font-semibold text-white text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                Interactive CV
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
