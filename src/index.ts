import 'rxjs/add/operator/distinct';

import getEasingObserver from './observable/easing';

/*
 * easing operator
 */
getEasingObserver('ease-out-expo', 3000, 14, 3)
  .map(value => Math.floor(value))
  .distinct()
  .subscribe({
    next(time) {
      console.log(new Date(), time);
    },
  });
