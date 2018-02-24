import { Observable } from 'rxjs/Observable';

import '../add/sequencer';

/*
 * easing operator
 */
Observable.sequencer({
  bpm: 128,
  pattern: `
x---x---x--x--x-
x-x-x-x-xx-x----
x---x---x--x--x-
x-x-x-x-xx-x----
`,
  quantize(index: number, msec: number) {
    const beatIndex = index % 16;
    if (beatIndex === 8) {
      return msec * -0.1;
    }

    return 0;
  },
}).subscribe({
  next(index) {
    console.log(new Date(), index);
  },
});
