import React from 'react';
import { cx } from '../cx';
import { RippleBox } from '../RippleBox';
import { PickStyleProps } from '../useStyles';
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
  return (
    <RippleBox
      component="button"
      alignItems="center"
      backgroundColor={disabled ? 'gray' : 'primary'}
      className={cx('Button', disabled && 'is-disabled', className)}
      color="white"
      disabled={disabled}
      display="flex"
      fontSize="small"
      fontWeight="bold"
      justifyContent="center"
      onClick={onClick}
      paddingX="large"
      paddingY="xsmall"
      type={type}
      width={width}
    >
      {children}
    </RippleBox>
  );
};

export default Button;
