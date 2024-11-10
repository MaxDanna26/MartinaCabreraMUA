import React, { useState } from 'react';
import '../CSS/slider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={"slider"}>
      <button onClick={goToPrevious} className={"leftArrow"}>‹</button>
      
      <div
        className={"slide"}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      
      <button onClick={goToNext} className={"rightArrow"}>›</button>
    </div>
  );
};

export default ImageSlider;
