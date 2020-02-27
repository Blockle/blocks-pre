import React from 'react';
import { cx } from '../cx';
import './typography.css';

type Props = {
  align?: 'left' | 'center' | 'right';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'strong' | 'em';
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ align = 'left', as, children, className }: Props) =>
  React.createElement(as, { className: cx('Typography', className, `align-${align}`) }, children);

export default Typography;
