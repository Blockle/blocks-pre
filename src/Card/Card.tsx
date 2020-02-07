import React from 'react';

import './card.css';

type Props = {
  children: React.ReactNode;
  shadow?: '0' | '1' | '2' | '3';
  onClick?: (event: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => void;
};

const Card = ({ children, shadow = '0', onClick }: Props) => (
  <div className={`Card shadow-${shadow}`} onClick={onClick}>
    {children}
  </div>
);

export default Card;
