import React from 'react';
import { useRippleEffect } from 'useRippleEffect';
import { Box } from '../Box';
import { cx } from '../cx';
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
  const ref = useRippleEffect<HTMLDivElement>();

  if (onClick) {
    return (
      <Box
        ref={ref}
        backgroundColor={backgroundColor}
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyPress={(event) => {
          if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            onClick();
          }
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box backgroundColor={backgroundColor} {...props}>
      {children}
    </Box>
  );
};

export default Card;
