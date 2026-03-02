import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tighter">
            JABIR<span className="text-accent">.</span>
          </a>
          <p className="text-sm text-zinc-500 mt-2">
            © 2026 Jabir Kedir. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com/jabirjk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jabir-kedir-b163aa245?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>

        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
};
