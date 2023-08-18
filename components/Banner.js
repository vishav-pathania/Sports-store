import { useState, useEffect } from 'react';

const images = ['/banner1.avif', '/banner2.avif', '/banner3.jpg']; // Replace with your image URLs

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative">
      <img src={images[currentImageIndex]} alt="Banner" className="w-full h-auto" />
    </div>
  );
};

export default Banner;
