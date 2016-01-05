export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const updateProgress = (progress) => ({
    type: UPDATE_PROGRESS,
    progress
});

export const UPDATE_PLAYING = 'UPDATE_PLAYING';
export const updatePlaying = (playing) => ({
    type: UPDATE_PLAYING,
    playing
});