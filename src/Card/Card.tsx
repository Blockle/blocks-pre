import React from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import './card.css';

type Props = {
  children: React.ReactNode;
  shadow?: '0' | '1' | '2' | '3';
  // TODO Rename onClick to ..?
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
};

const Card = ({ children, shadow = '0', onClick }: Props) => {
  const props = {
    className: cx('Card', `shadow-${shadow}`, onClick && 'is-clickable'),
  };

  if (onClick) {
    return (
      <Ripple
        component={Box}
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyPress={event => {
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
