import React, {Component} from 'react';

export default class BrowserAudio extends React.Component {

    render() {
        return (
            <audio ref="audio" preload="true">
                <source src={this.props.source} type={this.props.type} />
            </audio>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.playing ? this.refs.audio.play() : this.refs.audio.pause();
        this.refs.audio.currentTime = this.props.currentTime;
    }

}

let style = {
    wrapper: {
        display: 'flex'
    }
};