import { useState, useEffect } from 'react';

export default function useMouseResize(elementRef, elementId, onUpdate) {
  const [isResizing, setIsResizing] = useState(false);
  const [startSize, setStartSize] = useState({ width: 0, height: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    const rect = elementRef.current.getBoundingClientRect();
    setStartSize({ width: rect.width, height: rect.height });
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const deltaWidth = e.clientX - startPosition.x;
        const deltaHeight = e.clientY - startPosition.y;
        
        onUpdate({
          width: Math.max(50, startSize.width + deltaWidth),
          height: Math.max(50, startSize.height + deltaHeight)
        });
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, startPosition, startSize, onUpdate]);

  return { isResizing, handleResizeMouseDown };
}