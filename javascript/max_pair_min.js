var arrayPairSum = function (nums) {
    var temp;
    var sum = 0;
    for (var j = nums.length; j > 0; j--) {
        for (var i = 0; i < (j - 1); i++) {
            if (nums[i] > nums[i + 1]) {
                temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }
    }
    for (var i_1 = 0; i_1 < (nums.length - 1); i_1 += 2) {
        sum += nums[i_1];
    }
    return sum;
};
console.log(arrayPairSum([6214, -2290, 2833, -7908]));
