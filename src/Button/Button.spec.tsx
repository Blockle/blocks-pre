import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  it('should render Button with children', () => {
    const { getByText } = render(<Button>Button text</Button>);

    expect(getByText('Button text')).toBeTruthy();
  });
});
