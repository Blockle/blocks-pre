import React from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import { PickStyleProps } from '../useStyles';
import './card.css';

interface Props extends PickStyleProps<'background' | 'color'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  shadow?: '0' | '1' | '2' | '3';
}

const Card = ({
  children,
  className,
  onClick,
  shadow = '0',
  background = 'card',
  color,
}: Props) => {
  const props = {
    className: cx('Card', `shadow-${shadow}`, onClick && 'is-clickable', className),
  };

  if (onClick) {
    return (
      <Box
        padding={['small', 'medium']}
        background={background}
        color={color}
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

  return <div {...props}>{children}</div>;
};

export default Card;
