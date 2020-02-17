import React from 'react';

import './card.css';
import { cx } from 'cx';

type Props = {
  children: React.ReactNode;
  shadow?: '0' | '1' | '2' | '3';
  onClick?: (event: React.SyntheticEvent<HTMLDivElement, MouseEvent | KeyboardEvent>) => void;
};

const Card = ({ children, shadow = '0', onClick }: Props) => (
  <div
    className={cx('Card', `shadow-${shadow}`, onClick && 'is-clickable')}
    tabIndex={onClick ? 0 : undefined}
    onClick={onClick}
    onKeyPress={event => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) {
        onClick(event);
      }
    }}
  >
    {children}
  </div>
);

export default Card;
