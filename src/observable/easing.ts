import { Observable } from 'rxjs/Observable';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';

import { getBezierEasing, EaseType } from '../utils/easing';

/*
 * create easing operator
 */

export interface Props {
  type: EaseType;
  durationMSec: number;
  end: number;
  start?: number;
  frameRate?: number;
}

export default function getEasingObserver({
  type,
  durationMSec,
  end,
  start: propStart,
  frameRate: propFrameRate,
}: Props): Observable<number> {
  const start = propStart || 0;
  const frameRate = propFrameRate || 60;
  const intervalMSec = 1000 / frameRate;
  const easing = getBezierEasing(type);
  const endObserver = Observable.of(end);
  const length = end - start;

  return Observable.timer(0, intervalMSec, animationFrame)
    .takeUntil(Observable.timer(durationMSec))
    .map(value => value * intervalMSec)
    .map(time => start + easing(time / durationMSec) * length)
    .concat(endObserver);
}
