import React from 'react';
import { classNames } from 'classNames';

import './button.css';
import { Ripple } from '../Ripple';
import { Icon, IconNames } from '../Icon';

type Props = {
  children: React.ReactNode,
  disabled?: boolean,
  flat?: boolean,
  icon?: IconNames,
  inline?: boolean,
  onClick?(): void,
  secondary?: boolean,
  type?: 'button' | 'submit',
};

const Button = ({ children, disabled, flat, icon, inline, onClick, secondary, type = 'button' }: Props) => (
  <Ripple
    renderAs="button"
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classNames(
      flat ? 'FlatButton' : 'Button',
      inline && 'is-inline',
      secondary && 'is-secondary',
      disabled && 'is-disabled',
      icon && 'has-icon',
    )}
  >
    {icon &&
      <Icon name={icon} label="" size="small" />}

    {children}
  </Ripple>
);

export default Button;
