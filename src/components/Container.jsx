import React, { useState, useEffect } from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
];

const Container = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4 overflow-hidden rounded-xl ">
      <div className="relative">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl transition-all duration-700"
        />

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full border border-orange-400 ${
                index === current ? "bg-orange-900" : "bg-orange-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
