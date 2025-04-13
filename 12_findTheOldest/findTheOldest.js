const findTheOldest = function(array) {
    if (!array.yearOfDeath) {
        const currentYear =  new Date().getFullYear();
        array.yearOfDeath = currentYear;
        const sortedArray = array.sort((a,b) => a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1)
    
        return sortedArray[0];
    } else {
        const sortedArray = array.sort((a,b) => a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1)
        return sortedArray[0];
    }
    
};

// Do not edit below this line
module.exports = findTheOldest;
