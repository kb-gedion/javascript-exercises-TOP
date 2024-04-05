const sumAll = function(firstNum, secondNum) {
    let sum = 0;

    if (typeof firstNum != "number" || 
        typeof secondNum != "number") {
        return "ERROR";
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    } else if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    } else {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
