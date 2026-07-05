import React from 'react';
import { footerLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="w-full mt-8 mb-10 px-5 py-6 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-elite-cream/50">
        <a
          href={footerLinks[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-elite-gold transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-elite-gold/40 rounded"
        >
          {footerLinks[0].text}
        </a>

        <span className="text-elite-cream/25 select-none">|</span>

        <a
          href={footerLinks[1].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-elite-gold transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-elite-gold/40 rounded"
        >
          {footerLinks[1].text}
        </a>
      </div>

      <p className="text-xs text-elite-cream/30 mt-1">
        &copy; {new Date().getFullYear()} Todos os direitos reservados
      </p>
    </footer>
  );
}
