import { useEffect, useRef } from 'react';

const isTouch = 'ontouchstart' in document;
const startType = isTouch ? 'touchstart' : 'mousedown';
const endType = isTouch ? 'touchend' : 'mouseup';

function nextTick(cb: () => void) {
  requestAnimationFrame(() => requestAnimationFrame(cb));
}

const getPosition = (event: TouchEvent | MouseEvent): { x: number; y: number } => {
  if ('touches' in event) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  }

  return { x: event.pageX, y: event.pageY };
};

function createRipple(event: MouseEvent | TouchEvent) {
  const createdAt = Date.now();
  const { currentTarget } = event;
  const { x, y } = getPosition(event);
  const target = currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  // Calc biggest point between click location and furterst side
  const size = Math.ceil(Math.max(rect.width, rect.height)) * 2;
  const duration = Math.min(800, Math.max(400, size));

  // Ripple element
  const ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';
  ripple.style.backgroundColor = 'currentColor';
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.opacity = '0';
  ripple.style.transform = 'scale(0.01)';
  ripple.style.left = `${x - rect.left - size / 2}px`;
  ripple.style.top = `${y - rect.top - size / 2}px`;
  ripple.style.transitionProperty = 'transform, opacity';
  ripple.style.transitionDuration = `${duration}ms`;
  ripple.style.transitionTimingFunction = 'cubic-bezier(.22,.29,.7,.95)';
  target.appendChild(ripple);

  nextTick(() => {
    ripple.style.opacity = '0.3';
    ripple.style.transform = 'scale(1)';
  });

  const cleanup = () => {
    const diff = Date.now() - createdAt;
    document.removeEventListener(endType, cleanup);
    document.removeEventListener('touchcancel', cleanup);

    if (diff < 300) {
      setTimeout(cleanup, 300 - diff);
      return;
    }

    nextTick(() => {
      ripple.style.transitionDuration = `${duration / 2}ms`;
      ripple.style.transitionTimingFunction = 'ease-out';
      ripple.style.opacity = '0';
    });

    setTimeout(() => target.removeChild(ripple), 500);
  };

  document.addEventListener(endType, cleanup);
  document.addEventListener('touchcancel', cleanup);
}

export const useRippleEffect = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) {
      return console.warn('useRippleEffect - ref not found', ref);
    }

    const element = ref.current;

    // TODO Think of a better way to add styles
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.style.outline = '0';
    element.style.userSelect = 'none';

    element.addEventListener(startType, createRipple);

    return () => {
      element.removeEventListener(startType, createRipple);
    };
  }, [ref]);

  return ref;
};
