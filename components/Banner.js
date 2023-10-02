import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = ['/banner1.avif', '/banner2.avif', '/banner3.jpg', 'banner4.avif', 'banner5.avif']; // Replace with your image URLs

const Banner = () => {
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </button>
        <button onClick={goToNextImage} className="p-2 rounded bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default Banner;
