import { useState, useEffect } from 'react';

export const useLayer = () => {
  const [layer] = useState(document.createElement('div')); // Funky gc shit..?

  useEffect(() => {
    document.body.appendChild(layer);

    return () => {
      document.body.removeChild(layer);
    };
  }, []);

  return [layer];
};
