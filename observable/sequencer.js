"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/merge");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
function getSequencerObserver(_a) {
    var bpm = _a.bpm, patternString = _a.pattern, quantize = _a.quantize;
    var noteMSec = 60 * 1000 / bpm / 4;
    var pattern = patternString.split('');
    var filterRegex = /[x-]/;
    var observers = pattern
        .filter(function (note) { return filterRegex.test(note); })
        .map(function (note, index) {
        if (note === '-') {
            return null;
        }
        else if (quantize) {
            return Observable_1.Observable.of(index).delay(index * noteMSec + quantize(index, noteMSec));
        }
        return Observable_1.Observable.of(index).delay(index * noteMSec);
    })
        .filter(function (note) { return note != null; });
    return Observable_1.Observable.merge.apply(Observable_1.Observable, observers);
}
exports.default = getSequencerObserver;
