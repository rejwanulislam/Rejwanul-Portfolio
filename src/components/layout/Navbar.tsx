'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from '../ThemeToggle';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div style={{
      width: 38, height: 38,
      borderRadius: '50%',
      background: '#3367e0',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <span style={{ color: '#fff', fontSize: 17, fontFamily: 'Georgia,serif', fontWeight: 600 }}>
        <Image src="/profile.png" alt="Logo" width={30} height={30} className='rounded-full' />

      </span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontSize: 16, fontWeight: 500 }}>Rejwanul</span>
      <span style={{ fontSize: 9, letterSpacing: '2px', opacity: 0.5, marginTop: 2 }}>
        PORTFOLIO
      </span>
    </div>
  </div>
);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tighter font-display">
            {/* <Image src="/profile.png" alt="Logo" width={30} height={30} className='rounded-full' />
             */}
            {Logo()}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-display text-sm font-semibold tracking-tight transition-colors duration-200 relative pb-1 ${pathname === link.path
                ? 'text-primary dark:text-primary'
                : 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary'
                }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2 rounded-full font-display text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMenu} />
            <aside className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tighter font-display">DevPortfolio</span>
                <button onClick={toggleMenu} className="text-slate-400 hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={toggleMenu}
                    className={`flex items-center gap-4 p-4 rounded-xl font-display text-lg font-bold transition-all active:scale-[0.98] ${pathname === link.path
                      ? 'bg-slate-50 dark:bg-slate-800 text-primary'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 italic text-sm text-slate-400 text-center">
                Built with precision.
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
