import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    year: "2021 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    description: "Developing and maintaining full-stack web applications using React and Node.js. Designing RESTful APIs and managing relational/NoSQL databases. Implementing secure authentication and authorization systems.",
    icon: <Briefcase size={20} />
  },
  {
    year: "2019 - 2021",
    role: "Software Developer",
    company: "Tech Solutions",
    description: "Created responsive UI components and reusable frontend modules. Integrated backend APIs and handled complex state management. Wrote comprehensive unit and integration tests to ensure code quality.",
    icon: <Briefcase size={20} />
  },
  {
    year: "2015 - 2019",
    role: "B.Sc. in Computer Science",
    company: "Haramaya University",
    description: "Focused on software engineering, database management, and distributed systems. Graduated with a strong foundation in computer science principles.",
    icon: <GraduationCap size={20} />
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Professional Journey" subtitle="Experience" />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 border-4 border-[#030303] hidden md:block" />

                <div className="md:w-1/2">
                  <div className={`glass p-8 rounded-3xl hover:border-accent/30 transition-colors ${
                    i % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                        {exp.icon}
                      </div>
                      <span className="text-sm font-mono text-accent">{exp.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
