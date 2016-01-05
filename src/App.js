import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

// base styles
import '../index.css';

import Waveform from './Waveform';
import Scrubber from './Scrubber';
import Overlay from './Overlay';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {

  //componentWillMount() {
  //  setInterval(() => {
  //    console.info(window.scrollLeft)
  //  }, 300)
  //}

  state = {
    frac: 0
  };


  render() {
    return (
      <div style={style.wrapper} ref="wrapper">
        <Waveform onMove={(frac) => this.setState({frac})} />
        <Overlay frac={this.state.frac}/>
      </div>
    );
  }
}

let style = {
  wrapper: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};