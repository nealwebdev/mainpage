'use client'

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Rocket,
  Briefcase,
  Wrench,
  User2,
  Mail,
  Command,
  ArrowUpRight,
  Github,
  Linkedin,
  Phone,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  X,
  Zap,
  Code,
  CheckCircle,
  AlertCircle,
} from "lucide-react";


import { CommandPalette } from "@/components/CommandPalette";
import { Pill } from "@/components/Pill";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { sections, gradients } from "@/lib/constants";
import { useKey } from "@/lib/hooks";
import { useLanguage } from "@/lib/languageContext";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";

// --- Main Page ---
export default function FuturisticFreelancer() {
  const { t } = useLanguage();
  const homeRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  const refs = useMemo(() => ({
    home: homeRef,
    work: workRef,
    services: servicesRef,
    about: aboutRef,
    contact: contactRef,
  }), []);
  
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Message sent successfully! I&apos;ll get back to you soon.');
        reset();
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
    }
  };

  useKey("k", () => {
    console.log("Cmd/Ctrl+K pressed, opening palette");
    setPaletteOpen(true);
  }); // open with ⌘K / Ctrl+K

  // Debug: Log when palette state changes
  useEffect(() => {
    console.log("Palette state changed:", paletteOpen);
  }, [paletteOpen]);

  const scrollTo = (id: string) => {
    const ref = refs[id as keyof typeof refs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && refs[hash as keyof typeof refs]?.current) {
      refs[hash as keyof typeof refs].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [refs]);

  const onSelect = (id: string) => {
    window.history.replaceState(null, "", `#${id}`);
    scrollTo(id);
  };

  return (
    <div className={`${gradients.page} ${gradients.grid} min-h-screen selection:bg-purple-400/40`}>
      {/* Enhanced animated gradient backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        initial={{ filter: "blur(80px)", opacity: 0.6 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.6], 
          scale: [1, 1.2, 1], 
          rotate: [0, 15, -10, 0],
          filter: ["blur(80px)", "blur(60px)", "blur(80px)"]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(800px 300px at 20% 20%, rgba(147,51,234,0.25), transparent)," +
            "radial-gradient(600px 250px at 80% 30%, rgba(236,72,153,0.2), transparent)," +
            "radial-gradient(700px 300px at 50% 70%, rgba(6,182,212,0.2), transparent)," +
            "radial-gradient(500px 200px at 10% 80%, rgba(34,197,94,0.15), transparent)",
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-6xl px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60" />
              <div className="relative grid place-items-center size-8 sm:size-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-300/30">
                <Rocket size={16} className="text-purple-300 sm:w-[18px] sm:h-[18px]" />
              </div>
            </div>
            <div>
              <div className="font-bold tracking-wide text-base sm:text-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {t.header.title}
              </div>
              <div className="text-xs opacity-80 -mt-0.5 hidden xs:block">{t.header.subtitle}</div>
              <div className="text-xs opacity-80 -mt-0.5 xs:hidden">Full-Stack Developer</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs opacity-90">
            <LanguageSwitcher />
            <button
              onClick={() => setPaletteOpen(true)}
              className={`inline-flex items-center justify-center gap-1 sm:gap-2 rounded-xl border border-purple-300/30 bg-purple-500/20 px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-purple-500/30 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation ${paletteOpen ? "bg-purple-500/30" : ""}`}
            >
              <Search size={12} className="sm:w-[14px] sm:h-[14px]"/>
              <span className="hidden sm:inline">{t.header.quickSearch}</span>
              <span className="sm:hidden">{t.header.search}</span>
              <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-white/10 px-1.5 font-mono text-[10px] font-medium opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            {paletteOpen && (
              <Pill className="bg-green-500/20 border-green-300/30 animate-pulse">
                🔍 Open
              </Pill>
            )}
          </div>
        </div>
      </header>


      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} items={sections} onSelect={onSelect} />

      {/* Main content */}
      <main className="snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Home */}
        <section ref={refs.home} id="home" className="snap-start min-h-screen grid place-items-center px-4 sm:px-6 py-8 sm:py-0 relative">
          {/* Floating elements - hidden on mobile for performance */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0], 
                y: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, -20, 0], 
                y: [0, 20, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 sm:mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 text-xs sm:text-sm font-medium">
                <Sparkles size={14} className="text-purple-300 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{t.hero.badge}</span>
                <span className="xs:hidden">{t.hero.badgeMobile}</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2"
            >
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="text-white">{t.hero.subtitle}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t.hero.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4"
            >
              <button
                onClick={() => onSelect('work')}
                className={`group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-6 py-3 w-full sm:w-auto ${gradients.glass} hover:${gradients.glassHover} transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation`}
              >
                <Briefcase size={16} className="text-purple-300 sm:w-[18px] sm:h-[18px]"/>
                <span className="font-medium text-sm sm:text-base">{t.hero.viewWork}</span>
                <ArrowUpRight size={14} className="text-purple-300 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </button>
              
              <button
                onClick={() => onSelect('contact')}
                className={`inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-6 py-3 w-full sm:w-auto ${gradients.accent} hover:${gradients.accentHover} text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation shadow-lg`}
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" /> 
                <span className="text-sm sm:text-base">{t.hero.startProject}</span>
              </button>
            </motion.div>
            
                                                  <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
               className="flex items-center justify-center gap-4 text-sm opacity-80"
             >
               <Pill className="bg-purple-500/20 border-purple-300/30">
                 <Code size={12} className="text-purple-300" />
                  Full-Stack Developer
                </Pill>
                <Pill className="bg-pink-500/20 border-pink-300/30">
                  <Zap size={12} className="text-pink-300" />
                  IT Solutions
                </Pill>
                <Pill className="bg-cyan-500/20 border-cyan-300/30">
                  <Sparkles size={12} className="text-cyan-300" />
                  Modern Tech
                </Pill>
               </motion.div>
             

          </div>
        </section>

        {/* Work */}
        <section ref={refs.work} id="work" className="snap-start min-h-screen px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {t.work.title}
                </span>
              </h2>
              <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto px-4">
                {t.work.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
              {t.work.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative overflow-hidden rounded-2xl p-6 ${gradients.card} hover:${gradients.cardHover} transition-all duration-300 cursor-pointer`}
                >
                  <div className="absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl group-hover:scale-150 transition-transform duration-500"/>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm opacity-70 text-purple-300">Featured Project</div>
                        <div className="text-lg font-semibold text-white">{project.title}</div>
                      </div>
                      <ArrowUpRight className="opacity-60 group-hover:opacity-100 transition-opacity text-purple-300" size={18}/>
                    </div>
                    <p className="text-sm opacity-80 mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-2 py-1 text-xs rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 text-purple-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section ref={refs.services} id="services" className="snap-start min-h-screen px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  {t.services.title}
                </span>
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                {t.services.description}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: t.services.services[0].title, 
                  desc: t.services.services[0].description,
                  icon: Code,
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  title: t.services.services[1].title, 
                  desc: t.services.services[1].description,
                  icon: Wrench,
                  color: "from-pink-500 to-cyan-500"
                },
                { 
                  title: t.services.services[2].title, 
                  desc: t.services.services[2].description,
                  icon: Zap,
                  color: "from-cyan-500 to-blue-500"
                },
                { 
                  title: "Email Services", 
                  desc: "Professional email setup, custom domain configuration, spam protection, and email marketing automation systems.",
                  icon: Mail,
                  color: "from-blue-500 to-indigo-500"
                },
                { 
                  title: "Hosting & DevOps", 
                  desc: "Cloud hosting setup, server management, CI/CD pipelines, monitoring, and performance optimization.",
                  icon: Rocket,
                  color: "from-indigo-500 to-purple-500"
                },
                { 
                  title: "Maintenance & Support", 
                  desc: "Ongoing website maintenance, security updates, performance monitoring, and 24/7 technical support.",
                  icon: Shield,
                  color: "from-green-500 to-emerald-500"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl p-8 ${gradients.card} hover:${gradients.cardHover} transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className="text-white" />
                  </div>
                  <div className="text-xl font-semibold mb-3 text-white">{service.title}</div>
                  <p className="opacity-80 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold text-center mb-8 text-white">
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Additional Services
                </span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Domain Management",
                    desc: "Domain registration, DNS configuration, SSL certificates, and domain transfer services.",
                    icon: "🌐"
                  },
                  {
                    title: "SEO Optimization",
                    desc: "Search engine optimization, meta tags, structured data, and performance improvements.",
                    icon: "📈"
                  },
                  {
                    title: "Security Audits",
                    desc: "Vulnerability assessments, security hardening, and compliance checks for your applications.",
                    icon: "🔒"
                  },
                  {
                    title: "Backup Solutions",
                    desc: "Automated backup systems, disaster recovery planning, and data protection strategies.",
                    icon: "💾"
                  },
                  {
                    title: "Performance Tuning",
                    desc: "Database optimization, caching strategies, and speed improvements for better user experience.",
                    icon: "⚡"
                  },
                  {
                    title: "Mobile Optimization",
                    desc: "Responsive design, mobile-first development, and progressive web app features.",
                    icon: "📱"
                  },
                  {
                    title: "Analytics Setup",
                    desc: "Google Analytics, custom tracking, conversion optimization, and reporting dashboards.",
                    icon: "📊"
                  },
                  {
                    title: "Training & Documentation",
                    desc: "User training, technical documentation, and knowledge transfer for your team.",
                    icon: "📚"
                  }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`rounded-xl p-6 ${gradients.card} hover:${gradients.cardHover} transition-all duration-300 group border border-purple-300/20`}
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="text-lg font-semibold mb-2 text-white">{service.title}</div>
                    <p className="text-sm opacity-70 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            
          </div>
        </section>

        {/* About */}
        <section ref={refs.about} id="about" className="snap-start min-h-screen px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${gradients.card}`}
            >
              <p className="opacity-90 leading-relaxed text-lg mb-8">
                I&apos;m a versatile IT professional with expertise in creating robust, scalable web solutions 
                that integrate seamlessly with modern technologies and AI. I focus on building intelligent 
                digital ecosystems that automate processes and enhance user experiences across various platforms.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Web Development", level: "Expert" },
                  { name: "Full-Stack", level: "Advanced" },
                  { name: "REST APIs", level: "Expert" },
                  { name: "GraphQL", level: "Advanced" },
                  { name: "AI Integration", level: "Advanced" },
                  { name: "Modern Frameworks", level: "Advanced" },
                  { name: "DevOps", level: "Advanced" },
                  { name: "Database Design", level: "Advanced" }
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                  >
                    <div className="font-semibold text-white mb-1">{skill.name}</div>
                    <div className="text-sm opacity-70 text-purple-300">{skill.level}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section ref={refs.contact} id="contact" className="snap-start min-h-screen px-6 py-28">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  Let&apos;s Build Together
                </span>
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Ready to bring your digital vision to life? I&apos;m here to help you create 
                something extraordinary. Let&apos;s discuss your project and make it happen.
              </p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`grid gap-4 rounded-2xl p-8 ${gradients.card}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Form Status Message */}
              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    formStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-300/30 text-green-300' 
                      : 'bg-red-500/20 border border-red-300/30 text-red-300'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm font-medium">{formMessage}</span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    {...register('name')}
                    placeholder="Your name" 
                    className={`w-full rounded-xl bg-white/10 border px-4 py-3 outline-none transition-colors ${
                      errors.name ? 'border-red-400 focus:border-red-300' : 'border-white/20 focus:border-purple-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input 
                    {...register('email')}
                    placeholder="Email" 
                    type="email" 
                    className={`w-full rounded-xl bg-white/10 border px-4 py-3 outline-none transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-300' : 'border-white/20 focus:border-purple-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <input 
                  {...register('company')}
                  placeholder="Company (optional)" 
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-purple-300 transition-colors"
                />
              </div>
              
              <div>
                <textarea 
                  {...register('message')}
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className={`w-full rounded-xl bg-white/10 border px-4 py-3 outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-300' : 'border-white/20 focus:border-purple-300'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message}</p>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 justify-between">
                <div className="flex items-center gap-4 opacity-80 text-sm">
                  <a className="inline-flex items-center gap-2 hover:text-purple-300 transition-colors" href="#">
                    <Github size={18}/> GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 hover:text-pink-300 transition-colors" href="#">
                    <Linkedin size={18}/> LinkedIn
                  </a>
                  <a className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors" href="tel:+32000000000">
                    <Phone size={18}/> +32 000 00 00
                  </a>
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 ${gradients.accent} hover:${gradients.accentHover} text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail size={18}/> Send Message
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${gradients.card} border border-purple-300/30`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
              >
                <X size={20} className="text-purple-300" />
              </button>

              {/* Project header */}
              <div className="mb-8">
                <div className="text-sm opacity-70 text-purple-300 mb-2">Featured Project</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-4">{selectedProject.desc}</p>
                {selectedProject.overview && (
                  <p className="text-base opacity-70 leading-relaxed">{selectedProject.overview}</p>
                )}
              </div>

              {/* Project details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="opacity-80">Custom web development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="opacity-80">API integrations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="opacity-80">Performance optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="opacity-80">Security implementation</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string, tagIdx: number) => (
                      <span key={tagIdx} className="px-3 py-2 text-sm rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 text-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.features?.map((feature: string, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-300/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap size={16} className="text-purple-300" />
                        <span className="font-medium text-white">{feature}</span>
                      </div>
                      <p className="text-sm opacity-70">Core project feature</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105">
                  <Mail size={18} />
                  Start Similar Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-6 py-12 opacity-70 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
              Neal Focke
            </div>
            <div className="text-sm opacity-60">Full-Stack IT Solutions Developer</div>
          </div>
          <div className="text-xs opacity-50">
            © {new Date().getFullYear()} Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
// Railway deployment trigger - Fri Aug 22 21:53:24 CEST 2025
