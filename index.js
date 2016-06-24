import React from 'react';
import { render } from 'react-dom'
import Metronome from './app/Metronome'
require('./screen.scss');


render(
  <Metronome beatsPerSecond={150} beatsPerCycle={3} />,
  document.getElementById('app')
);
