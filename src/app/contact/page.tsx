'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Send, MapPin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Project Inquiry', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Let's build something <span className="text-primary">remarkable</span> together.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          Whether you have a specific project in mind or just want to say hi, my inbox is always open. I typically respond within 24 hours.
        </motion.p>
      </section>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 group transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">Email</h3>
            <p className="font-sans text-slate-500 dark:text-slate-400 mb-6">rejwanul45@gmail.com</p>
            <a href="rejwanul45@gmail.com" className="text-primary font-bold inline-flex items-center gap-2 group/link">
              Send message
              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 group transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-orange-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
            <p className="font-sans text-slate-500 dark:text-slate-400 mb-6">+880 1522110547</p>
            <a href="tel:+8801522110547" className="text-primary font-bold inline-flex items-center gap-2 group/link">
              Call now
              <Phone size={18} className="group-hover/link:animate-pulse" />
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 group transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-emerald-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">WhatsApp</h3>
            <p className="font-sans text-slate-500 dark:text-slate-400 mb-6">Available for quick syncs.</p>
            <a href="https://wa.me/01775532881" className="text-primary font-bold inline-flex items-center gap-2 group/link">
              Message on WhatsApp
              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-display text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-display text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">SUBJECT</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-sans cursor-pointer appearance-none"
                >
                  <option>Project Inquiry</option>
                  <option>Consultation</option>
                  <option>General Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-display text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">YOUR MESSAGE</label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-sans resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  Your message has been sent successfully. I will get back to you soon!
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3">
                  <AlertCircle size={20} />
                  An error occurred while sending your message. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-2xl font-display font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-70 disabled:hover:shadow-none active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Office Hub / Map Section */}
      {/* <section className="mt-24 relative group h-[500px] rounded-3xl overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-slate-900/0 transition-all duration-700 z-10 pointer-events-none"></div>
         <img 
           src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuGyeBMxYgzaFvJo652_XGRi8vsVWR5XmsD5iqLF6Fy_JNg92UqIVL0qd_CXDvk1TsQMEOCvHNBbgnywLn3KPkGVD1cahpRAFb-3Owfkmudnh5uk2gSYWInVF6b718wcZNqLJ_N-DDL0c3LROZNBj68uIjnfMSisSekI_XlE2HwYB-41AngwPg-7LIUClwUZOYMAqe7eVjmFZZ7LdKkc353q4Mzo-lGEs8arOLPleiZpKnONiYcnz5FPb42RLO7tubqLEhMRt1mtc" 
           alt="City Background" 
           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110"
         />
         
         <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="absolute bottom-8 left-8 z-20 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-sm border border-slate-100 dark:border-slate-800"
         >
            <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={28} />
                </div>
                <div>
                    <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">Office Hub</h4>
                    <p className="font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                        Creative District, Studio 402<br />
                        San Francisco, CA 94103
                    </p>
                </div>
            </div>
         </motion.div>
      </section> */}
    </main>
  );
}
