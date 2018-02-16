import { Observable } from 'rxjs/Observable';
import BezierEasing from 'bezier-easing';
import range from 'lodash/range';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/range';

function getNoDuplicateArray(previous: number[], value: number, _index: number, _array: number[]): number[] {
  if (!previous.includes(value)) {
    previous.push(value);
  }

  return previous;
}

// function getNotTouchThresholdArrayFunction(
//   threshold: number,
// ): (value: number, index: number, source: number[]) => boolean {
//   return (value: number, index: number, source: number[]) => {
//     if (index === 0) {
//       return true;
//     }

//     return value - source[index - 1] > threshold;
//   };
// }

const easeOutExpo = BezierEasing(0.19, 1, 0.22, 1);

const chars = 'FRAMELUNCH2018!';
const length = chars.length;
const resolution = 20;
const totalMSec = 5000;
const thresholds = range(0, resolution)
  .map(num => Math.floor(easeOutExpo(num / resolution) * 100))
  .filter(num => num > 0)
  .reduce(getNoDuplicateArray, [] as number[]);
  // .filter(getNotTouchThresholdArrayFunction(100 / length))

const thresholdIndexes = thresholds
  .map(percent => ({
    percent,
    thresholdIndex: Math.floor(length / 100 * percent),
    endMSec: totalMSec / 100 * percent,
  }))
  .map(({ percent, thresholdIndex, endMSec }, index, source) => ({
    percent,
    thresholdIndex,
    startMSec: index === 0 ? 0 : source[index - 1].endMSec + 1,
    endMSec,
  }))
  .reduce(
    (previous, value) => {
      const { thresholdIndex } = value;
      if (
        !previous
          .map(({ thresholdIndex: lastThresholdIndex }) => lastThresholdIndex)
          .includes(thresholdIndex)
      ) {
        previous.push(value);
      }

      return previous;
    },
    [] as Array<{ percent: number; thresholdIndex: number }>,
  );

console.log(thresholds, thresholdIndexes);

// Observable.range(0, 10)
//   .subscribe(num => console.log(num, easeOutExpo(num / 10)));
// var easing = BezierEasing(0, 0, 1, 0.5);
