import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

function bouncing(height: number, gravity: number, result: number[] = [0]): number[] {
  const length = result.length;

  result.push(length > 0 ? height + result[length - 1] : height);

  const next = height * gravity;
  return next < 2 ? result : bouncing(next, gravity, result);
}

export interface Props {
  height: number;
  gravity: number;
}

export default function getBouncingObserver({ height, gravity }: Props): Observable<number> {
  return Observable.merge(
    ...bouncing(height, gravity)
      .map(msec => Math.floor(msec))
      .map(msec => Observable.of(msec).delay(msec)),
  );
}
