import React, {Component} from 'react';
import {connect} from 'react-redux';
import {audio$} from '../../selectors/selectors';
import {createSelector} from 'reselect'

import BrowserAudio from './BrowserAudio';

@connect(audio$)
export default class Audio extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        // Check if the next time is far enough away, or anything else changed
        // ...
        return true;
    }

    getTargetComponent() {
        // TODO - react-native
        return BrowserAudio;
    }

    render() {
        console.info('audio component is updating!', this.props);
        let TargetAudio = this.getTargetComponent();
        return <TargetAudio
            type="audio/mp3"
            source={this.props.source}
            playing={this.props.playing}
            currentTime={this.props.progress * this.props.length}/>
    }
}

//class Audio {
//
//    constructor() {
//        this.state = {};
//        // Set up store listeners
//        this.initListeners();
//        // Create the audio element
//        this.create();
//    }
//
//    initListeners() {
//        this.state = {};
//        //let sel$ = createSelector(audio$, (audio) => {
//        //    console.info('shit changed!', audio);
//        //});
//        store.subscribe(() => {
//            console.info('rinning selector');
//            let nextState = audio$(store.getState());
//            console.info(nextState === this.state);
//            this.state = nextState;
//        })
//    }
//
//}
//
///**
// Audio element for the browser
//*/
//class BrowserAudio extends Audio {
//    create() {
//        console.info('creating audio!')
//        this.audioElement = document.createElement('audio');
//        document.body.appendChild(this.audioElement);
//    }
//}
//
//export default new BrowserAudio();