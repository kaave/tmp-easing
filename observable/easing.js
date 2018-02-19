"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var animationFrame_1 = require("rxjs/scheduler/animationFrame");
require("rxjs/add/observable/of");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/map");
require("rxjs/add/operator/concat");
require("rxjs/add/operator/takeUntil");
var easing_1 = require("../utils/easing");
function getEasingObserver(_a) {
    var type = _a.type, durationMSec = _a.durationMSec, end = _a.end, propStart = _a.start, propFrameRate = _a.frameRate;
    var start = propStart || 0;
    var frameRate = propFrameRate || 60;
    var intervalMSec = 1000 / frameRate;
    var easing = easing_1.getBezierEasing(type);
    var endObserver = Observable_1.Observable.of(end);
    var length = end - start;
    return Observable_1.Observable.timer(0, intervalMSec, animationFrame_1.animationFrame)
        .takeUntil(Observable_1.Observable.timer(durationMSec))
        .map(function (value) { return value * intervalMSec; })
        .map(function (time) { return start + easing(time / durationMSec) * length; })
        .concat(endObserver);
}
exports.default = getEasingObserver;
