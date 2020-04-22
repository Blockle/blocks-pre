import React from 'react';
import { cx } from '../cx';
import { Icon, IconNames } from '../Icon';
import { useRippleEffect } from '../useRippleEffect';
import './icon-button.css';

type Props = {
  disabled?: boolean;
  label: string;
  name: IconNames;
  onClick?(): void;
  secondary?: boolean;
};

const IconButton = ({ disabled, label, name, onClick, secondary }: Props) => {
  const ref = useRippleEffect<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={cx('IconButton', secondary && 'is-secondary', disabled && 'is-disabled')}
    >
      <Icon name={name} label={label} size="medium" color="black" />
    </button>
  );
};

export default IconButton;
