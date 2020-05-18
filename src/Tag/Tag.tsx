import React from 'react';
import { Stack } from 'Stack';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useRippleEffect } from '../useRippleEffect';
import './tag.css';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Tag = ({ children, onClick }: Props) => {
  const ref = useRippleEffect<HTMLDivElement>();

  return (
    <Box
      ref={ref}
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
    </Box>
  );
};

export default Tag;
