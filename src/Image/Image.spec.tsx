import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Image from './Image';

afterEach(cleanup);

describe('Image', () => {
  beforeAll(() => {
    // @ts-ignore
    Object.defineProperty(global.Image.prototype, 'src', {
      set(src) {
        if (src === 'ERROR') {
          setTimeout(() => this.onerror(new Error('Image not loaded')));
        } else {
          setTimeout(() => this.onload());
        }
      },
    });
  });

  it('should render image src', (done) => {
    const { getByTestId } = render(<Image src="SUCCESS" width={100} height={100} />);
    const image = getByTestId('image');

    expect(image).toBeTruthy();
    expect(image).not.toHaveAttribute('src');

    setTimeout(() => {
      expect(image).toHaveAttribute('src', 'SUCCESS');
      done();
    });
  });

  it('should handle changing src prop', (done) => {
    const { getByTestId, rerender } = render(<Image src="SUCCESS" />);

    setTimeout(() => {
      expect(getByTestId('image')).toHaveAttribute('src', 'SUCCESS');

      rerender(<Image src="SUCCESS_CHANGE" />);

      setTimeout(() => {
        expect(getByTestId('image')).toHaveAttribute('src', 'SUCCESS_CHANGE');
        done();
      });
    });
  });

  it('should error', (done) => {
    const { container, getByTestId } = render(<Image src="ERROR" />);
    const image = getByTestId('image');

    expect(image).toBeTruthy();

    setTimeout(() => {
      expect(container).toHaveTextContent('Failed to load');
      done();
    });
  });
});
