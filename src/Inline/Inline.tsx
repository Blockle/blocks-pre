import React, { Children } from 'react';
import { Box } from '../Box';
import { StyleProps } from '../useStyles';

interface Props {
  children: React.ReactNode;
  spacing: StyleProps['padding'];
}

const Inline = ({ children, spacing }: Props) => {
  const items = Children.toArray(children);

  return (
    <Box display="flex" flexWrap="wrap" negativeMarginTop={spacing} negativeMarginLeft={spacing}>
      {items.map((item, key) => {
        return (
          <Box key={key} display="inline-block" paddingTop={spacing} paddingLeft={spacing}>
            {item}
          </Box>
        );
      })}
    </Box>
  );
};

export default Inline;
