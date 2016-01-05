var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import WaveformRenderer from './WaveformRenderer';

//render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
