export function ImageElement({ src }) {
  return (
    <img 
      src={src} 
      alt="" 
      style={{ width: '100%', height: '100%' }} 
    />
  );
}