import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../cx';
import { useAnimationState, useLayer } from '../hooks';
import './panel.css';

interface Props {
  className?: string;
  onRequestClose: () => void;
  open?: boolean;
  render: () => JSX.Element | string;
  // TODO Define 'sizes' for blockle ui
  size: 's' | 'm' | 'l';
}

const Panel = ({ className, onRequestClose, open = false, render }: Props) => {
  const [state, close] = useAnimationState(open);
  const layer = useLayer();

  if (!state.open) {
    return null;
  }

  const onAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === 'Panel-Back-Leave') {
      close();
    }
  };

  const panel = (
    <div className="Panel-Container">
      <div
        className={cx('Panel-Back', state.leave && 'is-leave')}
        onClick={onRequestClose}
        onAnimationEnd={onAnimationEnd}
      />
      <div className={cx('Panel', state.leave && 'is-leave', className)}>{render()}</div>
    </div>
  );

  return createPortal(panel, layer()) as JSX.Element;
};

export default Panel;
