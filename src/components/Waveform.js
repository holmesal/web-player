import React, {Component} from 'react';
import Radium from 'radium';
import clamp from 'clamp';
import {Motion, spring} from 'react-motion';
import WaveformRenderer from './WaveformRenderer';
import {connect} from 'react-redux';
import {updateProgress} from '../actions/player';

@connect()
@Radium
export default class Waveform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            padding: window.innerWidth / 2,
            width: 0
        };
        this.throttledScrollHandler = _.throttle(this.handleScroll, 64);
    }

    gotWidth(width) {
        console.info('got width', width)
        this.setState({width});
    }

    handleScroll(ev) {
        //ev.preventDefault();
        //console.info('scroll!', ev.deltaY);
        this.calcFrac();
        this.clearTouchTimer();
        //console.info(this.refs.wrapper.scrollLeft);
        //console.info(this.getDOMNode())
    }

    calcFrac() {
        let left = document.getElementById('root').scrollLeft;
        let frac = left / (this.state.width);
        //console.info(frac);
        //console.info('updating!');
        //this.props.onMove(clamp(frac, 0, 1).toFixed(3));
        this.props.dispatch(updateProgress(clamp(frac, 0, 1)))
    }

    startTouchTimer() {
        this.clearTouchTimer();
        //console.info('starting touch timer!');
        this.measureInterval = setInterval(() => {
            console.info('timer!');
            this.calcFrac()
        }, 50)
    }

    clearTouchTimer() {
        //console.info('clearing touch timer!');
        if (this.measureInterval) clearInterval(this.measureInterval);
    }

    componentDidMount() {
        //document.documentElement.addEventListener('scroll', this.handleScroll);
        //window.addEventListener('wheel', this.handleScroll);
        window.addEventListener('mousewheel', this.throttledScrollHandler.bind(this));
        window.addEventListener('scroll', this.throttledScrollHandler.bind(this));
        window.addEventListener('touchstart', this.startTouchTimer.bind(this));
        window.addEventListener('scrollend', this.clearTouchTimer.bind(this));
        //window.onwheel = console.info;
        //console.info(FTScroller)
        //this.scroller = new FTScroller(document.getElementById('root'), {
        //    scrollingY: false
        //}).addEventListener('scroll', (pos) => {
        //    console.info(pos);
        //})
    }

    renderWaveform() {
        return (
            <Motion defaultStyle={{scaleY: 0}} style={{scaleY: spring(1)}}>
                {(val) => (
                    <div style={{transform: `scaleY(${val.scaleY})`}}>
                        <WaveformRenderer onWidth={this.gotWidth.bind(this)}/>
                    </div>
                )}
            </Motion>
        )
    }


                //<img style={[style.waveform]} src="http://static1.squarespace.com/static/543cb41ce4b0856c8a0288f3/t/54418dafe4b067cc71767362/1413582257072/audio+waveform.png?format=2500w" />
    render() {
        console.info('waveform render!');
        return (
            <div ref="wrapper" style={[style.wrapper, {paddingLeft: this.state.padding, paddingRight: this.state.padding, width: this.state.width + 2 * this.state.padding}]}>
                {this.renderWaveform()}
                <div style={style.mask}></div>
            </div>
        );
    }
}

let style = {
    wrapper: {
        display: 'flex',
        //height: 70,
        //flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        overflowX: 'scroll',
        //backgroundColor: 'red',
        boxSizing: 'border-box',
        //position: 'relative'
    },
    waveform: {
        //height: 70,
        display: 'block',
        flex: 1
    },
    mask: {
        position: 'fixed',
        backgroundColor: 'white',
        opacity: 0.9,
        //top: '50%',
        top: 0,
        left: 0,
        width: '50%',
        height: 70,
        height: '100%',
        marginTop: -35,
        //borderRight: '1px solid #efefef',
        marginLeft: -1,
        pointerEvents: 'none'
    }
};