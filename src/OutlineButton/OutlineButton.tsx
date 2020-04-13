import React from 'react';
import { cx } from '../cx';
import { useRippleEffect } from '../useRippleEffect';
import { PickStyleProps, useStyles } from '../useStyles';
import './outline-button.css';

interface Props extends PickStyleProps<'width'> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
}

const OutlineButton = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  width,
}: Props) => {
  const ref = useRippleEffect();
  const buttonStyles = useStyles({
    width,
    paddingX: 'large',
    paddingY: 'small',
    fontSize: 'small',
    color: disabled ? 'gray' : 'primary',
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
      className={cx('OutlineButton', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
