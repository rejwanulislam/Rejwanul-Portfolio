/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1200px] mx-auto gap-6 w-full">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">Rejwanul Portfolio</p>
          <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
            © {currentYear} Developer Portfolio. Built with precision.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://github.com/RejwanulIslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rejwanulcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/RejwanulCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
