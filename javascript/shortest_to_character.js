var shortestToChar = function (S, C) {
    var charArr = S.split('');
    var charIndices = [];
    var distances = [];
    for (var i = 0; i < charArr.length; i++)
        if (charArr[i] === C)
            charIndices.push(i);
    var _loop_1 = function (i) {
        distances.push(charIndices.map(function (index) { return Math.abs(index - i); }).reduce(function (a, c) { return Math.min(a, c); }, charArr.length));
    };
    for (var i = 0; i < charArr.length; i++) {
        _loop_1(i);
    }
    return distances;
};
console.log(shortestToChar('loveleetcode', 'e'));
