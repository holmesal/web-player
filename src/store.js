// This module bootstraps and exports the flux store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
// Import the root reducer (which imports all subreducers)
import rootReducer from './reducers/index';

// Initializing with middleware
const createStoreWithMiddleware = applyMiddleware(
    // we're using redux-thunk for async actions
    thunk,
    // Create a logger to make it easy to debug state changes
    createLogger({
        stateTransformer: (state) => state.toJS(),
        collapsed: true
    })
)(createStore);

//export default function configureStore() {

let store = createStoreWithMiddleware(rootReducer);
// Allow hot reloading
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;

//return store;

//}