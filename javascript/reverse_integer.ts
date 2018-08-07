const reverse = (x: number): number => {
  if (!x) return 0;
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x *= -1;
  }
  const numbers: Array<number> = [];
  while (x > 0) {
    numbers.push(x % 10);
    x = Math.floor(x / 10);
  }
  const reversed = parseInt(numbers.join(''), 10) * (isNegative ? -1 : 1);
  return (reversed < -2E31 || reversed > (2E31 - 1)) ? 0 : reversed;
};

console.log(reverse(-1230));