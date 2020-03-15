import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Heading from './Heading';

afterEach(cleanup);

describe('Heading', () => {
  it('should render children', () => {
    const { getByText } = render(<Heading level={1}>Heading Text</Heading>);
    const heading = getByText('Heading Text');

    expect(heading).toBeTruthy();
  });
});
