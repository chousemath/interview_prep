const shortestToChar = (S: string, C: string): Array<number> => {
  const charArr = S.split('');
  const charIndices = [];
  const distances: Array<number> = [];
  for (let i = 0; i < charArr.length; i++) if (charArr[i] === C) charIndices.push(i);
  for (let i = 0; i < charArr.length; i++) {
    distances.push(charIndices.map(index => Math.abs(index - i)).reduce((a, c) => Math.min(a, c), charArr.length));
  }
  return distances;
};

console.log(shortestToChar('loveleetcode', 'e'));