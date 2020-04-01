import React from 'react';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import { PickStyleProps, useStyles } from '../useStyles';
import './button.css';

interface Props extends PickStyleProps<'width'> {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
  className?: string;
  secondary?: boolean;
}

const Button = ({ children, className, disabled, onClick, type = 'button', width }: Props) => {
  const buttonStyles = useStyles({
    width,
    paddingX: 'xlarge',
    paddingY: 'large',
    backgroundColor: disabled ? 'dark' : 'primary',
    fontSize: 'small',
    color: disabled ? 'light' : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <Ripple
      component="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('Button', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </Ripple>
  );
};

export default Button;
