const sumAll = function (start, end) {
    let sum = 0;
    let erroMessage = "ERROR";
    if (start < 0 || end < 0) {
        return erroMessage;
    } else if (!(typeof start === 'number') || !(typeof end === 'number')) {
        return erroMessage;
    } else if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        return erroMessage;
    } else {
        if (start < end) {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
        } else {
            for (let i = start; i >= end; i--) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
