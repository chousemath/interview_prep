var findComplement = function (num) {
    var bitArray = [];
    for (var _i = 0, _a = num.toString(2); _i < _a.length; _i++) {
        var bit = _a[_i];
        bitArray.push(bit === '1' ? '0' : '1');
    }
    return parseInt(bitArray.join(''), 2);
};
console.log(findComplement(5));
