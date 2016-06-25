import React from 'react';

class ControlButton extends React.Component {
  render() {
    return <button
      type="button"
      onClick={this.props.onClick}
      className={"btn " + this.props.className + " " + (this.props.isDisabled ? 'disabled': '')}>
      {this.props.text}
    </button>
  }
}

export default ControlButton;
