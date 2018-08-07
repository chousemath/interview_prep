const words = ["gin", "zen", "gig", "msg"];
const uniqueMorseRepresentations = (words: Array<string>): number => {
  const morse: Array<string> = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const wordStore = {};
  words.map((word: string) => {
    return word.split('').map((letter: string) => morse[letter.charCodeAt(0) - 97]).join('');
  }).forEach((morseWord: string) => wordStore[morseWord] = morseWord);
  return Object.keys(wordStore).length;
};

console.log(uniqueMorseRepresentations(words));
