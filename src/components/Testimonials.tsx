import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechNova",
    content: "Working with this developer was a game-changer for our platform. The attention to detail and technical prowess is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Google",
    content: "A rare talent who understands both design and code. The user experience they built for us is world-class.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder of Creative Pulse",
    content: "The most professional and creative developer I've had the pleasure of working with. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-zinc-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="What Clients Say" subtitle="Testimonials" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 md:p-20 rounded-[3rem] text-center relative"
            >
              <Quote className="text-accent/20 absolute top-10 left-10 w-20 h-20 -z-10" />
              
              <p className="text-2xl md:text-3xl text-zinc-200 italic leading-relaxed mb-12">
                "{testimonials[index].content}"
              </p>

              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[index].avatar} 
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full border-2 border-accent mb-4"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{testimonials[index].name}</h4>
                <p className="text-sm text-zinc-500">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
