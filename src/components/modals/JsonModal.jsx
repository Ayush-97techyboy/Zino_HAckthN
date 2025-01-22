function JsonModal({ blocks, onClose }) {
  return (
    <div className="json-modal" onClick={onClose}>
      <div className="json-content" onClick={e => e.stopPropagation()}>
        <h2>Current Layout JSON</h2>
        <div className="json-scroll">
          <pre>{JSON.stringify(blocks, null, 2)}</pre>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default JsonModal;