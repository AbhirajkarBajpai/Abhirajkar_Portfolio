import React, { useEffect, useState } from 'react';
import './CursorDot.css';

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      console.log({ x: clientX, y: clientY });
      if (clientY <= 0 || clientY > window.innerHeight || clientX <= 0 || clientX > window.innerWidth) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    )
  );
};

export default CursorDot;
