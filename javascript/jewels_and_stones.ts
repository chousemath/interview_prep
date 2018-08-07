const J = "z";
const S = "ZZ";

const numJewelsInStones = (J: string, S: string): number => {
  const jArray: Array<string> = J.split('');
  const sArray: Array<string> = S.split('');
  return jArray
    .map(jStr => sArray.filter(sStr => sStr === jStr).length)
    .reduce((acc, cur) => acc + cur);
};

console.log(numJewelsInStones(J, S));