import { Observable } from 'rxjs/Observable';
import getSequencerObserver from '../observable/sequencer';

Observable.sequencer = getSequencerObserver;

declare module 'rxjs/Observable' {
  namespace Observable { export let sequencer: typeof getSequencerObserver; }
}
