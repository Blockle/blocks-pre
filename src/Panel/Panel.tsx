import { FC } from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../cx';
import { useAnimationState } from '../useAnimationState';
import { useLayer } from '../useLayer';
import './panel.css';

interface Props {
  className?: string;
  onRequestClose: () => void;
  open?: boolean;
  // render vs children
  // render -> more performant (when using a lot of panels..)
  // children -> keeps local state
  render: () => JSX.Element | string;
}

const Panel: FC<Props> = ({ className, onRequestClose, open = false, render }) => {
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
