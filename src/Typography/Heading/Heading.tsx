import React from 'react';

import './heading.css';

interface Props {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  level: '1' | '2' | '3';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Heading: React.SFC<Props> = ({ children, level, size, align }) =>
  React.createElement(
    `h${level}`,
    {
      className: `heading size-${size} align-${align}`,
    },
    children,
  );

Heading.defaultProps = {
  align: 'left',
  level: '1',
  size: 'medium',
};

export default Heading;
