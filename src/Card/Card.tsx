import React from 'react';

import './card.css';

type Props = {
  children: React.ReactNode;
  shadow?: '1' | '2' | '3';
  onClick?: () => void;
};

const Card = ({ children, shadow = '2', onClick }: Props) => (
  <div className={`Card shadow-${shadow}`} onClick={onClick}>
    {children}
  </div>
);

export default Card;
