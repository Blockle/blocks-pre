import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '../Box';
import { cx } from '../cx';
import { useAnimationState, useLayer } from '../hooks';
import { IconButton } from '../IconButton';
import { Stack } from '../Stack';
import './dialog.css';

interface Props {
  actions?: React.ReactNode;
  full?: boolean;
  onRequestClose: () => void;
  open?: boolean;
  render: () => JSX.Element | string;
  title?: React.ReactNode;
  minHeight?: number;
}

export const Dialog: FC<Props> = ({
  actions,
  full = false,
  onRequestClose,
  open = false,
  render,
  title = null,
  minHeight,
}) => {
  const [state, close] = useAnimationState(open);
  const layer = useLayer();

  useEffect(() => {
    if (!state.open) {
      return;
    }

    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [state.open]);

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
      <Box
        className={cx('Dialog', state.leave && 'is-leave')}
        width={full ? 'full' : undefined}
        display="flex"
        flexDirection="column"
        position="relative"
        paddingY="small"
        style={{
          minHeight: `min(96%, ${minHeight}px)`,
        }}
      >
        <Stack spacing="medium">
          {(title || full) && (
            <Box display="flex" alignItems="center" paddingLeft="gutter">
              <Box flexGrow={1}>{title}</Box>
              <IconButton name="cross" label="Close" onClick={onRequestClose} />
            </Box>
          )}

          <Box flexGrow={1} overflow="auto" paddingX="gutter">
            {render()}
          </Box>

          {actions && (
            <Box display="flex" justifyContent="flex-end" alignItems="center" paddingX="gutter">
              {actions}
            </Box>
          )}
        </Stack>
      </Box>
    </div>
  );

  return createPortal(dialog, layer()) as JSX.Element;
};
