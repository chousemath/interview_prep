var flipAndInvertImage = function (A) {
    return A
        .map(function (arr) { return arr.reverse(); })
        .map(function (arr) { return arr.map(function (n) { return n ? 0 : 1; }); });
};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
