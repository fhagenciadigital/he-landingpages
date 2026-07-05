import React from 'react';

export default function CtaBlock({ description, buttonText, link }) {
  return (
    <div className="w-full card-glow rounded-2xl bg-elite-dark-light/60 backdrop-blur-sm p-5 sm:p-6 border border-white/[0.04] transition-all duration-300 hover:border-elite-gold/15 hover:bg-elite-dark-light/80">
      <div className="w-full flex flex-col items-stretch gap-5">
        <p className="w-full max-w-none text-sm sm:text-[15px] text-elite-cream/75 text-center leading-relaxed font-light">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full
            inline-flex items-center justify-center
            px-6 py-3.5 sm:py-4
            rounded-xl
            bg-gradient-to-r from-elite-gold to-elite-gold-light
            text-elite-dark font-semibold
            text-sm sm:text-[15px] tracking-wider
            shadow-lg shadow-elite-gold/10
            transition-all duration-300
            hover:from-elite-gold-light hover:to-elite-gold
            hover:shadow-xl hover:shadow-elite-gold/20
            hover:scale-[1.01]
            focus:outline-none focus:ring-2 focus:ring-elite-gold/60 focus:ring-offset-2 focus:ring-offset-elite-dark
            active:scale-[0.98]
          "
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
