import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Paper from './Paper';

afterEach(cleanup);

describe('Paper', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Paper>Button Text</Paper>);

    expect(container).not.toHaveTextContent('Button Text');
  });

  it('should render children when opened', () => {
    const { container } = render(<Paper open>Button Text</Paper>);

    expect(container).toHaveTextContent('Button Text');
  });
});
