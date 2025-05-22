const reverseString = function(str) {
    let arr = [];
    arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = "";
    for (let char of reversedArr) {
        reversedStr += char;
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
