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

const selectionSort2 = (numArray: Array<number>): Array<number> => {
  let min: number;
  for (let i = 0; i < numArray.length - 1; i++) {
    min = numArray[i];
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[j] < min) {
        min = numArray[j];
        numArray[j] = numArray[i];
        numArray[i] = min;
      }
    }
  }
  return numArray;
};

console.log(selectionSort2([4, 3, 2, 1]));