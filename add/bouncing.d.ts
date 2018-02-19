import getBouncingObserver from '../observable/bouncing';
declare module 'rxjs/Observable' {
    namespace Observable {
        let bouncing: typeof getBouncingObserver;
    }
}
