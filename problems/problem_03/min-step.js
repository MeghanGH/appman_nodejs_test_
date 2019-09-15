const isEven = n => {
  return n % 2 === 0;
};

const isOdd = n => {
  return Math.abs(n % 2) === 1;
};

const minStep = input => {
  let n = input;
  let step = 0;

  while (n > 1) {
    if (isOdd(input)) {
      n = n - 1;
    } else {
      n = n/2;
    }
    step++;
  }

  return step;
};
module.exports = { minStep };
