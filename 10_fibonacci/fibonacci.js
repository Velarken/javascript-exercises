const fibonacci = function(countArg) {
    // check argument type and ensure it's a number
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }
    // invalid counts
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    // create sequence
    let firstPrev = 1;
    let secondPrev = 0;

    for (let i=2; i<=count;i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

/* This worked to create the proper sequence, but did not give the correct output
    for the given index
// create fibonacci sequence
    // start with 1, 1
    const sequence = [1,1];
        
    //create next number
        // next number is the sum of previous two numbers
        for (let i=0; i<number;i++) {
            const newNumber = sequence.at(-1) + sequence.at(-2);
            // add number to the sequence
            sequence.push(newNumber);
        };
        
    // find given number's value in the sequence
    return sequence[number];
};
*/

// Do not edit below this line
module.exports = fibonacci;
