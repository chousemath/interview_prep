var isSelfDividing = function (num) {
    var original = num;
    var remainder;
    while (num > 0) {
        remainder = num % 10;
        if (remainder === 0 || original % remainder !== 0) {
            console.log(original, remainder, num);
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
};
var selfDividingNumbers = function (left, right) {
    var result = [];
    for (var i = left; i <= right; i++) {
        if (isSelfDividing(i))
            result.push(i);
    }
    return result;
};
console.log(selfDividingNumbers(1, 22));
