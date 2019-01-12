import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Heading from './Heading';

afterEach(cleanup);

describe('Heading', () => {
  it('should render children and default styles', () => {
    const { getByText } = render(<Heading level="1">Heading Text</Heading>);
    const heading = getByText('Heading Text');

    expect(heading).toBeTruthy();
    expect(heading).toHaveClass('size-medium');
    expect(heading).toHaveClass('align-center');
  });

  it('should render with different sizes', () => {
    const { getByText } = render(<Heading level="1" size="small">Heading Text</Heading>);
    const heading = getByText('Heading Text');

    expect(heading).toHaveClass('size-small');
  });

  it('should render with different alignment', () => {
    const { getByText } = render(<Heading level="1" align="right">Heading Text</Heading>);
    const heading = getByText('Heading Text');

    expect(heading).toHaveClass('align-right');
  });
});
