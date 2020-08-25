import React from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import { RippleBox } from '../RippleBox';
import { PickStyleProps } from '../useStyles';
import './card.css';

interface Props
  extends PickStyleProps<
    | 'backgroundColor'
    | 'color'
    | 'padding'
    | 'display'
    | 'flexDirection'
    | 'alignItems'
    | 'justifyContent'
  > {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  shadow?: 1 | 2 | 3;
}

const Card = ({
  backgroundColor = 'card',
  children,
  className,
  onClick,
  shadow,
  ...boxProps
}: Props) => {
  const props = {
    ...boxProps,
    className: cx('Card', shadow && `shadow-${shadow}`, onClick && 'is-clickable', className),
  };

  if (onClick) {
    return (
      <RippleBox
        backgroundColor={backgroundColor}
        tabIndex={0}
        role="button"
        onClick={onClick}
        color="primary"
        onKeyPress={(event) => {
          if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            onClick();
          }
        }}
        {...props}
      >
        {children}
      </RippleBox>
    );
  }

  return (
    <Box backgroundColor={backgroundColor} {...props}>
      {children}
    </Box>
  );
};

export default Card;
