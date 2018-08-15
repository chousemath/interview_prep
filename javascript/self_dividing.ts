const isSelfDividing = (num: number): boolean => {
  let original: number = num;
  let remainder: number;
  while (num > 0) {
    remainder = num % 10;
    if (remainder === 0 || original % remainder !== 0) { console.log(original, remainder, num); return false; }
    num = Math.floor(num / 10);
  }
  return true;
};

const selfDividingNumbers = (left: number, right: number): Array<number> => {
  const result: Array<number> = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) result.push(i);
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));