import { Observable } from 'rxjs/Observable';

import '../add/bouncing';

/*
 * easing operator
 */
Observable.bouncing({ height: 500, gravity: 0.9 }).subscribe({
  next(msec) {
    console.log(new Date(), msec);
  },
});
