import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from 'cx';

import './dialog.css';
import { IconButton } from 'IconButton';
import { useAnimationState, useLayer } from 'hooks';

type Props = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  onRequestClose: () => void;
  title?: React.ReactNode;
  full?: boolean;
  open?: boolean;
};

export const Dialog = ({
  actions,
  children,
  open = false,
  full = false,
  title = null,
  onRequestClose,
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

        <div className="DialogContent">{children}</div>

        {actions && <div className="DialogActions">{actions}</div>}
      </div>
    </div>
  );

  return createPortal(dialog, layer()) as JSX.Element;
};
