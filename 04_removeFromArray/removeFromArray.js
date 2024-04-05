const removeFromArray = function(arr, ...items) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (const item of items) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                // adjust for resizing array
                i--;
                len--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
