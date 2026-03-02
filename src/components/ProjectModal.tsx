import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, BookOpen, Layers, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  caseStudy?: string;
  role?: string;
  challenge?: string;
  features?: string[];
  metrics?: { label: string; value: string }[];
  gallery?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto glass rounded-[3rem] shadow-2xl no-scrollbar"
          >
            <button
              onClick={onClose}
              className="fixed top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110] backdrop-blur-md border border-white/10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col">
              {/* Hero Section */}
              <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="px-4 py-1 bg-accent/20 border border-accent/30 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest backdrop-blur-md">
                      {project.role || "Project"}
                    </div>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter"
                  >
                    {project.title}
                  </motion.h2>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8 md:p-16 grid lg:grid-cols-3 gap-16">
                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-12">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <div className="h-64 flex items-center justify-center">
                        <Loader2 className="text-accent animate-spin" size={48} />
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-12"
                      >
                        <section>
                          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">{t("projects.modal.overview")}</h3>
                          <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                            {project.longDescription || project.description}
                          </p>
                        </section>

                        {project.challenge && (
                          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">{t("projects.modal.challenge")}</h3>
                            <p className="text-zinc-400 leading-relaxed italic">
                              "{project.challenge}"
                            </p>
                          </section>
                        )}

                        {project.features && (
                          <section>
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">{t("projects.modal.features")}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {project.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                                  <span className="text-zinc-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </section>
                        )}

                        {project.gallery && (
                          <section>
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">{t("projects.modal.gallery")}</h3>
                            <div className="grid grid-cols-2 gap-4">
                              {project.gallery.map((img, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.02 }}
                                  className="aspect-video rounded-3xl overflow-hidden border border-white/10"
                                >
                                  <img
                                    src={img}
                                    alt={`${project.title} gallery ${i}`}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </section>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Column: Sidebar */}
                <div className="space-y-12">
                  <section>
                    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">{t("projects.modal.tech")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-400 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>

                  {project.metrics && (
                    <section>
                      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">{t("projects.modal.impact")}</h3>
                      <div className="space-y-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="group">
                            <p className="text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{metric.value}</p>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <section className="pt-8 border-t border-white/10">
                    <div className="flex flex-col gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all shadow-xl"
                      >
                        <ExternalLink size={18} />
                        {t("projects.modal.live")}
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                      >
                        <Github size={18} />
                        {t("projects.modal.repo")}
                      </a>
                      {project.caseStudy && (
                        <a
                          href={project.caseStudy}
                          className="w-full py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          <BookOpen size={18} />
                          {t("projects.modal.caseStudy")}
                        </a>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
