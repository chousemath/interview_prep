const sample = [1, 3, 2, 5, 6, 7, 10, 15];

const fizzbuzz = (data: Array<number>) => {
  data.forEach(el => {
    const sound = '' + (el % 3 === 0 ? 'fizz' : '') + (el % 5 === 0 ? 'buzz' : '');
    if (sound) console.log(sound);
  });
};

fizzbuzz(sample);