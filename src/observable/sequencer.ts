import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export interface Props {
  bpm: number;
  pattern: string;
  quantize?: (index: number, msec: number) => number;
}

export default function getSequencerObserver({ bpm, pattern: patternString, quantize }: Props): Observable<number> {
  const noteMSec = 60 * 1000 / bpm / 4;
  const pattern = patternString.split('');
  const filterRegex = /[x-]/;

  const observers = pattern
    .filter(note => filterRegex.test(note))
    .map((note, index) => {
      if (note === '-') {
        return null;
      } else if (quantize) {
        return Observable.of(index).delay(index * noteMSec + quantize(index, noteMSec));
      }

      return Observable.of(index).delay(index * noteMSec);
    })
    .filter(note => note != null) as Array<Observable<number>>;

  return Observable.merge(...observers);
}
