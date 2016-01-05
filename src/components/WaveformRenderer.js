import React, {Component} from 'react';
import Radium from 'radium';
import {Group, Path, Shape, Surface, Transform} from 'react-art';
import _ from 'lodash';

let height = 70;
let strokeWidth = 2;
let spacing = 8;
let strokeColor = '#50ABF1';

@Radium
export default class WaveformRenderer extends React.Component {

    //state = {
    //    fracs:
    //};

    shouldComponentUpdate(nextProps, nextState) {
      return false
    }

    componentWillMount() {
        // Generate some random fracs
        let fracs = _.map(_.range(0, 2000), i => Math.sin(i/5) * Math.random() / 2 + 0.5);
        let width = this.calcWidth(fracs);
        this.setState({
            fracs,
            width
        });
        this.props.onWidth(width);
        //this.
    }

    calcWidth(fracs) {
        return (fracs.length - 1) * spacing + strokeWidth;
    }


    drawBar(frac, x) {
        // Calc translation
        let trans = new Transform().translate(x*spacing + strokeWidth/2);
        // Make path
        let path = new Path();
        // dims
        let length = frac * height - strokeWidth; //tip-to-tail, adjusted for stroke caps
        let y1 = (height - length) / 2; // top y
        let y2 = y1 + length; // bottom y
        // move to start
        path.move(0, y1);
        // draw to end
        path.lineTo(0, y2);
        // render shape
        return <Shape key={x} d={path} strokeWidth={strokeWidth} stroke={strokeColor} strokeCap="round" transform={trans} />
    }

    renderBars() {
        return this.state.fracs.map(this.drawBar);
    }

    render() {
        return (
            <Surface
                width={this.state.width}
                height={height}
            >
                {this.renderBars()}
            </Surface>
        );
    }
}

let style = {
    wrapper: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};