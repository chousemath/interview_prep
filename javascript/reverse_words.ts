const reverseWords = (s: string): string => s.split(' ')
  .map((word: string) => word.split('').reverse().join('')).join(' ');

console.log(reverseWords("Let's take LeetCode contest"));