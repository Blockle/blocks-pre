import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Icon from './Icon';

afterEach(cleanup);

describe('Icon', () => {
  it('should render icon when a valid name is given', () => {
    const { getByTestId } = render(<Icon name="check" label="Back" />);
    const svgNode = getByTestId('icon-svg');

    expect(svgNode).toBeTruthy();
  });

  it('should render a title', () => {
    const { getByTitle } = render(<Icon name="check" label="Back" />);

    expect(getByTitle('Back')).toBeTruthy();
  });
});
