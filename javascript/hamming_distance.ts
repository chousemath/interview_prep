
const hammingDistance = (x: number, y: number): number => {
  if (x === y) return 0;
  if ((x === 0 && y === 1) || (x === 1 && y === 0)) return 1;
  let xStr: string = x.toString(2);
  let yStr: string = y.toString(2);
  if (xStr.length > yStr.length) yStr = '0'.repeat(xStr.length - yStr.length) + yStr;
  else if (yStr.length > xStr.length) xStr = '0'.repeat(yStr.length - xStr.length) + xStr;
  console.log(xStr, yStr);
  let foundOne = false;
  let count = 0;
  for (let i = 0; i < xStr.length; i++) {
    if (foundOne) count++;
    if (xStr[i] !== yStr[i])
      if (foundOne) return count;
      else foundOne = true;
    if (i === (xStr.length - 1)) return count;
  }
};

console.log(hammingDistance(0, 1));