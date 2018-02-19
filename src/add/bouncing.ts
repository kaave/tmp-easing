import { Observable } from 'rxjs/Observable';
import getBouncingObserver from '../observable/bouncing';

Observable.bouncing = getBouncingObserver;

declare module 'rxjs/Observable' {
  namespace Observable { export let bouncing: typeof getBouncingObserver; }
}
