import {createReducer} from 'redux-immutablejs';
import Immutable from 'immutable';
import {UPDATE_PROGRESS, UPDATE_PLAYING} from '../actions/player';

const initialState = Immutable.fromJS({
    playing: false,
    progress: 0.0,
    episodeLength: 11390
});

export default createReducer(initialState, {

    [UPDATE_PROGRESS]: (state, action) => state.set('progress', action.progress),

    [UPDATE_PLAYING]: (state, action) => state.set('playing', action.playing)

});