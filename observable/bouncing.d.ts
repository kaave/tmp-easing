import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
export interface Props {
    height: number;
    gravity: number;
}
export default function getBouncingObserver({height, gravity}: Props): Observable<number>;
