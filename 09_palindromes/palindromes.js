const palindromes = function (string) {
    // only consider letters and numbers for the palindrome
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    // clean string to only include considered characters 
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    // reverse string for comparisson
    const reversedString = cleanedString.split('').reverse().join('');

    // return the outcome of the comparisson
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
