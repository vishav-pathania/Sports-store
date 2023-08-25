import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = ['/banner1.avif', '/banner2.avif', '/banner3.jpg', 'banner4.avif']; // Replace with your image URLs

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
        <button onClick={goToPreviousImage} className="p-2 rounded white">
          <img src="/left.png" alt="left" className="rounded w-3 h-5 lg:w-8 lg:h-11" />
        </button>
        <button onClick={goToNextImage} className="p-2 rounded white">
        <img src="/right.png" alt="left" className="rounded w-3 h-5 lg:w-8 lg:h-11" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
