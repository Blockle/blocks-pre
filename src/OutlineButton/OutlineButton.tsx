import { FC, ReactNode } from 'react';
import { cx } from '../cx';
import { RippleBox } from '../RippleBox';
import { PickStyleProps } from '../useStyles';
import './outline-button.css';

interface Props extends PickStyleProps<'width'> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
}

const OutlineButton: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  width,
}) => {
  return (
    <RippleBox
      component="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('OutlineButton', disabled && 'is-disabled', className)}
      fontWeight="bold"
      width={width}
      paddingX="large"
      paddingY="small"
      fontSize="small"
      color={disabled ? 'lightGray' : 'primary'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </RippleBox>
  );
};

export default OutlineButton;
