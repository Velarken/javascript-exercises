const sumAll = function(num1, num2) {
    let sumNumbers = 0;
    while (num1 <= num2) {
        sumNumbers += num1;
        ++num1;
    }
    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
