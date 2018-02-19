import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';
import { EaseType } from '../utils/easing';
export interface Props {
    type: EaseType;
    durationMSec: number;
    end: number;
    start?: number;
    frameRate?: number;
}
export default function getEasingObserver({type, durationMSec, end, start: propStart, frameRate: propFrameRate}: Props): Observable<number>;
