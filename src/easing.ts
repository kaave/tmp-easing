import BezierEasing from 'bezier-easing';

export interface Bezier {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export type EaseType =
  | 'Linear'
  | 'In'
  | 'Out'
  | 'InOut'
  | 'InSine'
  | 'OutSine'
  | 'InOutSine'
  | 'InQuad'
  | 'OutQuad'
  | 'InOutQuad'
  | 'InCubic'
  | 'OutCubic'
  | 'InOutCubic'
  | 'InQuart'
  | 'OutQuart'
  | 'InOutQuart'
  | 'InQuint'
  | 'OutQuint'
  | 'InOutQuint'
  | 'InExpo'
  | 'OutExpo'
  | 'InOutExpo'
  | 'InCirc'
  | 'OutCirc'
  | 'InOutCirc'
  | 'InBack'
  | 'OutBack'
  | 'InOutBack';

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
