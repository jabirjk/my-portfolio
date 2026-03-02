import { motion } from "motion/react";
import { ArrowRight, Download, MousePointer2, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
import { NewsModal } from "./NewsModal";
import { fetchLatestNews, NewsHeadline } from "../services/newsService";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [news, setNews] = useState<NewsHeadline[]>([]);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [newsError, setNewsError] = useState<string | null>(null);

  const fullText = "Building scalable and high-performance web applications.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleFetchNews = async () => {
    setIsNewsOpen(true);
    setIsLoadingNews(true);
    setNewsError(null);
    try {
      const data = await fetchLatestNews();
      setNews(data);
    } catch (err: any) {
      setNewsError(err.message || "Something went wrong");
    } finally {
      setIsLoadingNews(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Particles />
      <NewsModal 
        isOpen={isNewsOpen} 
        onClose={() => setIsNewsOpen(false)} 
        news={news}
        isLoading={isLoadingNews}
        error={newsError}
      />
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 [perspective:1000px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6 text-zinc-900 dark:text-white">
            JABIR <br />
            <span className="text-gradient">KEDIR</span>
          </h1>
          
          <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-lg mb-10 min-h-[3rem]">
            {text}
            <span className="animate-pulse inline-block w-1 h-6 bg-accent ml-1 align-middle" />
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0px 20px 40px rgba(99, 102, 241, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-accent hover:text-white transition-all group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              onClick={handleFetchNews}
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                rotateY: -5,
                boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-zinc-900 dark:text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all group"
            >
              <Newspaper size={20} className="group-hover:rotate-12 transition-transform" />
              Latest News
            </motion.button>
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-zinc-900 dark:text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all group"
          >
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            
            <div className="w-full h-full glass rounded-3xl overflow-hidden p-4 relative group">
              <div className="w-full h-full rounded-2xl bg-zinc-900 overflow-hidden relative">
                <img 
                  src="src/IMG_20220713_114100_482.jpg" 
                  alt="Jabir Kedir" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 glass p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <MousePointer2 className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Experience</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">4+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
