/// <reference types="bezier-easing" />
import BezierEasing = require('bezier-easing');
export interface Bezier {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
export declare type EaseType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart' | 'ease-in-quint' | 'ease-out-quint' | 'ease-in-out-quint' | 'ease-in-expo' | 'ease-out-expo' | 'ease-in-out-expo' | 'ease-in-circ' | 'ease-out-circ' | 'ease-in-out-circ' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'custom';
export declare const linear: BezierEasing.Easing;
export declare const easeIn: BezierEasing.Easing;
export declare const easeOut: BezierEasing.Easing;
export declare const easeInOut: BezierEasing.Easing;
export declare const easeInSine: BezierEasing.Easing;
export declare const easeOutSine: BezierEasing.Easing;
export declare const easeInOutSine: BezierEasing.Easing;
export declare const easeInQuad: BezierEasing.Easing;
export declare const easeOutQuad: BezierEasing.Easing;
export declare const easeInOutQuad: BezierEasing.Easing;
export declare const easeInCubic: BezierEasing.Easing;
export declare const easeOutCubic: BezierEasing.Easing;
export declare const easeInOutCubic: BezierEasing.Easing;
export declare const easeInQuart: BezierEasing.Easing;
export declare const easeOutQuart: BezierEasing.Easing;
export declare const easeInOutQuart: BezierEasing.Easing;
export declare const easeInQuint: BezierEasing.Easing;
export declare const easeOutQuint: BezierEasing.Easing;
export declare const easeInOutQuint: BezierEasing.Easing;
export declare const easeInExpo: BezierEasing.Easing;
export declare const easeOutExpo: BezierEasing.Easing;
export declare const easeInOutExpo: BezierEasing.Easing;
export declare const easeInCirc: BezierEasing.Easing;
export declare const easeOutCirc: BezierEasing.Easing;
export declare const easeInOutCirc: BezierEasing.Easing;
export declare const easeInBack: BezierEasing.Easing;
export declare const easeOutBack: BezierEasing.Easing;
export declare const easeInOutBack: BezierEasing.Easing;
export declare function custom({x1, y1, x2, y2}: Bezier): BezierEasing.Easing;
export declare function getBezierEasing(type: EaseType, customValue?: Bezier): BezierEasing.Easing;
