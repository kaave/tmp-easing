"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BezierEasing = require("bezier-easing");
exports.linear = BezierEasing(0, 0, 1, 1);
exports.easeIn = BezierEasing(0.47, 0, 0.745, 0.715);
exports.easeOut = BezierEasing(0.39, 0.575, 0.565, 1);
exports.easeInOut = BezierEasing(0.445, 0.05, 0.55, 0.95);
exports.easeInSine = BezierEasing(0.47, 0, 0.745, 0.715);
exports.easeOutSine = BezierEasing(0.39, 0.575, 0.565, 1);
exports.easeInOutSine = BezierEasing(0.445, 0.05, 0.55, 0.95);
exports.easeInQuad = BezierEasing(0.55, 0.085, 0.68, 0.53);
exports.easeOutQuad = BezierEasing(0.25, 0.46, 0.45, 0.94);
exports.easeInOutQuad = BezierEasing(0.455, 0.03, 0.515, 0.955);
exports.easeInCubic = BezierEasing(0.55, 0.055, 0.675, 0.19);
exports.easeOutCubic = BezierEasing(0.215, 0.61, 0.355, 1);
exports.easeInOutCubic = BezierEasing(0.645, 0.045, 0.355, 1);
exports.easeInQuart = BezierEasing(0.895, 0.03, 0.685, 0.22);
exports.easeOutQuart = BezierEasing(0.165, 0.84, 0.44, 1);
exports.easeInOutQuart = BezierEasing(0.77, 0, 0.175, 1);
exports.easeInQuint = BezierEasing(0.755, 0.05, 0.855, 0.06);
exports.easeOutQuint = BezierEasing(0.23, 1, 0.32, 1);
exports.easeInOutQuint = BezierEasing(0.86, 0, 0.07, 1);
exports.easeInExpo = BezierEasing(0.95, 0.05, 0.795, 0.035);
exports.easeOutExpo = BezierEasing(0.19, 1, 0.22, 1);
exports.easeInOutExpo = BezierEasing(1, 0, 0, 1);
exports.easeInCirc = BezierEasing(0.6, 0.04, 0.98, 0.335);
exports.easeOutCirc = BezierEasing(0.075, 0.82, 0.165, 1);
exports.easeInOutCirc = BezierEasing(0.785, 0.135, 0.15, 0.86);
exports.easeInBack = BezierEasing(0.6, -0.28, 0.735, 0.045);
exports.easeOutBack = BezierEasing(0.175, 0.885, 0.32, 1.275);
exports.easeInOutBack = BezierEasing(0.68, -0.55, 0.265, 1.55);
function custom(_a) {
    var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
    return BezierEasing(x1, y1, x2, y2);
}
exports.custom = custom;
function getBezierEasing(type, customValue) {
    switch (type) {
        case 'linear':
            return exports.linear;
        case 'ease-in':
            return exports.easeIn;
        case 'ease-out':
            return exports.easeOut;
        case 'ease-in-out':
            return exports.easeInOut;
        case 'ease-in-sine':
            return exports.easeInSine;
        case 'ease-out-sine':
            return exports.easeOutSine;
        case 'ease-in-out-sine':
            return exports.easeInOutSine;
        case 'ease-in-quad':
            return exports.easeInQuad;
        case 'ease-out-quad':
            return exports.easeOutQuad;
        case 'ease-in-out-quad':
            return exports.easeInOutQuad;
        case 'ease-in-cubic':
            return exports.easeInCubic;
        case 'ease-out-cubic':
            return exports.easeOutCubic;
        case 'ease-in-out-cubic':
            return exports.easeInOutCubic;
        case 'ease-in-quart':
            return exports.easeInQuart;
        case 'ease-out-quart':
            return exports.easeOutQuart;
        case 'ease-in-out-quart':
            return exports.easeInOutQuart;
        case 'ease-in-quint':
            return exports.easeInQuint;
        case 'ease-out-quint':
            return exports.easeOutQuint;
        case 'ease-in-out-quint':
            return exports.easeInOutQuint;
        case 'ease-in-expo':
            return exports.easeInExpo;
        case 'ease-out-expo':
            return exports.easeOutExpo;
        case 'ease-in-out-expo':
            return exports.easeInOutExpo;
        case 'ease-in-circ':
            return exports.easeInCirc;
        case 'ease-out-circ':
            return exports.easeOutCirc;
        case 'ease-in-out-circ':
            return exports.easeInOutCirc;
        case 'ease-in-back':
            return exports.easeInBack;
        case 'ease-out-back':
            return exports.easeOutBack;
        case 'ease-in-out-back':
            return exports.easeInOutBack;
        case 'custom':
            if (!customValue) {
                throw new Error('Invalid custom easing value.');
            }
            return custom(customValue);
        default:
            throw new Error('Invalid easing type.');
    }
}
exports.getBezierEasing = getBezierEasing;
