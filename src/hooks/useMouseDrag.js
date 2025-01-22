import { useState, useEffect } from 'react';

export default function useMouseDrag(elementRef, element, onUpdate, stopPropagation = false) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    setIsDragging(true);
    setDragStart({
      x: e.clientX - element.left,
      y: e.clientY - element.top
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newLeft = Math.max(0, e.clientX - dragStart.x);
        const newTop = Math.max(0, e.clientY - dragStart.y);
        
        onUpdate({
          left: newLeft,
          top: newTop
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, onUpdate]);

  return { isDragging, handleMouseDown };
}