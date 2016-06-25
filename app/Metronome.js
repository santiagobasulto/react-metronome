import React from 'react';
import BeatNumber from './components/BeatNumber';
import ControlButton from './components/ControlButton';
import SetTempoButton from './components/SetTempoButton';
import _ from 'lodash';

class Metronome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beatsPerSecond: props.beatsPerSecond,
      beatsPerCycle: props.beatsPerCycle,
      beat: 1,
      running: true
    };
  }
  startMetronome(){
    let self = this;
    this.setState({
      beat: 1,
      running: true
    }, () => self._startInterval());
  }
  stopMetronome(){
    let self = this;
    this.setState({
      running: false
    }, () => {
      self._stopInterval();
    });
  }
  setBeatsPerSecond(beats){
    this.setState({
      beatsPerSecond: beats
    }, () => {
      this._stopInterval();
      this._startInterval();
    });
  }
  render() {
    let tempoButtons = _.map([60, 80, 100, 120], (val) => {
      return <SetTempoButton beats={val} key={val} onClick={this.setBeatsPerSecond.bind(this)} />
    });
    return (
    <div className={'metronome center-block'}>
      <div class="control-buttons">
        <ControlButton
          text="Start"
          className="btn-success"
          onClick={this.startMetronome.bind(this)}
          isDisabled={this.state.running}/>
        <ControlButton
          text="Stop"
          className="btn-danger"
          onClick={this.stopMetronome.bind(this)}
          isDisabled={!this.state.running}/>
      </div>
      <BeatNumber beat={this.state.beat} />
      {tempoButtons}
    </div>);
  }
  _startInterval(){
    this.interval = setInterval((() => {
      const beat = (this.state.beat % this.state.beatsPerCycle) + 1;
      this.setState({
        beat: beat
      });
    }).bind(this), (60 / this.state.beatsPerSecond * 1000));
  }
  _stopInterval(){
    clearInterval(this.interval);
  }
  componentDidMount() {
    this._startInterval();
  }
}
Metronome.defaultProps = {
  beatsPerSecond: 100,
  beatsPerCycle: 4
};

export default Metronome;
