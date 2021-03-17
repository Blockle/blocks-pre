import { FC, MouseEvent, ReactNode } from 'react';
import { cx } from '../cx';
import { RippleBox } from '../RippleBox';
import { PickStyleProps } from '../useStyles';
import './button.css';

interface Props extends PickStyleProps<'width'> {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  secondary?: boolean;
}

const Button: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  width,
  secondary,
}) => {
  return (
    <RippleBox
      component="button"
      alignItems="center"
      backgroundColor={disabled ? 'lightGray' : secondary ? 'secondary' : 'primary'}
      className={cx('Button', disabled && 'is-disabled', className)}
      color="white"
      disabled={disabled}
      display="flex"
      fontSize="small"
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
