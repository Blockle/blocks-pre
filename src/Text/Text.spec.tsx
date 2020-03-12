import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Text from './Text';

afterEach(cleanup);

xdescribe('Text', () => {
  it('should render children and default styles', () => {
    const { getByText } = render(<Text>Lorum ipsum</Text>);
    const textNode = getByText('Lorum ipsum');

    expect(textNode).toBeTruthy();
    expect(textNode).toHaveClass('size-medium');
    expect(textNode).toHaveClass('align-left');
  });

  it('should render with different sizes', () => {
    const { getByText } = render(<Text size="small">Lorum ipsum</Text>);
    const textNode = getByText('Lorum ipsum');

    expect(textNode).toHaveClass('size-small');
  });

  it('should render with different alignment', () => {
    const { getByText } = render(<Text textAlign="right">Lorum ipsum</Text>);
    const textNode = getByText('Lorum ipsum');

    expect(textNode).toHaveClass('align-right');
  });
});
