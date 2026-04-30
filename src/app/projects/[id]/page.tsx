'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, ExternalLink, Github, CheckCircle2, Rocket, Sparkles, Languages, Puzzle } from 'lucide-react';
import { PROJECTS } from '@/constants';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : null;
  const project = PROJECTS.find(p => p.id === id);
  console.log(project)
  if (!project) {
    return notFound();
  }

  return (
    <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        <div className="lg:col-span-7">
          <nav className="flex items-center gap-2 mb-4 text-slate-400 font-display text-sm font-bold">
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <ChevronRight size={16} />
            <span className="text-slate-900 dark:text-slate-200">{project.title}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl"
          >
            {project.longDescription}
          </motion.p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-bold font-display text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary" /> {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-display font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all"
            >
              <ExternalLink size={20} />
              Live Project
            </a>
            <a
              href={project.links.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-2xl font-display font-bold hover:bg-primary/5 dark:hover:bg-primary/20 active:scale-[0.98] transition-all"
            >
              <Github size={20} />
              Client Repository
            </a>
            <a
              href={project.links.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-2xl font-display font-bold hover:bg-primary/5 dark:hover:bg-primary/20 active:scale-[0.98] transition-all"
            >
              <Github size={20} />
              Server Repository
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
          >
            <img
              src={project.detailsImage}
              alt="Project Screenshot56"
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="p-6 text-center border-t border-slate-50 dark:border-slate-800">
              <p className="font-sans text-xs text-slate-400 italic">Desktop Preview — {project.vsn}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Challenges Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
              <Puzzle className="text-orange-500" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Technical Challenges</h2>
          </div>
          <div className="space-y-6">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 size={24} className="text-primary shrink-0 mt-1" />
                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future Roadmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
              <Rocket className="text-slate-600 dark:text-slate-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Future Roadmap</h2>
          </div>
          <div className="space-y-6">
            {project.roadmap.map((plan, i) => (
              <div key={i} className="flex gap-4">
                {i === 0 ? <Sparkles size={24} className="text-slate-400 shrink-0 mt-1" /> : <Languages size={24} className="text-slate-400 shrink-0 mt-1" />}
                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{plan}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Process Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">Process & Execution</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Developing this platform required a strict adherence to modern web standards. I focused on atomic design principles for the UI components, ensuring that every element from the shopping cart to the user profile was reusable and consistent.
            </p>
            <ul className="space-y-4">
              {['Test-driven development (TDD) approach', 'Continuous integration via GitHub Actions', 'Accessibility (A11y) compliant interface'].map(item => (
                <li key={item} className="flex items-center gap-4 font-display text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-square"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_YAzKNTlCxvZr-Fdr3GHzhSeANvt11LTkMssSb2MbBbWn7Bsfqfblo0POkhHUe9gCPTb93SaVe54Mb7it6VdKwRn2cB4mz_p4mRpU29W13KLA1ASwqwfILvZT3wQaowgVZqqZGUEkX9Cjepx7FGr7n-9JYjQU2SLnKYUg0afQDYC3oNy4bQ9UP4PAyDoPaJoVKBIGg-HUqs-v-K1pHURJ5jWCnAiCo8NJZSioDSzPBxhkpk2yMnhzy3UjzyH4qQoQSq0MX0LwxPk"
                alt="Code screen"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-square translate-y-12"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkHJq4sePXLj9rmhOajAidhirE3gtkEetfMxiGAXC_VwkRdxLETSupSi-r6RTQnh67UyIFC4M98KU2QFi1w6jfmssHrpYX3zr5_zpa0OdL3NztDTChWAAmjmFzBxUQ8ueqcxoT-glUJD9YMU8wydE3hT0kw_eqTI3GdPOGJaMv12lxuwYpw3_Tr6vTmp2j8I9rEwmIPPI0YSHmkBiis1U8oEdxhR8RHKOxg_sE4AudkSkEETYLVks3mjN65E8JU-ztClfglBR_2TQ"
                alt="Design wireframe"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
