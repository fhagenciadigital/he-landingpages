import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import CtaBlock from './components/CtaBlock';
import Footer from './components/Footer';
import { ctaBlocks } from './data/links';

export default function App() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center">
      <main className="w-full max-w-container mx-auto flex flex-col items-center">
        <ProfileHeader />

        <nav className="w-full px-5 flex flex-col gap-4 mt-4 mb-2" aria-label="Links principais">
          {ctaBlocks.map((block) => (
            <CtaBlock
              key={block.id}
              description={block.description}
              buttonText={block.buttonText}
              link={block.link}
            />
          ))}
        </nav>

        <Footer />
      </main>
    </div>
  );
}
