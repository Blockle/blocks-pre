import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

afterEach(cleanup);

describe('Card', () => {
  it('should render Card with children', () => {
    const { getByText } = render(<Card>Card text</Card>);

    expect(getByText('Card text')).toBeTruthy();
  });
});
