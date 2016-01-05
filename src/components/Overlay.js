import React, {Component} from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';
import MdPlay from '../../node_modules/react-icons/lib/md/play-arrow';
import {connect} from 'react-redux';
import {overlay$} from '../selectors/selectors';
import {updatePlaying} from '../actions/player';

@connect(overlay$)
@Radium
export default class Overlay extends React.Component {

    state = {
        playing: false
    };

    playButtonClicked() {
        this.props.dispatch(updatePlaying(true));
    }

    renderTimes() {
        return (
            <div style={style.timeRow}>
                <span style={style.timestamp}>{this.props.prettyCurrentTime}</span>
            </div>
        )
    }

    renderPlayButton() {
        let scale = this.props.playing ? 0.7 : 1;
        let opacity = this.props.playing ? 0 : 1;
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
        //console.info('render!', this.props)
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
        //top: 0,
        //left: 0,
        //bottom: 0,
        //right: 0,
        //pointerEvents: 'none'
        //backgroundColor: 'rgba(22, 63, 14, 0.4)'
    },
    timeRow: {
        //backgroundColor: 'red',
        position: 'fixed',
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
        fontWeight: 400,
        letterSpacing: 1.5
    },
    playButton: {
        position: 'fixed',
        width: 106,
        height: 106,
        borderRadius: '50%',
        border: '1px solid #3e3e3e',
        left: '50%',
        top: '50%',
        marginLeft: -53,
        marginTop: -53,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};