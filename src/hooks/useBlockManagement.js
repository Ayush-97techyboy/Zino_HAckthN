import { useState } from 'react';

export function useBlockManagement() {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const addNewBlock = () => {
    const newBlock = {
      id: `block-${blocks.length + 1}`,
      top: 20,
      left: 20,
      width: 200,
      height: 200,
      children: []
    };
    setBlocks([...blocks, newBlock]);
  };

  const addChildElement = (blockId, type) => {
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        const newChild = {
          id: `${type}-${block.children.length + 1}`,
          type,
          top: 10,
          left: 10,
          width: type === 'image' ? 100 : 150,
          height: type === 'image' ? 100 : 30,
          content: type === 'text' ? 'New Label' : 'https://via.placeholder.com/150'
        };
        return { ...block, children: [...block.children, newChild] };
      }
      return block;
    }));
  };

  const updateBlockPosition = (blockId, position) => {
    setBlocks(blocks.map(block => 
      block.id === blockId 
        ? { ...block, top: position.top, left: position.left }
        : block
    ));
  };

  const updateChildPosition = (blockId, childId, position) => {
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        return {
          ...block,
          children: block.children.map(child =>
            child.id === childId 
              ? { ...child, top: position.top, left: position.left }
              : child
          )
        };
      }
      return block;
    }));
  };

  const updateElementSize = (blockId, elementId, size) => {
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        if (elementId === block.id) {
          return { ...block, width: size.width, height: size.height };
        }
        return {
          ...block,
          children: block.children.map(child =>
            child.id === elementId 
              ? { ...child, width: size.width, height: size.height }
              : child
          )
        };
      }
      return block;
    }));
  };

  return {
    blocks,
    selectedBlock,
    setSelectedBlock,
    addNewBlock,
    addChildElement,
    updateBlockPosition,
    updateChildPosition,
    updateElementSize
  };
}