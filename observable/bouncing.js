"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/merge");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
function bouncing(height, gravity, result) {
    if (result === void 0) { result = [0]; }
    var length = result.length;
    result.push(length > 0 ? height + result[length - 1] : height);
    var next = height * gravity;
    return next < 2 ? result : bouncing(next, gravity, result);
}
function getBouncingObserver(_a) {
    var height = _a.height, gravity = _a.gravity;
    return Observable_1.Observable.merge.apply(Observable_1.Observable, bouncing(height, gravity)
        .map(function (msec) { return Math.floor(msec); })
        .map(function (msec) { return Observable_1.Observable.of(msec).delay(msec); }));
}
exports.default = getBouncingObserver;
