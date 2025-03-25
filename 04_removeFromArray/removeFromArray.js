const removeFromArray = function(givenArray, ...numbers) {
    // Determine what is in the array
    return givenArray.filter(number => !numbers.includes(number));
    // Create an array to hold the remaining values
    // Return new array
    }

// Do not edit below this line
module.exports = removeFromArray;
