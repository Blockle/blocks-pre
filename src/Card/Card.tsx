import React from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import { PickStyleProps } from '../useStyles';
import './card.css';

interface Props extends PickStyleProps<'background' | 'color'> {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
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
      <Ripple
        component={Box}
        padding={['small', 'medium']}
        background={background}
        color={color}
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyPress={(event) => {
          if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            onClick(event);
          }
        }}
        {...props}
      >
        {children}
      </Ripple>
    );
  }

  return <div {...props}>{children}</div>;
};

export default Card;
