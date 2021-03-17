import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Badge from './Badge';

afterEach(cleanup);

describe('Badge', () => {
  it('should render Badge with children', () => {
    const { getByText } = render(<Badge>1</Badge>);

    expect(getByText('1')).toBeTruthy();
  });
});
