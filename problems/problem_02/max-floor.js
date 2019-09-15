const maxFloor = input => {
  let floor = 0;
  let n = input;

  while ( n > 0 ) {
      const base = ( n / 2 ) + 1;
      n = n - base;
      floor++
  }

  return floor;
};

module.exports = { maxFloor };

