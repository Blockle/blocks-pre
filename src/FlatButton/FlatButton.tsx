import React from 'react';
import { cx } from '../cx';
import { useRippleEffect } from '../useRippleEffect';
import { PickStyleProps, useStyles } from '../useStyles';
import './flat-button.css';

interface Props extends PickStyleProps<'width'> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  secondary?: boolean;
  type?: 'button' | 'submit';
}

const FlatButton = ({
  children,
  className,
  disabled,
  onClick,
  secondary,
  type = 'button',
  width,
}: Props) => {
  const ref = useRippleEffect<HTMLButtonElement>();
  const buttonStyles = useStyles({
    width,
    paddingX: 'large',
    paddingY: 'small',
    fontSize: 'small',
    color: disabled ? 'gray' : secondary ? 'primary' : 'secondary',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('FlatButton', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </button>
  );
};

export default FlatButton;
