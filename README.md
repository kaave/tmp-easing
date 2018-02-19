## Problem

tsc compile error

```text
node_modules/rxjs/Observable.d.ts(58,60): error TS2693: 'Promise' only refers to a type, but is being used as a value here.
node_modules/rxjs/Observable.d.ts(73,59): error TS2693: 'Promise' only refers to a type, but is being used as a value here.
```

Fixed by adding bluebird & core-js d.ts...

```
yarn add -D @types/bluebird @types/core-js@0.9.36
```

[Detail here.](https://github.com/ReactiveX/rxjs/issues/2422#issuecomment-316946983)
