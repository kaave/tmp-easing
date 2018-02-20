import getSequencerObserver from '../observable/sequencer';
declare module 'rxjs/Observable' {
    namespace Observable {
        let sequencer: typeof getSequencerObserver;
    }
}
