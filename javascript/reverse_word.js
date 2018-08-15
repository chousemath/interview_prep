var reverseString = function (word) {
    var reversed = '';
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var c = word_1[_i];
        reversed = c + reversed;
    }
    return reversed;
};
console.log(reverseString('hello'));
