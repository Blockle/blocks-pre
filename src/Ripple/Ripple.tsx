import React, { Component, ElementType } from 'react';
import { animateCss } from '../utils';
import './ripple.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  component: ElementType;
  // TODO Specify me
  [key: string]: any;
}

const RIPPLE_WIDTH = 50;

export default class Ripple extends Component<Props> {
  current?: HTMLDivElement;
  currentCreatedAt!: number;
  isTouch = false;
  raf?: number;
  ref = React.createRef<HTMLElement>();
  ripples: HTMLDivElement[] = [];

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('touchend', this.onTouchEnd);
    document.addEventListener('touchcancel', this.onTouchEnd);
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
  };

  onTouchStart = (event: React.TouchEvent) => {
    const { clientX, clientY } = event.targetTouches[0];

    this.isTouch = true;
    this.createRipple(clientX, clientY);
  };

  onMouseUp = () => {
    if (this.isTouch) {
      return;
    }

    this.removeCurrentRipple();
  };

  onTouchEnd = () => {
    this.removeCurrentRipple();
  };

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
    ripple.style.top = `${clientY - rect.top - RIPPLE_WIDTH / 2}px`;
    ripple.style.left = `${clientX - rect.left - RIPPLE_WIDTH / 2}px`;

    current.appendChild(ripple);

    this.currentCreatedAt = Date.now();
    this.current = ripple;
    this.ripples.push(ripple);

    const duration = Math.min(800, 100 + 50 * (rect.width / RIPPLE_WIDTH));
    const transform = `scale(${(rect.width / RIPPLE_WIDTH) * 2})`;

    animateCss({
      target: ripple,
      transform,
      duration,
      opacity: 0.3,
      timingFunction: 'cubic-bezier(.22,.29,.7,.95)',
    });
  }

  removeCurrentRipple() {
    if (!this.current) {
      return;
    }

    animateCss({
      duration: Date.now() - this.currentCreatedAt < 50 ? 800 : 400,
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
  };

  render() {
    const { children, component, className, ...props } = this.props;

    return React.createElement(
      component,
      {
        ref: this.ref,
        ...props,
        className: `Ripple ${className}`,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onMouseLeave: this.onMouseUp,
      },
      children,
    );
  }
}
