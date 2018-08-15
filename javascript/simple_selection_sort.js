var selectionSort = function (numArray) {
    var sortedArray = [];
    while (numArray.length > 0) {
        var min = numArray[0];
        var minIndex = void 0;
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] < min) {
                min = numArray[i];
                minIndex = i;
            }
        }
        sortedArray.push(min);
        numArray.splice(minIndex, 1);
    }
    return sortedArray;
};
var selectionSort2 = function (numArray) {
    var min;
    for (var i = 0; i < numArray.length - 1; i++) {
        min = numArray[i];
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[j] < min) {
                min = numArray[j];
                numArray[j] = numArray[i];
                numArray[i] = min;
            }
        }
    }
    return numArray;
};
console.log(selectionSort2([4, 3, 2, 1]));
