import React, {Component} from 'react';
import Radium from 'radium';

import Waveform from './Waveform';

@Radium
export default class Scrubber extends React.Component {

    render() {
        return (
            <div style={style.wrapper}>
                <Waveform />
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