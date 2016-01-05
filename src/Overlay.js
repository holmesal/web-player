import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Overlay extends React.Component {

    render() {
        return (
            <div style={style.wrapper}>
                <span style={{position: 'absolute', top: 100, left: 100}}>frac: {this.props.frac}</span>
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
        pointerEvents: 'none'
        //backgroundColor: 'rgba(22, 63, 14, 0.4)'
    }
};