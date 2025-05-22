const removeFromArray = function(arr, ...vals) {
    
    // The following code does not pass tests no. 2 and 3 using for loop
    // for (let i = 0; i < arr.length; i++) {
    //     for (let v of vals) {
    //         if (arr[i] === v) {
    //             arr.splice(i, 1);
    //         }
    //     }
    // }

    // The following version of the code passes all the tests
    return arr.filter((val) => !vals.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
