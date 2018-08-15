const arrayPairSum = (nums: Array<number>): number => {
  let temp: number;
  let sum = 0;
  for (let j = nums.length; j > 0; j--) {
    for (var i = 0; i < (j - 1); i++) {
      if (nums[i] > nums[i + 1]) {
        temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }
  for (let i = 0; i < (nums.length - 1); i += 2) {
    sum += nums[i];
  }
  return sum;
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]));