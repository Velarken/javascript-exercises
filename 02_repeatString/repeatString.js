const repeatString = function(word, times) {
    // repeat a given string a given amount of times
    // expected 'heyheyhey'
    if (times < 0)return 'ERROR';
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
