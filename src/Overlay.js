import React, {Component} from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';

import MdPlay from 'react-icons/lib/md/play-arrow';

@Radium
export default class Overlay extends React.Component {

    state = {
        playing: false
    };

    playButtonClicked() {
        this.setState({playing: true});
    }

    renderTimes() {
        return (
            <div style={style.timeRow}>
                <span style={style.timestamp}>{this.props.frac}</span>
            </div>
        )
    }

    renderPlayButton() {
        let scale = this.state.playing ? 0.7 : 1;
        let opacity = this.state.playing ? 0 : 1;
        return (
            <Motion defaultStyle={{scale: 0.7, opacity: 0}} style={{scale: spring(scale), opacity: spring(opacity)}}>
                {(val) => (
                    <div style={[style.playButton, {opacity: val.opacity, transform: `scale(${val.scale})`}]} onClick={this.playButtonClicked.bind(this)} onTouchTap={this.playButtonClicked.bind(this)}>
                        <MdPlay style={{fontSize: 50}} />
                    </div>
                )}
            </Motion>
        )
    }

    render() {
        console.info('render!')
        return (
            <div style={style.wrapper}>
                {this.renderTimes()}
                {this.renderPlayButton()}
            </div>
        );
    }
}

let style = {
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        //pointerEvents: 'none'
        //backgroundColor: 'rgba(22, 63, 14, 0.4)'
    },
    timeRow: {
        //backgroundColor: 'red',
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        marginTop: -70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timestamp: {
        fontSize: 16,
        fontWeight: 400
    },
    playButton: {
        width: 106,
        height: 106,
        borderRadius: '50%',
        border: '1px solid #3e3e3e',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -53,
        marginTop: -53,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};