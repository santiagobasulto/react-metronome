import React from 'react';

class SetTempoButton extends React.Component {
  render() {
    return <button
      className="btn btn-default"
      onClick={() => this.props.onClick(this.props.beats)}
      type="submit">
      {this.props.beats} bps
    </button>
  }
}

export default SetTempoButton;
