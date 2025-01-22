import { useRef } from 'react';
import useMouseDrag from '../hooks/useMouseDrag';
import useMouseResize from '../hooks/useMouseResize';
import { TextElement } from './elements/TextElement';
import { ImageElement } from './elements/ImageElement';

function ChildElement({ blockId, element, onUpdatePosition, onUpdateSize }) {
  const elementRef = useRef(null);
  const { isDragging, handleMouseDown } = useMouseDrag(elementRef, element, 
    (position) => onUpdatePosition(blockId, element.id, position), true);
  const { isResizing, handleResizeMouseDown } = useMouseResize(elementRef, element.id, 
    (size) => onUpdateSize(blockId, element.id, size));

  return (
    <div
      ref={elementRef}
      className={`child-element ${element.type}`}
      style={{
        position: 'absolute',
        top: element.top,
        left: element.left,
        width: element.width,
        height: element.height
      }}
      onMouseDown={handleMouseDown}
    >
      {element.type === 'text' ? (
        <TextElement content={element.content} />
      ) : (
        <ImageElement src={element.content} />
      )}
      <div
        className="resize-handle"
        onMouseDown={handleResizeMouseDown}
      />
    </div>
  );
}

export default ChildElement;