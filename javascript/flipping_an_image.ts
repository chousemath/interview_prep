const flipAndInvertImage = (A: Array<Array<number>>): Array<Array<number>> => {
  return A
    .map((arr: Array<number>) => arr.reverse())
    .map((arr: Array<number>) => arr.map((n: number) => n ? 0 : 1));
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));