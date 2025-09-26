'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import GenerateSection from '@/components/GenerateSection';
import Footer from '@/components/Footer';
import { carouselItems } from '@/data/carousel';
import { tools } from '@/data/tools';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const themeClasses = isDark 
    ? "bg-gray-900 text-white" 
    : "bg-white text-gray-900";

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses}`}>
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      
      <main className="flex-grow px-10 py-26 max-w-full">
        <Carousel items={carouselItems} isDark={isDark} />
        <GenerateSection tools={tools} isDark={isDark} />
      </main>

  
      <footer className='w-full px-6 p'>
        <Footer />
      </footer>
      
    </div>
  );
}
