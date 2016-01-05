import store from '../store';
import {audio$} from '../selectors/selectors';
import {createSelector} from 'reselect';

class Audio {

    constructor() {
        this.state = {};
        // Set up store listeners
        this.initListeners();
        // Create the audio element
        this.create();
    }

    initListeners() {
        this.state = {};
        //let sel$ = createSelector(audio$, (audio) => {
        //    console.info('shit changed!', audio);
        //});
        store.subscribe(() => {
            console.info('rinning selector');
            let nextState = audio$(store.getState());
            console.info(nextState === this.state);
            this.state = nextState;
        })
    }

}

/**
 Audio element for the browser
*/
class BrowserAudio extends Audio {
    create() {
        console.info('creating audio!')
        this.audioElement = document.createElement('audio');
        document.body.appendChild(this.audioElement);
    }
}

export default new BrowserAudio();