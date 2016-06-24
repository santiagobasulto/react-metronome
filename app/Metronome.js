import React from 'react';
import BeatNumber from './components/BeatNumber';


class Metronome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beatsPerSecond: props.beatsPerSecond,
      beatsPerCycle: props.beatsPerCycle,
      beat: 1
    };
  }
  render() {
    return (
    <div className={'metronome center-block'}>
      <BeatNumber beat={this.state.beat} />
    </div>);
  }
  componentDidMount(){
    setInterval((() => {
      const beat = (this.state.beat % this.state.beatsPerCycle) + 1;
      this.setState({
        beat: beat
      });
    }).bind(this), (60 / this.state.beatsPerSecond * 1000));
  }
}
Metronome.defaultProps = {
  beatsPerSecond: 100,
  beatsPerCycle: 4
};

export default Metronome;
