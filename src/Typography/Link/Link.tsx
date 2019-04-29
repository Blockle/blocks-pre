import React from 'react';

import './link.css';

interface Props {
  children: React.ReactNode;
  to: string;
}

const Link: React.SFC<Props> = ({ children, to }) => (
  <a href={`#${to}`} className="Link">
    {children}
  </a>
);

export default Link;
