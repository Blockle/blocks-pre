import React from 'react';
import { cx } from '../../cx';
import './text.css';

type Props = {
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  bold?: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium';
};

const Text = ({ align = 'left', dark, bold, children, size = 'medium' }: Props) => (
  <p className={cx(`text align-${align} size-${size}`, bold && 'is-bold', dark && 'is-dark')}>
    {children}
  </p>
);

export default Text;
