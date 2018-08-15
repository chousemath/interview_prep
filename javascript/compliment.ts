const findComplement = (num: number): number => {
  const bitArray: Array<string> = [];
  for (let bit of num.toString(2)) bitArray.push(bit === '1' ? '0' : '1');
  return parseInt(bitArray.join(''), 2);
};

console.log(findComplement(5));