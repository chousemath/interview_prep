const twoSum = (nums: Array<number>, target: number): Array<number> => {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const index = nums.indexOf(diff);
    if (index > -1 && index !== i) return [i, index];
  }
};

const sample = [3, 2, 4];

console.log(twoSum(sample, 6));
