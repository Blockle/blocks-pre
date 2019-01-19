interface AnimateCSS {
  target: HTMLElement;
  opacity?: number;
  transform?: string;
  duration?: number; // in ms
  onComplete?: (target: HTMLElement) => void;
  timingFunction?: string;
}

export type AimateCssUnlisten = ReturnType<typeof animateCss>;

const AnimateCssDefaults = {
  duration: 300,
};

export const animateCss = (o: AnimateCSS) => {
  let raf: number;
  const { target, duration, opacity, transform, timingFunction } = { ...AnimateCssDefaults, ...o };
  const onComplete = (event: TransitionEvent) => {
    const finishedOpacity = opacity !== undefined && event.propertyName === 'opacity';
    const finishedTransform = transform !== undefined && event.propertyName === 'transform';

    if (!finishedOpacity && !finishedTransform) {
      return;
    }

    if (o.onComplete) {
      o.onComplete(target);
    }

    unlisten();
  };
  const unlisten = () => {
    cancelAnimationFrame(raf);
    target.removeEventListener('transitionend', onComplete);
  };

  if (!target) {
    throw new Error('Expected HTMLElement');
  }

  if (opacity === undefined && transform === undefined) {
    throw new Error('Expected opacity and/or transform, none given');
  }

  target.addEventListener('transitionend', onComplete);
  target.style.transitionProperty = 'opacity, transform';

  if (duration) {
    target.style.transitionDuration = `${duration}ms`;
  }

  if (timingFunction) {
    target.style.transitionTimingFunction = timingFunction;
  }

  raf = requestAnimationFrame(() => {
    raf = requestAnimationFrame(() => {
      if (opacity !== undefined) {
        target.style.opacity = `${opacity}`;
      }

      if (transform !== undefined) {
        target.style.transform = transform;
      }
    });
  });

  return unlisten;
};
