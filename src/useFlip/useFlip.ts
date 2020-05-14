import { useCallback, useLayoutEffect, useMemo } from 'react';
import { animate, Animate } from './animate';

interface Position {
  x: number;
  y: number;
}

const getPosition = (element: HTMLElement): Position => {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
  };
};

export const useFlip = () => {
  const refs = useMemo(() => new Map<string, HTMLElement | null>(), []);
  const positions = useMemo(() => new Map<string, Position>(), []);

  useLayoutEffect(() => {
    const animations: Animate[] = [];

    Array.from(refs.entries()).forEach(([id, element]) => {
      if (!element) {
        refs.delete(id);
        positions.delete(id);
        return;
      }

      const prevPosition = positions.get(id);

      // Cancel current animation, if any and reset transform
      element.style.transition = '';
      element.style.transform = '';

      const position = getPosition(element);

      // Enter animation
      if (!prevPosition) {
        animations.push({
          element,
          transforms: [
            { property: 'transform', from: 'scale(0.8)' },
            { property: 'opacity', from: '0' },
          ],
        });
      }

      // Move animation
      if (prevPosition && (prevPosition.x !== position.x || prevPosition.y !== position.y)) {
        const x = prevPosition.x - position.x;
        const y = prevPosition.y - position.y;

        animations.push({
          element,
          transforms: [{ property: 'transform', from: `translate(${x}px, ${y}px)` }],
        });
      }

      positions.set(id, position);
    });

    animations.forEach(animate);
  });

  const setRef = useCallback(
    (id: string) => (ref: HTMLElement | null) => {
      refs.set(id, ref);
    },
    [],
  );

  const remove = useCallback((id: string, callback: () => void) => {
    const element = refs.get(id);

    if (element) {
      animate({
        element,
        done: callback,
        duration: 100,
        transforms: [
          {
            property: 'opacity',
            from: '1',
            to: '0',
          },
          {
            property: 'transform',
            to: 'scale(0.8)',
          },
        ],
      });
    }
  }, []);

  return { setRef, remove };
};
