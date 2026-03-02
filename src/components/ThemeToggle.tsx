import { Sun, Moon, Leaf } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  theme: "dark" | "light" | "green";
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  const getIcon = () => {
    switch (theme) {
      case "dark": return <Sun size={24} />;
      case "light": return <Moon size={24} />;
      case "green": return <Leaf size={24} />;
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-28 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-accent shadow-2xl hover:border-accent transition-all"
      aria-label="Toggle Theme"
    >
      {getIcon()}
    </motion.button>
  );
};
