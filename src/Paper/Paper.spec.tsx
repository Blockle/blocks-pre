import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Paper from './Paper';

afterEach(cleanup);

describe('Paper', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Paper render={() => 'Button Text'} />);

    expect(container).not.toHaveTextContent('Button Text');
  });

  it('should render children when opened', () => {
    const { container } = render(<Paper open render={() => 'Button Text'} />);

    expect(container).toHaveTextContent('Button Text');
  });
});
