import React from 'react';

import './card.css';

type Props = {
  children: React.ReactNode;
  shadow?: '1' | '2' | '3';
};

const Card = ({ children, shadow = '2' }: Props) => (
  <div className={`Card shadow-${shadow}`}>{children}</div>
);

export default Card;
