'use client';

import { motion } from 'motion/react';
import { Bolt, Terminal, Layers, Palette, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Hero & About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-display text-sm font-bold tracking-wider mb-4"
          >
            ABOUT ME
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
          >
            From Curiosity to <span className="text-primary">Engineering</span> the Future.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 font-sans text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              My journey into the digital realm began with a simple "Hello World" and an
              intense curiosity about how technology bridges human connection. What started
              as an exploration of code has evolved into a dedicated pursuit of
              Full-stack excellence.</p>
            <p>
              As a Software Engineer and aspiring Full-stack Developer, I specialize in
              crafting modern web architectures using Next.js, TypeScript, and PostgreSQL.
              I bridge the gap between creative vision and technical reality, building
              solutions that are as robust as they are intuitive.</p>
          </motion.div>
        </div>
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 aspect-[4/5] relative group border border-slate-100 dark:border-slate-800"
          >
            <img
              src="/profile.png"
              alt="Marlon Portrait"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Bento Skills Grid */}
      <section className="mb-24">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Proficiency</h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans">Categorized toolkit for building high-performance applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Bolt className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Frontend</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between font-display text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">React / Next.js</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map(tag => (
                  <span key={tag} className="bg-slate-50 dark:bg-slate-800 px-4 py-1.5 rounded-full text-xs font-bold font-display text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
              <Terminal className="text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Backend</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between font-display text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Node.js</span>
                  <span className="text-slate-600 dark:text-slate-400">88%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-slate-400 dark:bg-slate-600 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['PostgreSQL', 'Express', 'GraphQL', 'Prisma'].map(tag => (
                  <span key={tag} className="bg-slate-50 dark:bg-slate-800 px-4 py-1.5 rounded-full text-xs font-bold font-display text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
              <Layers className="text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Tools & UX</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between font-display text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Figma</span>
                  <span className="text-slate-600 dark:text-slate-400">92%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-slate-500 dark:bg-slate-500 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Git', 'Docker', 'AWS', 'Vercel'].map(tag => (
                  <span key={tag} className="bg-slate-50 dark:bg-slate-800 px-4 py-1.5 rounded-full text-xs font-bold font-display text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 italic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic & Persona Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        <div className="space-y-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Academic Foundation</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-primary">
              <h4 className="font-display text-xl font-bold text-primary mb-1">Diploma in Agriculture</h4>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mb-3">Agriculture Traning Institute Ishwardi, Pabna• 2022 - Present</p>
              {/* <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Specialized in Software Engineering and Distributed Systems. Graduated with Honors.
              </p> */}
            </div>
            {/* <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-display text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">Higher Secondary Certificate</h4>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mb-3">Saint Paul's Collegiate • 2016 - 2018</p>
              <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Science Stream with focus on Mathematics and Physics.
              </p>
            </div> */}
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-black text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-0"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold mb-6">Beyond the Code</h2>
            <p className="font-sans text-slate-300 leading-relaxed mb-8">
              When I'm not architecting systems, you'll find me exploring the balance between creative expression and physical discipline.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex items-center gap-4">
                <Palette className="text-primary" size={24} />
                <span className="font-display font-bold">Oil Painting</span>
              </div>
              <div className="flex items-center gap-4">
                <Smartphone className="text-primary" size={24} />
                <span className="font-display font-bold">Photography</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArA_GY9dVvdEgti3YHiEYYbFbTNdp5Fl2VKLNA67twiGFHEoPsu1Q7wGcrokqxnau1FOJDsuy1Hp8ptGZcadTnfwRPNtpb3eUdCQ0ywO_IZri3HHYvsLYk9SlXJxhGCc9fLRcr15Y7H3CyeGrDxJbYmUTPSppbi4Qw5attx5mFTzobIajtmB5eocO7ssb5eGpzLjCZuhjDVhvICH146y648Nl7Ot90deTLHp0XWnKQRGaulWXK7zBxovuCMQVJac3hUCBVrlJSClE"
                alt="Hobbies"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
