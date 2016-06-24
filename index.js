import React from 'react';
import { render } from 'react-dom'
import Metronome from './app/Metronome'
require('./screen.scss');


render(
  <Metronome />,
  document.getElementById('app')
);
