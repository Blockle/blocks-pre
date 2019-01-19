import React, { Component } from 'react';

import './ripple.css';
import { animateCss } from 'utils';

interface Props {
  children?: React.ReactNode;
  renderAs: keyof HTMLElementTagNameMap;
  className?: string;
  [key: string]: any;
}

const RIPPLE_WIDTH = 20;

export default class Ripple extends Component<Props> {
  current?: HTMLDivElement;
  isTouch = false;
  raf?: number;
  ref = React.createRef<HTMLElement>();
  ripples: HTMLDivElement[] = [];

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('touchend', this.onTouchEnd);
  }

  componentWillUnmount() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }

    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchend', this.onTouchEnd);
  }

  onMouseDown = (event: React.MouseEvent) => {
    // onMouseDown also triggers on touch, so ignore mouseDown triggered after touchStart
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

  onMouseUp = () => {
    if (this.isTouch) {
      return;
    }

    this.removeCurrentRipple();
  }

  onTouchEnd = () => {
    this.removeCurrentRipple();
  }

  createRipple(clientX: number, clientY: number) {
    const { current } = this.ref;

    if (!current) {
      return;
    }

    const rect = current.getBoundingClientRect();
    const ripple = document.createElement('div');

    ripple.className = 'Ripple-Circle';
    ripple.style.width = `${RIPPLE_WIDTH}px`;
    ripple.style.height = `${RIPPLE_WIDTH}px`;
    ripple.style.top = `${(clientY - rect.top) - (RIPPLE_WIDTH / 2)}px`;
    ripple.style.left = `${(clientX - rect.left) - (RIPPLE_WIDTH / 2)}px`;

    current.appendChild(ripple);

    this.current = ripple;
    this.ripples.push(ripple);

    animateCss({
      target: ripple,
      transform: `scale(${(rect.width / RIPPLE_WIDTH) * 3})`,
      duration: Math.min(800, 340 + (150 * (rect.width / 300))),
      timingFunction: 'cubic-bezier(0.3, 0, 1, 0.4)',
    });
  }

  removeCurrentRipple() {
    if (!this.current) {
      return;
    }

    animateCss({
      duration: 400,
      onComplete: this.removeRipple,
      opacity: 0,
      target: this.current,
      timingFunction: 'ease-out',
    });
  }

  removeRipple = (ripple: HTMLElement) => {
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
