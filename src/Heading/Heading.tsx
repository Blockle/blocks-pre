import React from 'react';
import './heading.css';

interface Props {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Heading = ({ children, level = 1, size = 'medium', align = 'left' }: Props) =>
  React.createElement(
    `h${level}`,
    {
      className: `heading size-${size} align-${align}`,
    },
    children,
  );

export default Heading;
