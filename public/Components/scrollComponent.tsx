import React, { useEffect, useState } from 'react';
import '../CSS/scrollComponent.css'; 

export default function ScrollIndicator(){

const [scrollPercent, setScrollPercent] = useState(0);

function handleScroll() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;
  const scrolled = (currentScroll / totalHeight) * 100;
  setScrollPercent(scrolled);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="scrollIndicator">
      <div
        className="circle"
        style={{
          background: `conic-gradient(#E56387 ${scrollPercent}%, #ddd ${scrollPercent}%)`,
        }}
      />
    </div>
  );
};

