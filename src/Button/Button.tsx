import React from 'react';
import { cx } from '../cx';
import { useRippleEffect } from '../useRippleEffect';
import { PickStyleProps, useStyles } from '../useStyles';
import './button.css';

interface Props extends PickStyleProps<'width'> {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
  className?: string;
  secondary?: boolean;
}

const Button = ({ children, className, disabled, onClick, type = 'button', width }: Props) => {
  const rippleRef = useRippleEffect<HTMLButtonElement>();
  const buttonStyles = useStyles({
    width,
    paddingX: 'large',
    paddingY: 'small',
    backgroundColor: disabled ? 'gray' : 'primary',
    fontSize: 'small',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <button
      ref={rippleRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('Button', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </button>
  );
};

export default Button;
