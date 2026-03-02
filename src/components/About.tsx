import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Code2, Palette, Terminal, Globe, Cpu, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
      <span className="text-sm font-mono text-accent">{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "circOut" }}
        className="h-full bg-accent"
      />
    </div>
  </motion.div>
);

export const About = () => {
  const { t } = useTranslation();
  const techStack = [
    { icon: <Code2 size={24} />, name: "Frontend", tools: "React, Angular, Vue, TS" },
    { icon: <Database size={24} />, name: "Backend", tools: "Node, Java, .NET, Django" },
    { icon: <Palette size={24} />, name: "Design", tools: "Tailwind, Figma, Bootstrap" },
    { icon: <Terminal size={24} />, name: "DevOps", tools: "Docker, AWS, Nginx" },
    { icon: <Globe size={24} />, name: "Databases", tools: "PostgreSQL, MongoDB, MySQL" },
    { icon: <Cpu size={24} />, name: "Security", tools: "CSRF, XSS, PHPUnit" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("about.title")} subtitle={t("about.subtitle")} />
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
              {t("about.bio1")}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 mb-12">
              {t("about.bio2")}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="glass p-6 rounded-2xl hover:border-accent/50 transition-colors group cursor-default"
                >
                  <div className="text-accent mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="text-zinc-900 dark:text-white font-bold mb-1">{tech.name}</h4>
                  <p className="text-xs text-zinc-500">{tech.tools}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-10">{t("about.skillsTitle")}</h3>
            <SkillBar name="React / Angular / Vue" level={95} delay={0.1} />
            <SkillBar name="Node.js / Express" level={90} delay={0.2} />
            <SkillBar name="Java / .NET / Django" level={85} delay={0.3} />
            <SkillBar name="PostgreSQL / MongoDB" level={88} delay={0.4} />
            <SkillBar name="Docker / AWS / Nginx" level={82} delay={0.5} />
            <SkillBar name="Testing & Security" level={80} delay={0.6} />
            
            <div className="mt-12 p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
                "{t("about.quote")}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
