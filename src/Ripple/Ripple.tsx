import React, { Component } from 'react';

import './ripple.css';

interface Props {
  children?: React.ReactNode;
  renderAs: keyof HTMLElementTagNameMap;
  className?: string;
  [key: string]: any;
}

export default class Ripple extends Component<Props> {
  current?: HTMLDivElement;
  isTouch = false;
  raf?: number;
  ref = React.createRef<HTMLElement>();
  ripples: HTMLDivElement[] = [];

  componentDidMount() {
    document.addEventListener('mouseup', this.requestRemove);
    document.addEventListener('touchend', this.requestRemove);
  }

  componentWillUnmount() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }

    document.removeEventListener('mouseup', this.requestRemove);
    document.removeEventListener('touchend', this.requestRemove);
  }

  onMouseDown = (event: React.MouseEvent) => {
    // onMouseDown also triggers on touch, so ignore mouseDown triggered
    // after touchStart
    if (this.isTouch) {
      return;
    }

    const { clientX, clientY } = event;

    this.createRipple(clientX, clientY);
  }

  onTouchStart = (event: React.TouchEvent) => {
    const { clientX, clientY } = event.targetTouches[0];

    this.isTouch = true;
    this.createRipple(clientX, clientY);
  }

  createRipple(clientX: number, clientY: number) {
    const { current } = this.ref;

    if (!current) {
      return;
    }

    this.requestRemove();

    const rect = current.getBoundingClientRect();
    const ripple = document.createElement('div');

    ripple.className = 'Ripple-Circle';
    ripple.style.top = `${(clientY - rect.top) - (50 / 2)}px`;
    ripple.style.left = `${(clientX - rect.left) - (50 / 2)}px`;

    current.appendChild(ripple);

    this.current = ripple;
    this.ripples.push(ripple);

    this.raf = requestAnimationFrame(() => {
      this.raf = requestAnimationFrame(() => {
        ripple.style.transform = `scale(${(rect.width / 50) * 3})`;
        ripple.style.transitionDuration = `${Math.min(800, 340 + (150 * (rect.width / 300)))}ms`;
        ripple.classList.add('is-animating');
      });
    });
  }

  requestRemove = () => {
    if (!this.current) {
      return;
    }

    this.current.addEventListener('transitionend', this.removeRipple);
    this.current.style.transition = '0.4s ease-out';
    this.current.style.opacity = '0';
  }

  removeRipple = (event: TransitionEvent) => {
    const ripple = event.currentTarget as HTMLDivElement;

    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }

  render() {
    const { children, renderAs, className, ...props } = this.props;

    return React.createElement(
      renderAs,
      {
        ref: this.ref,
        ...props,
        className: `Ripple ${className}`,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
      },
      children,
    );
  }
}
