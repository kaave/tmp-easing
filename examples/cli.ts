import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';

import '../add/easing';
import { EaseType } from '../utils/easing';

/*
 * easing operator
 */
const type = (process.argv[2] as EaseType) || 'ease-out-expo';
const noOptimize = process.argv[3] === '0';
const observe = Observable.easing({
  type,
  durationMSec: 3000,
  start: 1,
  end: 30,
});

if (noOptimize) {
  observe.subscribe({
    next(time) {
      console.log(new Date(), time);
    },
  });
} else {
  observe
    .map(value => Math.floor(value))
    .distinct()
    .subscribe({
      next(time) {
        console.log(new Date(), time);
      },
    });
}
