const reverseString = (word: string): string => {
  let reversed = '';
  for (let c of word) reversed = c + reversed;
  return reversed;
};

console.log(reverseString('hello'));