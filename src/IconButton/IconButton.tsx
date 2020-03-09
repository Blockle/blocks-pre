import React from 'react';
import { cx } from '../cx';
import { Icon, IconNames } from '../Icon';
import { Ripple } from '../Ripple';
import './icon-button.css';

type Props = {
  disabled?: boolean;
  label: string;
  name: IconNames;
  onClick?(): void;
  secondary?: boolean;
};

const Button = ({ disabled, label, name, onClick, secondary }: Props) => (
  <Ripple
    renderAs="button"
    disabled={disabled}
    onClick={onClick}
    className={cx('IconButton', secondary && 'is-secondary', disabled && 'is-disabled')}
  >
    <Icon name={name} label={label} size="medium" accent="secondary" />
  </Ripple>
);

export default Button;
