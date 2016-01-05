// Tap events for react elements
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import {Provider} from 'react-redux';
import store from './store';

class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        );
    }
}

render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
