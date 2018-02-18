import { animationFrame } from 'rxjs/scheduler/animationFrame';
import { Observable } from 'rxjs/Observable';
import BezierEasing from 'bezier-easing';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';

import * as Easing from './Easing';

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

const frameRate = 60;
const intervalMSec = 1000 / frameRate;

const timerObserver = Observable.timer(0, intervalMSec, animationFrame).map(value => value * intervalMSec);

/*
 * easing operator
 */
const length = 15;
const durationMSec = 3000;
const easingLength = length - 1;
timerObserver
  .takeUntil(Observable.timer(durationMSec))
  .map(time => Easing.easeOutExpo(time / durationMSec) * easingLength)
  .concat(Observable.of(easingLength))
  // .distinct()
  .subscribe({
    next(time) {
      console.log(new Date(), time);
    },
  });
