import React from 'react';

import './badge.css';

interface Props {
  children: React.ReactNode;
}

const Badge = ({ children }: Props) => (
  <div className="Badge">
    {children}
  </div>
);

export default Badge;
