import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = ['/Fitness.avif', '/sunglassesbanner.avif', '/umbrellabanner.avif', 'support.avif']; // Replace with your image URLs

const Abanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNextImage, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative">
      <Link href="/#">

        <img src={images[currentImageIndex]} alt="Banner" className="w-full h-auto cursor-pointer" />

      </Link>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button onClick={goToPreviousImage} className="p-2 rounded bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </button>
        <button onClick={goToNextImage} className="p-2 rounded bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default Abanner;
