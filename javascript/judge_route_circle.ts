const judgeCircle = (moves: string): boolean => {
  const arr: Array<string> = moves.split('');
  const xL = arr.filter(c => c === 'L').length;
  const xR = arr.filter(c => c === 'R').length;
  const xU = arr.filter(c => c === 'U').length;
  const xD = arr.filter(c => c === 'D').length;
  return (xL - xR) === 0 && (xU - xD) === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
console.log(judgeCircle("LDRRLRUULR"));
