import React, { Component } from 'react';
import { cx } from 'classNames';

import './image.css';

interface Props {
  src: string;
  fit: 'fill' | 'contain' | 'cover' | 'none';
  width?: number;
  height?: number;
}

interface State {
  error: boolean;
  loaded: boolean;
  newImage: boolean;
  src?: string;
}

export default class Image extends Component<Props, State> {
  static defaultProps = {
    fit: 'none',
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.src === state.src) {
      return null;
    }

    return {
      newImage: true,
      loaded: false,
      error: false,
    };
  }

  state = {
    error: false,
    loaded: false,
    src: undefined,
    newImage: true,
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate() {
    if (this.state.newImage) {
      this.load();
    }
  }

  load() {
    const { src } = this.props;
    const image: HTMLImageElement = new (window as any).Image();
    image.src = src;

    if (image.decode) {
      image
        .decode()
        .then(this.onLoad)
        .catch(this.onError);
    } else {
      image.onload = this.onLoad;
    }

    image.onerror = this.onError;
  }

  onError = (error: any) => {
    this.setState({ error: true, src: this.props.src, newImage: false });
  };

  onLoad = () => {
    this.setState({ loaded: true, src: this.props.src, newImage: false });
  };

  render() {
    const { fit, width, height } = this.props;
    const { error, loaded, src } = this.state;

    if (error) {
      return (
        <div className="image has-error" title={`Failed to load ${src}`}>
          X
        </div>
      );
    }

    return (
      <img
        data-testid="image"
        className={cx('image', `fit-${fit}`, loaded && 'is-loaded')}
        src={src}
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
      />
    );
  }
}
