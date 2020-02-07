import React from 'react';
import { cx } from 'cx';

import './paper.css';
import { useAnimationState } from 'hooks';

export type Effects = 'fade' | 'slideUp';

type Props = {
  className?: string;
  effect?: Effects;
  fit?: boolean;
  open?: boolean;
  render: () => JSX.Element | string;
  shadow?: boolean;
  transparent?: boolean;
};

const animationLeaveExpression = /^Paper-.*?Leave$/;

const Paper = ({
  open = false,
  effect = 'fade',
  className,
  transparent,
  shadow,
  render,
  fit,
}: Props) => {
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
    <div
      className={cx(
        'Paper',
        state.leave && 'is-leave',
        className,
        `effect-${effect}`,
        fit && 'is-fit',
        transparent && 'is-transparent',
        shadow && 'is-shadow',
      )}
      onAnimationEnd={onAnimationEnd}
    >
      {render()}
    </div>
  );
};

export default Paper;
