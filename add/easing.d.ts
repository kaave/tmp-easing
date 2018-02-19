import getEasingObserver from '../observable/easing';
declare module 'rxjs/Observable' {
    namespace Observable {
        let easing: typeof getEasingObserver;
    }
}
