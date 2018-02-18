import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';

// import getEasingObserver from './observable/easing';
import './add/easing';

/*
 * easing operator
 */
Observable.easing({
  type: 'ease-out-expo',
  durationMSec: 3000,
  start: 5,
  end: 14,
})
  .map(value => Math.floor(value))
  .distinct()
  .subscribe({
    next(time) {
      console.log(new Date(), time);
    },
  });
