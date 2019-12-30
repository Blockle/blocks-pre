import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Card from './Card';

afterEach(cleanup);

describe('Card', () => {
  it('should render Card with children', () => {
    const { getByText } = render(<Card>Card text</Card>);

    expect(getByText('Card text')).toBeTruthy();
  });
});
