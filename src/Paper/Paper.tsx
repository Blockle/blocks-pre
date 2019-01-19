import React, { Component, createRef } from 'react';
import classNames from 'classnames';

import './paper.css';

export type PaperEffectNames = 'fade' | 'slide' | 'slideHorizontal';
export type PaperThemes = 'none' | 'fill' | 'angle';

interface Props {
  children?: React.ReactNode;
  className?: string;
  effect: PaperEffectNames;
  fit: boolean;
  open: boolean;
  theme: PaperThemes;
  onClick?(): void;
}

interface State {
  open: boolean;
}
export default class Paper extends Component<Props, State> {
  static defaultProps = {
    effect: 'fade',
    fit: false,
    open: false,
    theme: 'none',
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.open !== state.open) {
      return { open: true };
    }

    return null;
  }

  ref = createRef<HTMLDivElement>();

  state = {
    open: this.props.open,
  };

  componentDidMount() {
    if (this.props.open) {
      this.animate('enter');
    }
  }

  componentWillUnmount() {
    const { current } = this.ref;

    if (current) {
      current.removeEventListener('transitionend', this.onComplete);
    }
  }

  componentDidUpdate({ open }: Props) {
    if (this.props.open !== open) {
      this.animate(!open ? 'enter' : 'leave');
    }
  }

  animate(type: 'enter' | 'leave') {
    const { current } = this.ref;

    if (!current) {
      return;
    }

    current.addEventListener('transitionend', this.onComplete);

    // Why Safari, whyy.. Safari needs layout trashing to trigger transition
    if ('safari' in window && type === 'enter') {
      current.getBoundingClientRect();

      this.updateClassNames(type);
    } else {
      // Need 2 frames to start css animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.updateClassNames(type);
        });
      });
    }
  }

  updateClassNames(type: 'enter' | 'leave') {
    const { current } = this.ref;

    if (!current) {
      return;
    }

    if (type === 'enter') {
      current.classList.add('is-enter');
    } else {
      current.classList.remove('is-enter');
    }
  }

  show() {
    this.setState({ open: true });
  }

  onComplete = (event: TransitionEvent) => {
    if (event.propertyName !== 'opacity' && event.propertyName !== 'transform') {
      return;
    }

    const { current } = this.ref;

    if (current) {
      current.removeEventListener('transitionend', this.onComplete);

      this.setState({ open: this.props.open });
    }
  }

  render() {
    const { children, className, fit, theme, effect, onClick } = this.props;
    const { open } = this.state;

    if (!open) {
      return null;
    }

    return (
      <div
        ref={this.ref}
        onClick={onClick}
        className={classNames('paper', className, `effect-${effect}`, `theme-${theme}`,  {
          'is-fit': fit,
        })}
      >
        {children}
      </div>
    );
  }
}
