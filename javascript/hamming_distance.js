var hammingDistance = function (x, y) {
    if (x === y)
        return 0;
    if ((x === 0 && y === 1) || (x === 1 && y === 0))
        return 1;
    var xStr = x.toString(2);
    var yStr = y.toString(2);
    if (xStr.length > yStr.length)
        yStr = '0'.repeat(xStr.length - yStr.length) + yStr;
    else if (yStr.length > xStr.length)
        xStr = '0'.repeat(yStr.length - xStr.length) + xStr;
    console.log(xStr, yStr);
    var foundOne = false;
    var count = 0;
    for (var i = 0; i < xStr.length; i++) {
        if (foundOne)
            count++;
        if (xStr[i] !== yStr[i])
            if (foundOne)
                return count;
            else
                foundOne = true;
        if (i === (xStr.length - 1))
            return count;
    }
};
console.log(hammingDistance(0, 1));
