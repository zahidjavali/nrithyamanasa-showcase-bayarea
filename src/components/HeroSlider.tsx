import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface HeroSliderProps {
  images: string[];
  autoSlideInterval?: number;
}
export const HeroSlider = ({
  images,
  autoSlideInterval = 4000
}: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };
  return <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-black">
      {/* Auditorium Stage Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Red Curtains Frame */}
        <div className="relative w-full max-w-6xl h-3/4 mx-auto">
          {/* Top Curtain Valance */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-700 to-red-800 z-20 shadow-lg">
            
          </div>

          {/* Left Curtain */}
          <div className="absolute top-16 left-0 bottom-0 w-16 bg-gradient-to-r from-red-700 to-red-600 z-20 shadow-2xl">
            <div className="h-full bg-gradient-to-b from-red-600 via-red-700 to-red-800 opacity-80"></div>
          </div>

          {/* Right Curtain */}
          <div className="absolute top-16 right-0 bottom-0 w-16 bg-gradient-to-l from-red-700 to-red-600 z-20 shadow-2xl">
            <div className="h-full bg-gradient-to-b from-red-600 via-red-700 to-red-800 opacity-80"></div>
          </div>

          {/* Stage Frame - Image Container */}
          <div className="absolute top-16 left-16 right-16 bottom-0 bg-black rounded-b-lg overflow-hidden shadow-2xl">
            {/* Stage Lighting */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-transparent to-red-900/20 z-10 pointer-events-none"></div>
            
            {/* Image Slider */}
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} className="absolute inset-0" initial={{
              opacity: 0,
              scale: 1.05
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.98
            }} transition={{
              duration: 1.2,
              ease: "easeInOut"
            }}>
                <img src={images[currentIndex]} alt={`Bharatanatyam performance ${currentIndex + 1}`} className="w-full h-full object-contain object-center filter brightness-110 contrast-105 saturate-105" loading={currentIndex === 0 ? "eager" : "lazy"} />
                {/* Stage floor reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Positioned outside the curtain frame */}
      <button onClick={goToPrevious} className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-red-600/80 backdrop-blur-sm hover:bg-red-500 transition-all duration-300 rounded-full p-4 group shadow-2xl border-2 border-yellow-400" aria-label="Previous image">
        
      </button>

      <button onClick={goToNext} className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-red-600/80 backdrop-blur-sm hover:bg-red-500 transition-all duration-300 rounded-full p-4 group shadow-2xl border-2 border-yellow-400" aria-label="Next image">
        <ChevronRight className="w-6 h-6 text-yellow-200 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator - Positioned below the stage */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-4 bg-red-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400">
        {images.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${index === currentIndex ? "bg-yellow-400 border-yellow-300 scale-125 shadow-lg shadow-yellow-400/50" : "bg-red-600 border-yellow-400/50 hover:bg-yellow-400/20"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Stage Lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-25 flex space-x-8">
        {[...Array(3)].map((_, index) => <div key={index} className="w-8 h-8 bg-yellow-300 rounded-full shadow-lg animate-pulse" style={{
        animationDelay: `${index * 0.5}s`
      }} />)}
      </div>
    </div>;
};