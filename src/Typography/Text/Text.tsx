import React from 'react';
import { cx } from 'classNames';

import './text.css';

type Props = {
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  bold?: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium';
};

const Text = ({ align, dark, bold, children, size }: Props) => (
  <p className={cx(`text align-${align} size-${size}`, bold && 'is-bold', dark && 'is-dark')}>
    {children}
  </p>
);

Text.defaultProps = {
  align: 'left',
  size: 'medium',
};

export default Text;
