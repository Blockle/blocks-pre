import React from 'react';
import { cx } from '../cx';
import { RippleBox } from '../RippleBox';
import { PickStyleProps } from '../useStyles';
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
  return (
    <RippleBox
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('OutlineButton', disabled && 'is-disabled', className)}
      fontWeight="bold"
      width={width}
      paddingX="large"
      paddingY="small"
      fontSize="small"
      color={disabled ? 'gray' : 'primary'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </RippleBox>
  );
};

export default OutlineButton;
