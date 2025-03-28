import { useEffect, useState } from "react";
import Left from "./arrows/left";
import Right from "./arrows/right";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";

export default function Slides() {
  const slides = [slide1, slide2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full mx-auto py-16 px-20">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        <button
          onClick={goToPrevious}
          className="bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          disabled={isTransitioning}
        >
          <Left className="w-10 h-10" />
        </button>

        <button
          onClick={goToNext}
          className="bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          disabled={isTransitioning}
        >
          <Right className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}