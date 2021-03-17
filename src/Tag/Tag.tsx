import { FC, ReactNode } from 'react';
import { Stack } from 'Stack';
import { Icon } from '../Icon';
import { RippleBox } from '../RippleBox';
import { Text } from '../Text';
import './tag.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Tag: FC<Props> = ({ children, onClick }) => {
  return (
    <RippleBox
      tabIndex={0}
      className="Tag"
      display="flex"
      alignItems="center"
      paddingX="small"
      paddingY="xsmall"
      onClick={onClick}
      onKeyPress={(event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          onClick();
        }
      }}
    >
      <Stack spacing="xsmall" horizontal>
        <Text fontSize="small" fontWeight="bold">
          {children}
        </Text>
        <Icon name="cross" label="remove" color="black" size="xsmall" />
      </Stack>
    </RippleBox>
  );
};

export default Tag;
