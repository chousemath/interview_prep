var J = "z";
var S = "ZZ";
var numJewelsInStones = function (J, S) {
    var jArray = J.split('');
    var sArray = S.split('');
    return jArray
        .map(function (jStr) { return sArray.filter(function (sStr) { return sStr === jStr; }).length; })
        .reduce(function (acc, cur) { return acc + cur; });
};
console.log(numJewelsInStones(J, S));
