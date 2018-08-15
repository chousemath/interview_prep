var reverseWords = function (s) {
    return s.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
};
console.log(reverseWords("Let's take LeetCode contest"));
