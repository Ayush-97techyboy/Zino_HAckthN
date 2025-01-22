import Block from './Block';

function Canvas({ 
  blocks, 
  selectedBlock,
  onUpdateBlockPosition,
  onUpdateChildPosition,
  onUpdateElementSize
}) {
  return (
    <div className="canvas">
      {blocks.map(block => (
        <Block
          key={block.id}
          block={block}
          isSelected={selectedBlock === block.id}
          onUpdatePosition={onUpdateBlockPosition}
          onUpdateChildPosition={onUpdateChildPosition}
          onUpdateSize={onUpdateElementSize}
        />
      ))}
    </div>
  );
}

export default Canvas;