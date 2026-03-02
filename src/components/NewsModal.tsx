import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Newspaper, Loader2, AlertCircle } from "lucide-react";
import { NewsHeadline } from "../services/newsService";

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: NewsHeadline[];
  isLoading: boolean;
  error: string | null;
}

export const NewsModal = ({ isOpen, onClose, news, isLoading, error }: NewsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl glass rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Newspaper size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Latest Headlines</h3>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Real-time News Feed</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto no-scrollbar">
              {isLoading && (
                <div className="py-20 flex flex-col items-center justify-center gap-4">
                  <Loader2 size={40} className="text-accent animate-spin" />
                  <p className="text-zinc-500 font-medium animate-pulse">Fetching global updates...</p>
                </div>
              )}

              {error && (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                    <AlertCircle size={32} />
                  </div>
                  <p className="text-red-500 font-medium max-w-xs">{error}</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 px-6 py-2 glass rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}

              {!isLoading && !error && news.length > 0 && (
                <div className="space-y-6">
                  {news.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="block p-6 glass rounded-2xl hover:border-accent/50 transition-all group"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">
                            {item.source}
                          </span>
                          <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors leading-snug">
                            {item.title}
                          </h4>
                        </div>
                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 bg-zinc-900/50 border-t border-white/5 text-center">
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">
                Powered by Google Gemini AI Search
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
