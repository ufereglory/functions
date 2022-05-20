// Adding numbers from one to hundred using array.reduce 
function sumAnArray(array) {
    return array.reduce((total, item) => total + item, 0)   // The Zero here signifies the number or the amount we have from the begining before the addition, its                                                                usually good to start from Zero.
}

// console.log(sumAnArray([1, 2, 3, 2, 3, 2, 4, 2]))