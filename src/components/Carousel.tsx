'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from '@/types';

interface CarouselProps {
  items: CarouselItem[];
  isDark: boolean;
}

export default function Carousel({ items, isDark }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const cardClasses = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  return (
    <div className="relative mb-12">
      {/* Wrapper for carousel */}
      <div className="flex space-x-0 md:space-x-13 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full md:min-w-[70%] lg:min-w-[60%] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {/* Card */}
            <div
              className={`relative rounded-2xl overflow-hidden h-[20rem] sm:h-[28rem] md:h-[36rem] ${cardClasses} border`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Top-left tag */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-[0.65rem] sm:text-xs text-white font-medium">
                {item.tag}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
                  {item.title}
                </h2>
                <h3 className="text-sm sm:text-lg md:text-xl text-white font-semibold mb-2">
                  {item.subtitle}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs sm:text-sm text-white mb-3 sm:mb-0 max-w-full sm:max-w-md">
                    {item.description}
                  </p>
                  <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded-full hover:bg-gray-300 cursor-pointer transition-colors text-xs sm:text-sm">
                    Try WAN 2.2
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center items-center mt-4 sm:mt-6 mb-16 sm:mb-28 space-x-4">
        {/* Dots */}
        <div className="flex space-x-2 sm:space-x-4 mr-2 sm:mr-4">
          {Array.from({ length: 9 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index % items.length)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute right-2 sm:right-0 flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 bg-gray-300 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 bg-gray-300 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
