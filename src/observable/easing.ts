import { Observable } from 'rxjs/Observable';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import BezierEasing from 'bezier-easing';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';

import { getBezierEasing, EaseType } from '../utils/easing';

interface EasingFunctionProps {
  time: number;
  start: number;
  change: number;
  duration: number;
}

interface EasingObservableProps {
  start: number;
  end: number;
  duration: number;
}

type EasingFunction = (props: EasingFunctionProps) => number;
type EasingObservable = (props: EasingObservableProps) => Observable<number>;

/*
 * create easing operator
 */

export default function getEasingObserver(
  type: EaseType,
  durationMSec: number,
  end: number,
  start: number = 0,
  frameRate: number = 60,
): Observable<number> {
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
