const threeSum = (nums, target) => {
  let result = [];
  const n = nums.length;
  for ( let i = 0; i <= n; i++) {
      for ( let j = i + 1; j <= n; j++) {
          for ( let k = j + 1; k <= n; k++) {
              if ( nums[i] + nums[j] + nums[k] === target) {
                  result.push([i, j, k]);
              }
          }
      }
  }
  return result;
};

module.exports = { threeSum };
