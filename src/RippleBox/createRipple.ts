/* eslint-disable @typescript-eslint/ban-ts-ignore */
const isTouch = 'ontouchstart' in document;
const endType = isTouch ? 'touchend' : 'mouseup';

function nextTick(cb: () => void) {
  requestAnimationFrame(() => requestAnimationFrame(cb));
}

function getPosition(event: React.MouseEvent | React.TouchEvent): { x: number; y: number } {
  if ('touches' in event) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  }

  return { x: event.pageX, y: event.pageY };
}

export function createRipple(event: React.MouseEvent | React.TouchEvent) {
  // Remove event from pool so we can hijack and set `__rippled` property
  event.persist();

  // Prevent "other" ripples to be created higher up in the dom tree
  // @ts-ignore
  if (event.__rippled) {
    return;
  }

  // @ts-ignore
  event.__rippled = true;

  const createdAt = Date.now();
  const { currentTarget } = event;
  const { x, y } = getPosition(event);
  const target = currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const size = Math.ceil(Math.max(rect.width, rect.height)) * 4;
  const duration = size < 600 ? 400 : 700;

  // Ripple element
  const ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';
  ripple.style.backgroundColor = 'currentColor';
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.opacity = '0.2';
  ripple.style.transform = 'scale(0.01)';
  ripple.style.left = `${x - rect.left - size / 2}px`;
  ripple.style.top = `${y - rect.top - size / 2}px`;
  ripple.style.transitionProperty = 'transform, opacity';
  ripple.style.transitionDuration = `${duration}ms`;
  ripple.style.transitionTimingFunction = 'cubic-bezier(.51,.26,.84,.84)';
  target.appendChild(ripple);

  nextTick(() => {
    ripple.style.opacity = '0.1';
    ripple.style.transform = 'scale(1)';
  });

  const cleanup = () => {
    const diff = Date.now() - createdAt;
    document.removeEventListener(endType, cleanup);
    document.removeEventListener('touchcancel', cleanup);

    if (diff < duration) {
      ripple.style.opacity = '0';
      setTimeout(cleanup, duration - diff);
      return;
    }

    target.removeChild(ripple);
  };

  document.addEventListener(endType, cleanup);
  document.addEventListener('touchcancel', cleanup);
}
