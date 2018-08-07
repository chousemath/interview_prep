var judgeCircle = function (moves) {
    var arr = moves.split('');
    var xL = arr.filter(function (c) { return c === 'L'; }).length;
    var xR = arr.filter(function (c) { return c === 'R'; }).length;
    var xU = arr.filter(function (c) { return c === 'U'; }).length;
    var xD = arr.filter(function (c) { return c === 'D'; }).length;
    return (xL - xR) === 0 && (xU - xD) === 0;
};
console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
console.log(judgeCircle("LDRRLRUULR"));
