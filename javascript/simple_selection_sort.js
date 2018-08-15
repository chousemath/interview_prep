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
console.log(selectionSort([4, 3, 2, 1]));
