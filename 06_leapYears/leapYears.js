const leapYears = function(year) {
    if (Number.isInteger((year/4))) {
        if (Number.isInteger((year/100)) && !Number.isInteger((year/400))) {
            return false;
        } else {
            return true;
        }

    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
