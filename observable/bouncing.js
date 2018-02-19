"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/merge");
function bouncing(height, gravity, result) {
    if (result === void 0) { result = []; }
    var length = result.length;
    result.push(length > 0 ? height + result[length - 1] : height);
    var next = height * gravity;
    return next < 2 ? result : bouncing(next, gravity, result);
}
Observable_1.Observable.merge.apply(Observable_1.Observable, bouncing(500, 0.9)
    .map(function (msec) { return Math.floor(msec); })
    .map(function (msec) { return Observable_1.Observable.fromPromise(new Promise(function (resolve) { return setTimeout(function () { return resolve(msec); }, msec); })); })).subscribe({
    next: function (msec) {
        console.log(msec);
    },
});
