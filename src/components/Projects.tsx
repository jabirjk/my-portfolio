import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Github, Layers, Filter, Maximize2, BookOpen } from "lucide-react";
import { useState, useMemo } from "react";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    title: "Court Expert AI Platform",
    description: "An AI-based legal consultation platform for court experts and legal professionals.",
    longDescription: "Court Expert is a sophisticated platform that leverages AI to assist legal professionals. It features a complex backend built with Node.js and Prolog for logical reasoning, integrated with a modern React frontend. The system includes secure payment processing via Stripe and an advanced admin dashboard for system management.",
    tech: ["React", "Node.js", "MongoDB", "Prolog", "Python", "Stripe"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Full Stack Developer",
    challenge: "Integrating symbolic logic (Prolog) with modern web technologies for legal reasoning.",
    features: ["AI-driven legal analysis", "Secure Stripe payments", "Comprehensive admin dashboard", "Role-based access control"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Processing", value: "Real-time" },
      { label: "Security", value: "Enterprise" }
    ],
    size: "large"
  },
  {
    title: "Information Dispatch System",
    description: "A real-time discussion and information dispatch system for organizational communication.",
    longDescription: "This system facilitates seamless information flow and discussion within large organizations. Built with a focus on real-time updates and high availability, it ensures that critical information reaches the right stakeholders instantly. It includes a powerful Admin Dashboard for managing user roles, monitoring system health, and overseeing all dispatch activities with real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1581291518064-0ed2a960b1d4?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Lead Developer",
    challenge: "Ensuring sub-second message delivery across thousands of concurrent users.",
    features: [
      "Real-time discussion threads",
      "Instant dispatch notifications",
      "Advanced search & filtering",
      "Comprehensive Admin Dashboard",
      "User Role Management (RBAC)",
      "System Health Monitoring",
      "Dispatch Analytics & Reporting"
    ],
    metrics: [
      { label: "Delivery", value: "<100ms" },
      { label: "Concurrency", value: "5k+" },
      { label: "Admin Control", value: "Full" }
    ],
    size: "small"
  },
  {
    title: "Task Management Pro",
    description: "A robust task management application with role-based access and real-time synchronization.",
    longDescription: "Task Management Pro is designed for high-performance teams. It features a PostgreSQL backend for complex data relationships and a React frontend for a smooth, responsive user experience. Real-time updates keep everyone in sync.",
    tech: ["React", "Express", "PostgreSQL", "Redux"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Full Stack Developer",
    challenge: "Implementing complex role-based access control (RBAC) with real-time state synchronization.",
    features: ["Dynamic task boards", "RBAC security model", "Real-time collaboration", "Detailed productivity analytics"],
    metrics: [
      { label: "Sync Speed", value: "Instant" },
      { label: "User Limit", value: "Unlimited" },
      { label: "Database", value: "Postgres" }
    ],
    size: "small"
  },
  {
    title: "Lumina Design System",
    description: "An award-winning open-source design system used by over 5,000 developers worldwide.",
    longDescription: "Lumina is more than just a component library; it's a complete design ecosystem. It focuses on accessibility, performance, and developer experience. With over 50+ highly customizable components and a robust theme engine, Lumina helps teams build consistent UIs faster.",
    tech: ["TypeScript", "Tailwind", "Storybook"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    caseStudy: "#",
    role: "UI/UX Architect",
    challenge: "Creating a highly flexible system that scales across multiple frameworks while maintaining strict brand consistency.",
    features: ["Framework agnostic core", "Automated accessibility testing", "Dynamic theming engine"],
    metrics: [
      { label: "Components", value: "50+" },
      { label: "GitHub Stars", value: "2.5k" },
      { label: "NPM Downloads", value: "10k/mo" }
    ],
    size: "small"
  },
  {
    title: "Zenith: AI-Powered CRM",
    description: "A next-generation CRM with automated lead scoring and predictive sales analytics.",
    longDescription: "Zenith leverages OpenAI's GPT-4 to analyze customer interactions and provide actionable insights. It features a custom-built workflow engine, automated email sequencing, and a real-time dashboard for sales performance tracking. Built with Next.js for optimal performance and SEO.",
    tech: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1504868584819-f8e90526ef7d?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Lead Full Stack Engineer",
    challenge: "Developing a robust lead scoring algorithm that processes unstructured communication data in real-time.",
    features: ["Automated lead qualification", "Predictive revenue forecasting", "Multi-channel communication sync"],
    metrics: [
      { label: "Lead Conversion", value: "+35%" },
      { label: "AI Accuracy", value: "92%" },
      { label: "User Growth", value: "200%" }
    ],
    size: "large"
  },
  {
    title: "Pulse: Health Monitoring",
    description: "A real-time health tracking mobile app integrated with wearable IoT devices.",
    longDescription: "Pulse provides users with instant feedback on their vital signs by connecting to various IoT sensors. It uses WebSockets for low-latency data streaming and InfluxDB for high-performance time-series data storage. The app includes personalized health recommendations based on historical data trends.",
    tech: ["React Native", "WebSockets", "InfluxDB", "Node.js"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Mobile Developer",
    challenge: "Optimizing battery consumption while maintaining a continuous real-time connection to multiple Bluetooth sensors.",
    features: ["Real-time vital tracking", "Emergency alert system", "Historical trend analysis"],
    metrics: [
      { label: "Sync Latency", value: "<50ms" },
      { label: "Battery Impact", value: "-15%" },
      { label: "Active Users", value: "10k+" }
    ],
    size: "small"
  },
  {
    title: "SecurePass: Auth Service",
    description: "An enterprise-grade authentication and authorization service with multi-factor support.",
    longDescription: "SecurePass is a standalone identity provider supporting OAuth2, OIDC, and SAML protocols. It features advanced security measures including rate limiting, brute-force protection, and biometric MFA. Designed to handle millions of authentication requests with high availability.",
    tech: ["Node.js", "Redis", "OAuth2", "JWT", "Docker"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    role: "Security Engineer",
    challenge: "Implementing a zero-trust architecture that remains performant under heavy traffic spikes.",
    features: ["Biometric MFA", "Anomaly detection", "Seamless SSO integration"],
    metrics: [
      { label: "Auth Speed", value: "<20ms" },
      { label: "Security Score", value: "A+" },
      { label: "Uptime", value: "99.999%" }
    ],
    size: "small"
  },
  {
    title: "AetherCloud: Edge Platform",
    description: "A globally distributed edge computing platform with real-time observability and automated scaling.",
    longDescription: "AetherCloud is a sophisticated edge computing platform designed to minimize latency for global applications. It features a custom-built orchestration engine, real-time telemetry using gRPC and Prometheus, and a multi-tenant dashboard with advanced traffic routing controls. The platform includes a comprehensive Admin Dashboard for global infrastructure management, real-time node monitoring, and automated failover configuration. Built with a focus on high availability and sub-millisecond response times, it handles millions of concurrent requests across 50+ global points of presence.",
    tech: ["Go", "Kubernetes", "GraphQL", "React", "PostgreSQL", "Prometheus"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
      "https://images.unsplash.com/photo-1504868584819-f8e90526ef7d?auto=format&fit=crop&q=80&w=800&h=600"
    ],
    link: "#",
    github: "https://github.com/jabirjk/",
    caseStudy: "#",
    role: "System Architect",
    challenge: "Building a globally consistent state across 50+ regions with sub-millisecond synchronization.",
    features: [
      "Global gRPC mesh network",
      "Autonomous scaling engine",
      "Multi-tenant isolation",
      "Centralized Admin Dashboard",
      "Real-time Node Observability",
      "Automated Failover Management"
    ],
    metrics: [
      { label: "Regions", value: "50+" },
      { label: "Requests/sec", value: "1M+" },
      { label: "Admin Control", value: "Global" }
    ],
    size: "large"
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.tech.forEach(t => techs.add(t)));
    const sortedTechs = Array.from(techs).sort();
    
    return [
      { name: "All", count: projects.length },
      ...sortedTechs.map(tech => ({
        name: tech,
        count: projects.filter(p => p.tech.includes(tech)).length
      }))
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(p => p.tech.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24 bg-zinc-950/50">
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Featured Projects" subtitle="Portfolio" />

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-500 mr-2">
            <Filter size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  filter === cat.name 
                    ? "bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "glass text-zinc-400 hover:text-white hover:border-accent/50"
                }`}
              >
                {cat.name}
                <span className={`text-[10px] opacity-60 ${filter === cat.name ? "text-white" : "text-zinc-500"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 min-h-[600px] [perspective:1500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ 
                   y: -10,
                   scale: 1.01,
                   boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.1)"
                }}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className={`group relative glass rounded-[2rem] overflow-hidden cursor-pointer flex flex-col ${
                  project.size === "large" ? "md:col-span-4" : "md:col-span-2"
                }`}
              >
                <div className="flex-1 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                      {project.role}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 0 20px rgba(99,102,241,0.8)"
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:text-white transition-all shadow-lg"
                    >
                      <Maximize2 size={20} />
                    </motion.div>
                    <motion.a 
                      href={project.link} 
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 0 20px rgba(99,102,241,0.8)"
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:text-white transition-all shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.github} 
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 0 20px rgba(99,102,241,0.8)"
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:text-white transition-all shadow-lg"
                    >
                      <Github size={20} />
                    </motion.a>
                    {project.caseStudy && (
                      <motion.a 
                        href={project.caseStudy} 
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "var(--color-accent)",
                          boxShadow: "0 0 20px rgba(99,102,241,0.8)"
                        }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:text-white transition-all shadow-lg"
                      >
                        <BookOpen size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-b from-transparent to-black/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Layers size={16} className="text-accent" />
                      <div className="flex gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{t}</span>
                        ))}
                        {project.tech.length > 3 && <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">+{project.tech.length - 3}</span>}
                      </div>
                    </div>
                    {project.metrics && (
                       <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                         {project.metrics[0].value} {project.metrics[0].label}
                       </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 glass rounded-full text-white font-bold hover:bg-white/10 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};
