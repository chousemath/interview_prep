var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        var index = nums.indexOf(diff);
        if (index > -1 && index !== i)
            return [i, index];
    }
};
var sample = [3, 2, 4];
console.log(twoSum(sample, 6));
