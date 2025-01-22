function TreeView({ blocks, onAddChild, onSelectBlock }) {
  return (
    <div className="tree-view">
      {blocks.map(block => (
        <div key={block.id} className="block-item">
          <div className="block-header" onClick={() => onSelectBlock(block.id)}>
            <span>{block.id}</span>
            <div className="block-actions">
              <button onClick={() => onAddChild(block.id, 'text')}>T</button>
              <button onClick={() => onAddChild(block.id, 'image')}>I</button>
            </div>
          </div>
          <div className="block-children">
            {block.children.map(child => (
              <div key={child.id} className="child-item">
                {child.type === 'text' ? '📝' : '🖼️'} {child.id}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TreeView;