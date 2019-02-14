import React from 'react';
import classNames from 'classnames';

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

const Paper = ({ open, effect, className,  transparent, shadow, children, fit }: Props) => {
  const [state, close] = useAnimationState(open);

  if (!state.open) {
    return null;
  }

  return (
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
      onAnimationEnd={(event: React.AnimationEvent<HTMLDivElement>) => {
        if (animationLeaveExpression.test(event.animationName)) {
          close();
        }
      }}
    >
      {children}
    </div >
  );
};

Paper.defaultProps = defaultProps;

export default Paper;
