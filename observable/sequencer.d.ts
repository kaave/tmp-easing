import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
export interface Props {
    bpm: number;
    pattern: string;
    quantize?: (index: number, msec: number) => number;
}
export default function getSequencerObserver({bpm, pattern: patternString, quantize}: Props): Observable<number>;
