import { useState } from 'react';
import Canvas from './components/Canvas';
import TreeView from './components/TreeView';
import Header from './components/Header';
import { useBlockManagement } from './hooks/useBlockManagement';
import './App.css';

function App() {
  const {
    blocks,
    selectedBlock,
    setSelectedBlock,
    addNewBlock,
    addChildElement,
    updateBlockPosition,
    updateChildPosition,
    updateElementSize
  } = useBlockManagement();

  return (
    <div className="app">
      <Header blocks={blocks} />
      <div className="main-content">
        <div className="sidebar">
          <button className="add-block-btn" onClick={addNewBlock}>
            ADD NEW BLOCK
          </button>
          <TreeView
            blocks={blocks}
            onAddChild={addChildElement}
            onSelectBlock={setSelectedBlock}
          />
        </div>
        <Canvas
          blocks={blocks}
          selectedBlock={selectedBlock}
          onUpdateBlockPosition={updateBlockPosition}
          onUpdateChildPosition={updateChildPosition}
          onUpdateElementSize={updateElementSize}
        />
      </div>
    </div>
  );
}

export default App;