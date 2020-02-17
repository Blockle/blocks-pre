import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from 'cx';

import './dialog.css';
import { IconButton } from 'IconButton';
import { useAnimationState, useLayer } from 'hooks';

type Props = {
  actions?: React.ReactNode;
  full?: boolean;
  onRequestClose: () => void;
  open?: boolean;
  render: () => JSX.Element | string;
  title?: React.ReactNode;
};

export const Dialog = ({
  actions,
  full = false,
  onRequestClose,
  open = false,
  render,
  title = null,
}: Props) => {
  const [state, close] = useAnimationState(open);
  const layer = useLayer();

  if (!state.open) {
    return null;
  }

  const onAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === 'DialogBack-Leave') {
      close();
    }
  };

  const dialog = (
    <div className="DialogContainer">
      <div
        className={cx('DialogBack', state.leave && 'is-leave')}
        onClick={onRequestClose}
        onAnimationEnd={onAnimationEnd}
      />
      <div
        className={cx(
          'Dialog',
          state.leave && 'is-leave',
          full && 'is-full',
          (!!title || full) && 'has-title',
        )}
      >
        {(title || full) && (
          <div className="DialogTopBar">
            <div className="DialogTitle">{title}</div>
            <IconButton name="close" label="Close" onClick={onRequestClose} />
          </div>
        )}

        <div className="DialogContent">{render()}</div>

        {actions && <div className="DialogActions">{actions}</div>}
      </div>
    </div>
  );

  return createPortal(dialog, layer()) as JSX.Element;
};
