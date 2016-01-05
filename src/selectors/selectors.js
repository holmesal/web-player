import {createSelector} from 'reselect';
import {prettyFormatTime} from '../utils/time';

export const progress$ = (state) => state.getIn(['player', 'progress']);
export const playing$ = (state) => state.getIn(['player', 'playing']);
export const episodeLength$ = (state) => state.getIn(['player', 'episodeLength']);

/**
 * Derived data
 */
export const currentTime$ = createSelector(progress$, episodeLength$, (progress, episodeLength) => progress * episodeLength);
export const prettyCurrentTime$ = createSelector(currentTime$, (currentTime) => prettyFormatTime(currentTime));

/**
 * Selectors for components
 */
export const overlay$ = createSelector(progress$, playing$, prettyCurrentTime$, (progress, playing, prettyCurrentTime) => ({
    progress,
    playing,
    prettyCurrentTime
}));
export const waveform$ = createSelector(playing$, (playing) => ({
    playing
}));
export const audio$ = createSelector(playing$, progress$, (playing, progress) => ({
    playing,
    //progress
}));