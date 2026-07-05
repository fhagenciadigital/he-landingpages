import React from 'react';
import { siteConfig } from '../data/links';

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center w-full pt-10 pb-4 px-5">
      <div className="relative w-full max-w-[180px] aspect-square mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-elite-gold/30 via-elite-gold/10 to-transparent blur-2xl" />
        <img
          src="/images/fernanda-breitenbach.png"
          alt="Fernanda Breitenbach | Harmonizadora Elite"
          className="h-full w-full rounded-full object-cover border-2 border-elite-gold/30 shadow-2xl shadow-elite-gold/5"
          loading="eager"
        />
      </div>

      <h1 className="profile-title-original w-full text-2xl sm:text-3xl font-semibold text-center text-balance leading-tight mb-3 tracking-wide">
        {siteConfig.title}
      </h1>

      <p className="w-full text-sm sm:text-base text-elite-cream/70 text-center leading-relaxed text-balance font-light">
        {siteConfig.subtitle}
      </p>
    </header>
  );
}
