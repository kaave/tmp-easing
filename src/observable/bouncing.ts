import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';

function bouncing(height: number, gravity: number, result: number[] = []): number[] {
  const length = result.length;

  result.push(length > 0 ? height + result[length - 1] : height);

  const next = height * gravity;
  return next < 2 ? result : bouncing(next, gravity, result);
}

Observable.merge(
  ...bouncing(500, 0.9)
    .map(msec => Math.floor(msec))
    .map(msec => Observable.fromPromise(new Promise(resolve => setTimeout(() => resolve(msec), msec)))),
).subscribe({
  next(msec) {
    console.log(msec);
  },
});
