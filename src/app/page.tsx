'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Zap, Terminal, Palette, Database, Cloud, Layers } from 'lucide-react';
import Link from 'next/link';
import { SKILLS, PROJECTS } from '@/constants';
import Typewriter from 'typewriter-effect';

const icons = {
  Zap: <Zap size={18} className="text-primary fill-primary" />,
  Terminal: <Terminal size={18} className="text-primary" />,
  Palette: <Palette size={18} className="text-primary" />,
  Database: <Database size={18} className="text-primary" />,
  Cloud: <Cloud size={18} className="text-primary" />,
  Architecture: <Layers size={18} className="text-primary" />
};

export default function Home() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight min-h-[144px] md:min-h-[216px]">
              <Typewriter
                options={{
                  loop: true,
                  cursor: '|',
                  delay: 50,
                  deleteSpeed: 30,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Hi, <br />I\'m <span class="text-primary">Rejwanul</span> <br /><span class="text-slate-900 dark:text-slate-200">Web Developer</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('I\'m a Full-stack Web Developer')
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h1>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-display font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95 text-center"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://www.linkedin.com/in/rejwanulcodes" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="https://x.com/RejwanulCodes" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="https://github.com/RejwanulIslam" className="text-slate-400 hover:text-primary transition-colors"><Github size={24} /></a>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex justify-center items-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>

            {/* Glowing Rotating Border */}
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-[0_0_40px_rgba(27,77,219,0.4)] dark:shadow-[0_0_40px_rgba(27,77,219,0.2)]">
              <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_260deg,#3f68f5_360deg)]"
                />
              </div>
              <div className="absolute inset-[4px] rounded-full bg-slate-50 dark:bg-slate-950"></div>
            </div>

            {/* Secondary Opposite Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 dark:border-primary/10"
              style={{ borderTopColor: '#1b4ddb' }}
            />

            {/* The Profile Image - Gentle Floating Animation */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[88%] h-[88%] rounded-full shadow-2xl overflow-hidden ring-4 ring-white dark:ring-slate-900 z-10 bg-slate-200 dark:bg-slate-800"
            >
              <img
                src="./profile.png"
                alt="Rejwanul Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-6 right-0 md:-right-4 z-20 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-slate-100 dark:border-slate-700"
            >
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 tracking-wider">AVAILABLE FOR HIRE</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Intro Blurb */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary">Rejwanul</span> - Web Developer
          </h2>
          <p className="font-sans text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Crafting clean and functional web experiences. Specialized in building high-performance, scalable applications with a focus on modern UI/UX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-display font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Download size={20} />
              Download Resume
            </button>
            <Link href="/projects" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-display font-bold hover:bg-primary/5 dark:hover:bg-primary/20 transition-all">
              View My Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full bg-slate-50 dark:bg-slate-950 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Proficiency</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Categorized toolkit for building high-performance applications.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  {icons[skill.icon as keyof typeof icons]}
                </div>
                <span className="font-display text-xs font-bold text-slate-700 dark:text-slate-300 tracking-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="w-full bg-white dark:bg-slate-900 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2 underline decoration-primary decoration-4 underline-offset-8">Featured Work</h2>
              <p className="text-slate-500 dark:text-slate-400">A curated selection of technical solutions.</p>
            </div>
            <Link href="/projects" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold flex items-center gap-2">View Case Study <ArrowRight size={16} /></span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
