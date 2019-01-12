import React from 'react';
import classNames from 'classnames';

import './text.css';

interface Props {
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  bold?: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium';
}

const Text: React.SFC<Props> = ({ align, dark, bold, children, size }) => (
  <p
    className={classNames(`text align-${align} size-${size}`, { 'is-bold': bold, 'is-dark': dark })}
  >
    {children}
  </p>
);

Text.defaultProps = {
  align: 'left',
  size: 'medium',
};

export default Text;
