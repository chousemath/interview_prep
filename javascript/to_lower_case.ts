const testx = 'He$llo';

const toLowerCase = (str: string): string => {
  return str
    .split('')
    .map((char: string) => {
      const code: number = char.charCodeAt(0);
      return code < 91 && code > 64 ? code + 32 : code;
    })
    .map((charCode: number) => String.fromCharCode(charCode))
    .join('');
};

console.log(toLowerCase(testx));