import React from 'react';
import { classNames } from 'classNames';

import './paper.css';
import { useAnimationState } from 'hooks';

export type Effects = 'fade' | 'slideUp';

type Props = {
  children: React.ReactNode;
  className?: string;
} & typeof defaultProps;

const animationLeaveExpression = /^Paper-.*?Leave$/;

const defaultProps = {
  effect: 'fade' as Effects,
  fit: false,
  open: false,
  shadow: false,
  transparent: false,
};

const Paper = ({ open, effect, className, transparent, shadow, children, fit }: Props) => {
  const [state, close] = useAnimationState(open);

  const onAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (animationLeaveExpression.test(event.animationName)) {
      close();
    }
  };

  if (!state.open) {
    return null;
  }

  return (
    // Preact uses onanimationend instead of onAnimationEnd, how to fix this?
    // @ts-ignore
    <div
      className={classNames(
        'Paper',
        state.leave && 'is-leave',
        className,
        `effect-${effect}`,
        fit && 'is-fit',
        transparent && 'is-transparent',
        shadow && 'is-shadow',
      )}
      onanimationend={onAnimationEnd}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

Paper.defaultProps = defaultProps;

export default Paper;
