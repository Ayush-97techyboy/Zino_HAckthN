import { useRef } from 'react';
import ChildElement from './ChildElement';
import useMouseDrag from '../hooks/useMouseDrag';
import useMouseResize from '../hooks/useMouseResize';

function Block({ block, isSelected, onUpdatePosition, onUpdateChildPosition, onUpdateSize }) {
  const blockRef = useRef(null);
  const { handleMouseDown } = useMouseDrag(blockRef, block, (position) => {
    onUpdatePosition(block.id, position);
  });
  const { handleResizeMouseDown } = useMouseResize(blockRef, block.id, (size) => {
    onUpdateSize(block.id, block.id, size);
  });

  return (
    <div
      ref={blockRef}
      className={`block ${isSelected ? 'selected' : ''}`}
      style={{
        position: 'absolute',
        top: block.top,
        left: block.left,
        width: block.width,
        height: block.height,
        cursor: 'move'
      }}
      onMouseDown={handleMouseDown}
    >
      {block.children.map(child => (
        <ChildElement
          key={child.id}
          blockId={block.id}
          element={child}
          onUpdatePosition={onUpdateChildPosition}
          onUpdateSize={onUpdateSize}
        />
      ))}
      <div
        className="resize-handle"
        onMouseDown={handleResizeMouseDown}
      />
    </div>
  );
}

export default Block;