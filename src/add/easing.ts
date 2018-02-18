import { Observable } from 'rxjs/Observable';
import getEasingObserver from '../observable/easing';

declare module 'Observable' {
  namespace Observable { export let easing: typeof getEasingObserver; }
}

Observable.easing = getEasingObserver;
