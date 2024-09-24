import React, { useEffect, useRef } from 'react';
import './CursorDot.css'; 

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const delay = 15;
  let _x = 0, _y = 0;
  let endX = window.innerWidth / 2, endY = window.innerHeight / 2;
  let cursorVisible = true;
  let cursorEnlarged = false;

  useEffect(() => {
    const $dot = dotRef.current;
    const $outline = outlineRef.current;

    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;
      $outline.style.top = `${_y}px`;
      $outline.style.left = `${_x}px`;

      requestAnimationFrame(animateDotOutline);
    };

    const toggleCursorSize = () => {
      if (cursorEnlarged) {
        $dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
        $outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        $dot.style.transform = 'translate(-50%, -50%) scale(1)';
        $outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const toggleCursorVisibility = () => {
      if (cursorVisible) {
        $dot.style.opacity = 1;
        $outline.style.opacity = 1;
      } else {
        $dot.style.opacity = 0;
        $outline.style.opacity = 0;
      }
    };

    const setupEventListeners = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => {
          cursorEnlarged = true;
          toggleCursorSize();
        });
        el.addEventListener('mouseout', () => {
          cursorEnlarged = false;
          toggleCursorSize();
        });
      });

      document.addEventListener('mousedown', () => {
        cursorEnlarged = true;
        toggleCursorSize();
      });

      document.addEventListener('mouseup', () => {
        cursorEnlarged = false;
        toggleCursorSize();
      });

      document.addEventListener('mousemove', (e) => {
        cursorVisible = true;
        toggleCursorVisibility();

        endX = e.pageX;
        endY = e.pageY;
        $dot.style.top = `${endY}px`;
        $dot.style.left = `${endX}px`;
      });

      document.addEventListener('mouseenter', () => {
        cursorVisible = true;
        toggleCursorVisibility();
        $dot.style.opacity = 1;
        $outline.style.opacity = 1;
      });

      document.addEventListener('mouseleave', () => {
        cursorVisible = false;
        toggleCursorVisibility();
        $dot.style.opacity = 0;
        $outline.style.opacity = 0;
      });
    };

    setupEventListeners();
    animateDotOutline();

    return () => {
      // Clean up event listeners on component unmount
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mouseup', () => {});
      document.removeEventListener('mouseenter', () => {});
      document.removeEventListener('mouseleave', () => {});
    };
  }, [delay]);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-dot-outline" ref={outlineRef}></div>
    </>
  );
};

export default Cursor;
