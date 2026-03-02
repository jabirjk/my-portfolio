import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Get in touch</h3>
            <p className="text-zinc-400 mb-12 text-lg">
              Have a project in mind? Or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:Jabirkedir21@gmail.com" className="text-lg text-zinc-900 dark:text-white font-medium hover:text-accent transition-colors">Jabirkedir21@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+251910722502" className="text-lg text-zinc-900 dark:text-white font-medium hover:text-accent transition-colors">+251910722502</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-zinc-900 dark:text-white font-medium">Addis Abeba, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/jabirjk/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/jabir-kedir-b163aa245?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("contact.name")}</label>
                  <input 
                    type="text" 
                    value={formState.name}
                    onChange={e => {
                      setFormState({...formState, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: ""});
                    }}
                    placeholder="John Doe"
                    className={`w-full bg-zinc-900/50 dark:bg-zinc-900/50 border ${errors.name ? 'border-red-500' : 'border-white/5'} rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-2">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("contact.email")}</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    onChange={e => {
                      setFormState({...formState, email: e.target.value});
                      if (errors.email) setErrors({...errors, email: ""});
                    }}
                    placeholder="john@example.com"
                    className={`w-full bg-zinc-900/50 dark:bg-zinc-900/50 border ${errors.email ? 'border-red-500' : 'border-white/5'} rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-colors`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-2">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t("contact.message")}</label>
                <textarea 
                  rows={5}
                  value={formState.message}
                  onChange={e => {
                    setFormState({...formState, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: ""});
                  }}
                  placeholder="Tell me about your project..."
                  className={`w-full bg-zinc-900/50 dark:bg-zinc-900/50 border ${errors.message ? 'border-red-500' : 'border-white/5'} rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none`}
                />
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider pl-2">{errors.message}</p>}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all disabled:opacity-50 group"
              >
                {isSubmitting ? "Sending..." : t("contact.send")}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
