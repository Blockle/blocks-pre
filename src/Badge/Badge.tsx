import React from 'react';

import './badge.css';

interface Props {
  children: React.ReactNode;
}

const Badge: React.SFC<Props> = ({ children }) => (
  <div className="Badge">
    {children}
  </div>
);

export default Badge;
