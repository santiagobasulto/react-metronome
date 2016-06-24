import React from 'react';
import BeatNumber from './components/BeatNumber';


class Metronome extends React.Component {
  render() {
    return (
    <div className={'metronome center-block'}>
      <BeatNumber beat={1} />
    </div>);
  }
}

export default Metronome;
