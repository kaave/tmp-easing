function bounceIn(time: number, begin: number, change: number, duration: number) {
  return change - bounceOut(duration - time, 0, change, duration) + begin;
}

function bounceOut(time: number, begin: number, change: number, duration: number) {
  const unit = time / duration;

  if (unit < 1 / 2.75) {
    return change * (7.5625 * unit * unit) + begin;
  } else if (unit < 2 / 2.75) {
    const calcUnit = unit - 1.5 / 2.75;
    return change * (7.5625 * calcUnit * calcUnit + 0.75) + begin;
  } else if (unit < 2.5 / 2.75) {
    const calcUnit = unit - 2.25 / 2.75;
    return change * (7.5625 * calcUnit * calcUnit + 0.9375) + begin;
  }

  const calcUnit = unit - 2.625 / 2.75;
  return change * (7.5625 * calcUnit * calcUnit + 0.984375) + begin;
}

console.log('-----start-----');
for (let i = 0; i < 1; i += 0.01) {
  console.log(bounceOut(i, 0, 1 - 0.01, 100));
}
console.log('------end------');
