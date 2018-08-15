var binaryGap = function (N) {
    var numString = N.toString(2);
    var max = 0;
    var startIndex = -1;
    var diff;
    for (var i = 0; i < numString.length; i++) {
        if (startIndex === -1 && numString.charAt(i) === '1')
            startIndex = i;
        else if (startIndex !== -1 && numString.charAt(i) === '1') {
            diff = i - startIndex;
            if (diff > max)
                max = diff;
            startIndex = i;
        }
    }
    return max;
};
console.log(binaryGap(6));
