import { Observable } from 'rxjs/Observable';
import getEasingObserver from '../observable/easing';

Observable.easing = getEasingObserver;

declare module 'rxjs/Observable' {
  namespace Observable { export let easing: typeof getEasingObserver; }
}
