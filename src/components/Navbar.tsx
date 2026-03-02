import { motion, useScroll, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass border-b" : "py-8 bg-transparent"
      }`}
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60] shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
        style={{ scaleX }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tighter"
        >
          JABIR<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <motion.a
              href="https://github.com/jabirjk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jabir-kedir-b163aa245?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </motion.a>
          </div>

          <motion.a
            href="/cv.pdf"
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass border-b p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <a href="https://github.com/jabirjk/" target="_blank" rel="noopener noreferrer">
              <Github className="text-zinc-400 cursor-pointer hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/jabir-kedir-b163aa245?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-zinc-400 cursor-pointer hover:text-white transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-zinc-400 cursor-pointer hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
