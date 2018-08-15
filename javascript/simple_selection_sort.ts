const selectionSort = (numArray: Array<number>): Array<number> => {
  const sortedArray: Array<number> = [];
  while (numArray.length > 0) {
    let min: number = numArray[0];
    let minIndex: number;
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < min) {
        min = numArray[i];
        minIndex = i;
      }
    }
    sortedArray.push(min);
    numArray.splice(minIndex, 1);
  }
  return sortedArray;
};

console.log(selectionSort([4, 3, 2, 1]));