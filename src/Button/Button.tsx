import React from 'react';
import { useStyles } from 'useStyles';
import { cx } from '../cx';
import { Icon, IconNames } from '../Icon';
import { Ripple } from '../Ripple';
import './button.css';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  flat?: boolean;
  icon?: IconNames;
  inline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  secondary?: boolean;
  type?: 'button' | 'submit';
  className?: string;
};

const Button = ({
  children,
  className,
  disabled,
  flat,
  icon,
  inline,
  onClick,
  secondary,
  type = 'button',
}: Props) => {
  const buttonStyles = useStyles({
    paddingX: 'xlarge',
  });

  return (
    <Ripple
      component="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx(
        flat ? 'FlatButton' : 'Button',
        inline && 'is-inline',
        secondary && 'is-secondary',
        disabled && 'is-disabled',
        icon && 'has-icon',
        buttonStyles,
        className,
      )}
    >
      {icon && <Icon name={icon} label="" size="small" />}

      {children}
    </Ripple>
  );
};

export default Button;
