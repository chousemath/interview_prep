var words = ["gin", "zen", "gig", "msg"];
var uniqueMorseRepresentations = function (words) {
    var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    var wordStore = {};
    words.map(function (word) {
        return word.split('').map(function (letter) { return morse[letter.charCodeAt(0) - 97]; }).join('');
    }).forEach(function (morseWord) { return wordStore[morseWord] = morseWord; });
    return Object.keys(wordStore).length;
};
console.log(uniqueMorseRepresentations(words));
