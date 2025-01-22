import { useState } from 'react';
import JsonModal from './modals/JsonModal';

function Header({ blocks }) {
  const [showJson, setShowJson] = useState(false);

  return (
    <header className="header">
      <h1>Page Builder</h1>
      <button onClick={() => setShowJson(true)}>View JSON</button>
      {showJson && (
        <JsonModal 
          blocks={blocks} 
          onClose={() => setShowJson(false)} 
        />
      )}
    </header>
  );
}

export default Header;