import React, { useState, useEffect } from "react";

const placeholderImages = [
  "/placeholder-images/img1.jpg",
  "/placeholder-images/img2.jpg",
  "/placeholder-images/img3.jpg"
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % placeholderImages.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-slider">
      <img src={placeholderImages[index]} alt={`Slide ${index}`} />
    </div>
  );
}