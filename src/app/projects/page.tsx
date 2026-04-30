'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/constants';

export default function Projects() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen">
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Projects Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          A curated selection of technical solutions built with modern architectural principles and a focus on user experience.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col group hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="h-64 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full font-display text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.id}`}
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-display font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
              >
                View Details
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
