import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import './dialog.css';
import { animateCss } from 'utils';
import { IconButton } from 'IconButton';

interface Props {
  children: React.ReactNode;
  open?: boolean;
  onRequestClose(): void;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  full?: boolean;
}

interface State {
  open: boolean;
}

export default class Dialog extends Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.open !== state.open) {
      return {
        open: true,
      };
    }

    return null;
  }

  state = {
    open: !!this.props.open,
  };

  backRef = createRef<HTMLDivElement>();
  dialogRef = createRef<HTMLDivElement>();
  layer?: HTMLDivElement;

  componentDidMount() {
    if (this.props.open) {
      this.animate('enter');
    }
  }

  componentWillUnmount() {
    this.removeLayer();
  }

  componentDidUpdate({ open }: Props) {
    if (this.props.open !== open) {
      this.animate(!open ? 'enter' : 'leave');
    }
  }

  getLayer() {
    if (!this.layer) {
      this.layer = document.createElement('div');
      document.body.appendChild(this.layer);
    }

    return this.layer;
  }

  removeLayer() {
    if (!this.layer) {
      return;
    }

    document.body.removeChild(this.layer);
    this.layer = undefined;
  }

  updateStateOpen = () => {
    this.setState({ open: !!this.props.open });
  }

  animate(type: 'enter' | 'leave') {
    const back = this.backRef.current;
    const dialog = this.dialogRef.current;

    if (!dialog || !back) {
      return;
    }

    animateCss({
      target: back,
      opacity: (type === 'enter') ? 1 : 0,
    });

    animateCss({
      target: dialog,
      opacity: (type === 'enter') ? 1 : 0,
      transform: (type === 'enter') ? 'translateY(0)' : 'translateY(20%)',
      onComplete: this.updateStateOpen,
    });
  }

  render() {
    const { actions, children, onRequestClose, title, full } = this.props;
    const { open } = this.state;

    if (!open) {
      // Remove layer, next layer created will win in the z-index battle
      this.removeLayer();
      return null;
    }

    const dialog = (
      <div className="DialogContainer">
        <div
          ref={this.backRef}
          className="DialogBack"
          onClick={onRequestClose}
        />
        <div
          ref={this.dialogRef}
          className={classNames('Dialog', {
            'is-full': full,
            'has-title': !!title,
          })}
        >
          {title &&
            <div className="DialogTopBar">
              <div className="DialogTitle">
                {title}
              </div>
              <IconButton name="close" label="Close" onClick={onRequestClose} />
            </div>}

          <div className="DialogContent">
            {children}
          </div>

          {actions &&
            <div className="DialogActions">
              {actions}
            </div>}
        </div>
      </div>
    );

    return createPortal(dialog, this.getLayer());
  }
}
