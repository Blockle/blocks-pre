import { useEffect, useRef } from 'react';

export const useLayer = () => {
  const layerRef = useRef<HTMLDivElement>();

  useEffect(
    () => () => {
      if (layerRef.current) {
        document.body.removeChild(layerRef.current);
      }
    },
    [],
  );

  return () => {
    if (!layerRef.current) {
      layerRef.current = document.createElement('div');
      document.body.appendChild(layerRef.current);
    }

    return layerRef.current;
  };
};
