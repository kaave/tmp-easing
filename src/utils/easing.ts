// import * as BezierEasing from 'bezier-easing';
import BezierEasing = require('bezier-easing');

export interface Bezier {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export type EaseType =
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'ease-in-sine'
  | 'ease-out-sine'
  | 'ease-in-out-sine'
  | 'ease-in-quad'
  | 'ease-out-quad'
  | 'ease-in-out-quad'
  | 'ease-in-cubic'
  | 'ease-out-cubic'
  | 'ease-in-out-cubic'
  | 'ease-in-quart'
  | 'ease-out-quart'
  | 'ease-in-out-quart'
  | 'ease-in-quint'
  | 'ease-out-quint'
  | 'ease-in-out-quint'
  | 'ease-in-expo'
  | 'ease-out-expo'
  | 'ease-in-out-expo'
  | 'ease-in-circ'
  | 'ease-out-circ'
  | 'ease-in-out-circ'
  | 'ease-in-back'
  | 'ease-out-back'
  | 'ease-in-out-back'
  | 'custom';

export const linear = BezierEasing(0, 0, 1, 1);
export const easeIn = BezierEasing(0.47, 0, 0.745, 0.715);
export const easeOut = BezierEasing(0.39, 0.575, 0.565, 1);
export const easeInOut = BezierEasing(0.445, 0.05, 0.55, 0.95);
export const easeInSine = BezierEasing(0.47, 0, 0.745, 0.715);
export const easeOutSine = BezierEasing(0.39, 0.575, 0.565, 1);
export const easeInOutSine = BezierEasing(0.445, 0.05, 0.55, 0.95);
export const easeInQuad = BezierEasing(0.55, 0.085, 0.68, 0.53);
export const easeOutQuad = BezierEasing(0.25, 0.46, 0.45, 0.94);
export const easeInOutQuad = BezierEasing(0.455, 0.03, 0.515, 0.955);
export const easeInCubic = BezierEasing(0.55, 0.055, 0.675, 0.19);
export const easeOutCubic = BezierEasing(0.215, 0.61, 0.355, 1);
export const easeInOutCubic = BezierEasing(0.645, 0.045, 0.355, 1);
export const easeInQuart = BezierEasing(0.895, 0.03, 0.685, 0.22);
export const easeOutQuart = BezierEasing(0.165, 0.84, 0.44, 1);
export const easeInOutQuart = BezierEasing(0.77, 0, 0.175, 1);
export const easeInQuint = BezierEasing(0.755, 0.05, 0.855, 0.06);
export const easeOutQuint = BezierEasing(0.23, 1, 0.32, 1);
export const easeInOutQuint = BezierEasing(0.86, 0, 0.07, 1);
export const easeInExpo = BezierEasing(0.95, 0.05, 0.795, 0.035);
export const easeOutExpo = BezierEasing(0.19, 1, 0.22, 1);
export const easeInOutExpo = BezierEasing(1, 0, 0, 1);
export const easeInCirc = BezierEasing(0.6, 0.04, 0.98, 0.335);
export const easeOutCirc = BezierEasing(0.075, 0.82, 0.165, 1);
export const easeInOutCirc = BezierEasing(0.785, 0.135, 0.15, 0.86);
export const easeInBack = BezierEasing(0.6, -0.28, 0.735, 0.045);
export const easeOutBack = BezierEasing(0.175, 0.885, 0.32, 1.275);
export const easeInOutBack = BezierEasing(0.68, -0.55, 0.265, 1.55);

export function custom({ x1, y1, x2, y2 }: Bezier) {
  return BezierEasing(x1, y1, x2, y2);
}

export function getBezierEasing(type: EaseType, customValue?: Bezier): BezierEasing.Easing {
  switch (type) {
    case 'linear':
      return linear;
    case 'ease-in':
      return easeIn;
    case 'ease-out':
      return easeOut;
    case 'ease-in-out':
      return easeInOut;
    case 'ease-in-sine':
      return easeInSine;
    case 'ease-out-sine':
      return easeOutSine;
    case 'ease-in-out-sine':
      return easeInOutSine;
    case 'ease-in-quad':
      return easeInQuad;
    case 'ease-out-quad':
      return easeOutQuad;
    case 'ease-in-out-quad':
      return easeInOutQuad;
    case 'ease-in-cubic':
      return easeInCubic;
    case 'ease-out-cubic':
      return easeOutCubic;
    case 'ease-in-out-cubic':
      return easeInOutCubic;
    case 'ease-in-quart':
      return easeInQuart;
    case 'ease-out-quart':
      return easeOutQuart;
    case 'ease-in-out-quart':
      return easeInOutQuart;
    case 'ease-in-quint':
      return easeInQuint;
    case 'ease-out-quint':
      return easeOutQuint;
    case 'ease-in-out-quint':
      return easeInOutQuint;
    case 'ease-in-expo':
      return easeInExpo;
    case 'ease-out-expo':
      return easeOutExpo;
    case 'ease-in-out-expo':
      return easeInOutExpo;
    case 'ease-in-circ':
      return easeInCirc;
    case 'ease-out-circ':
      return easeOutCirc;
    case 'ease-in-out-circ':
      return easeInOutCirc;
    case 'ease-in-back':
      return easeInBack;
    case 'ease-out-back':
      return easeOutBack;
    case 'ease-in-out-back':
      return easeInOutBack;
    case 'custom':
      if (!customValue) {
        throw new Error('Invalid custom easing value.');
      }
      return custom(customValue);
    default:
      throw new Error('Invalid easing type.');
  }
}

/*
 * メモ
 *
function bounceIn(time: number, begin: number, change: number, duration: number) {
  return change - bounceOut(duration - time, 0, change, duration) + begin;
}

function bounceOut(time: number, begin: number, change: number, duration: number) {
  const unit = time / duration;

  if (unit < 1 / 2.75) {
    return change * (7.5625 * unit * unit) + begin;
  } else if (unit < 2 / 2.75) {
    const calcUnit = unit - 1.5 / 2.75;
    return change * (7.5625 * calcUnit * calcUnit + 0.75) + begin;
  } else if (unit < 2.5 / 2.75) {
    const calcUnit = unit - 2.25 / 2.75;
    return change * (7.5625 * calcUnit * calcUnit + 0.9375) + begin;
  }

  const calcUnit = unit - 2.625 / 2.75;
  return change * (7.5625 * calcUnit * calcUnit + 0.984375) + begin;
}

console.log('-----start-----');
for (let i = 0; i < 1; i += 0.01) {
  console.log(bounceOut(i, 0, 1 - 0.01, 100));
}
console.log('------end------');
*/
