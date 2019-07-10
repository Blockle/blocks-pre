import { useEffect, useMemo } from 'react';

export const useLayer = () => {
  const layer = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(layer);

    return () => {
      document.body.removeChild(layer);
    };
  }, []);

  return layer;
};
