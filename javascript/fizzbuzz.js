var sample = [1, 3, 2, 5, 6, 7, 10, 15];
var fizzbuzz = function (data) {
    data.forEach(function (el) {
        var sound = '' + (el % 3 === 0 ? 'fizz' : '') + (el % 5 === 0 ? 'buzz' : '');
        if (sound)
            console.log(sound);
    });
};
fizzbuzz(sample);
