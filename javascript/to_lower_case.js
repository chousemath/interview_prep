var testx = 'He$llo';
var toLowerCase = function (str) {
    return str
        .split('')
        .map(function (char) {
        var code = char.charCodeAt(0);
        return code < 91 && code > 64 ? code + 32 : code;
    })
        .map(function (charCode) { return String.fromCharCode(charCode); })
        .join('');
};
console.log(toLowerCase(testx));
