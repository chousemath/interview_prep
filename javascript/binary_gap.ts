const binaryGap = (N: number): number => {
  let numString = N.toString(2);
  let max = 0;
  let startIndex = -1;
  let diff: number;
  for (let i = 0; i < numString.length; i++) {
    if (startIndex === -1 && numString.charAt(i) === '1') startIndex = i;
    else if (startIndex !== -1 && numString.charAt(i) === '1') {
      diff = i - startIndex;
      if (diff > max) max = diff;
      startIndex = i;
    }
  }
  return max;
};

console.log(binaryGap(6));