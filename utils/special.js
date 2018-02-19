"use strict";
function bounceIn(time, begin, change, duration) {
    return change - bounceOut(duration - time, 0, change, duration) + begin;
}
function bounceOut(time, begin, change, duration) {
    var unit = time / duration;
    if (unit < 1 / 2.75) {
        return change * (7.5625 * unit * unit) + begin;
    }
    else if (unit < 2 / 2.75) {
        var calcUnit_1 = unit - 1.5 / 2.75;
        return change * (7.5625 * calcUnit_1 * calcUnit_1 + 0.75) + begin;
    }
    else if (unit < 2.5 / 2.75) {
        var calcUnit_2 = unit - 2.25 / 2.75;
        return change * (7.5625 * calcUnit_2 * calcUnit_2 + 0.9375) + begin;
    }
    var calcUnit = unit - 2.625 / 2.75;
    return change * (7.5625 * calcUnit * calcUnit + 0.984375) + begin;
}
console.log('-----start-----');
for (var i = 0; i < 1; i += 0.01) {
    console.log(bounceOut(i, 0, 1 - 0.01, 100));
}
console.log('------end------');
