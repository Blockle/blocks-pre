import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { animate, Animate } from './animate';

interface Position {
  x: number;
  y: number;
}

function getScrollPosition(element: HTMLElement): Position {
  let node: HTMLElement | null = element;
  let x = 0;
  let y = 0;

  while ((node = node.parentElement)) {
    x += node.scrollLeft;
    y += node.scrollTop;
  }

  return { x, y };
}

function getPosition(element: HTMLElement): Position {
  const rect = element.getBoundingClientRect();
  const scroll = getScrollPosition(element);

  return {
    x: rect.x + scroll.x,
    y: rect.y + scroll.y,
  };
}

function getTransformValue(axis: 'x' | 'y' | 'both', x: number, y: number) {
  switch (axis) {
    case 'x':
      return `translateX(${x}px)`;
    case 'y':
      return `translateY(${y}px)`;
    case 'both':
      return `translate(${x}px, ${y}px)`;
  }
}

function shallowEqual(a: unknown[], b: unknown[]): boolean {
  const length = a.length;

  if (length !== b.length) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function useMemoForced<T>(valueCreator: () => T, deps: unknown[] = []): T {
  const ref = useRef<{ value: T | null; deps: unknown[] }>({ value: null, deps });

  if (!ref.current.value || !shallowEqual(deps, ref.current.deps)) {
    console.log('CHNAGE');
    ref.current.value = valueCreator();
  }

  return ref.current.value;
}

interface FlipOptions {
  axis?: 'x' | 'y' | 'both';
}

export const useFlip = ({ axis = 'both' }: FlipOptions = {}) => {
  const refs = useMemoForced(() => new Map<string, HTMLElement>());
  const positions = useMemoForced(() => new Map<string, Position>());
  const forceUpdate = useMemoForced(
    () =>
      function () {
        const animations: Animate[] = [];

        Array.from(refs.entries()).forEach(([id, element]) => {
          if (!element.isConnected) {
            refs.delete(id);
            positions.delete(id);
            return;
          }

          const prevPosition = positions.get(id);
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
              transforms: [{ property: 'transform', from: getTransformValue(axis, x, y) }],
            });
          }

          positions.set(id, position);
        });

        animations.forEach(animate);
      },
  );

  const mutationObserver = useMemoForced(
    () =>
      new MutationObserver(() => {
        forceUpdate();
      }),
    [forceUpdate],
  );

  useLayoutEffect(forceUpdate);

  // Disconnect mutation observer
  useEffect(
    function () {
      return function () {
        mutationObserver.disconnect();
      };
    },
    [mutationObserver],
  );

  const setRef = useCallback(
    (id: string) => (ref: HTMLElement | null) => {
      if (ref) {
        refs.set(id, ref);

        mutationObserver.observe(ref, {
          attributes: true,
          // childList: true,
          // subtree: true,
          attributeFilter: ['class'],
        });
      }
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

  return { setRef, remove, forceUpdate };
};
