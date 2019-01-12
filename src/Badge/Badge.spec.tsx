import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Badge from './Badge';

afterEach(cleanup);

describe('Badge', () => {
  it('should render Badge with children', () => {
    const { getByText } = render(<Badge>1</Badge>);

    expect(getByText('1')).toBeTruthy();
  });
});
