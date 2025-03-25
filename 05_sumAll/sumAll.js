const sumAll = function(num1, num2) {
    let sumNumbers = 0;
    let counter = num1;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (isNaN(num1) || isNaN(num2)) {
        return "ERROR";
    } else {
        if(num1 < num2) {
            while (num1 <= num2) {
                sumNumbers += num1;
                ++num1;
            }
        } else {
            while (num1 >= num2){
            sumNumbers += num1;
            --num1;
            }
        }
    }
    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
