const palindromes = function (word) {
    let string = "";
    let adjustedWord = word.toLowerCase().split("");
    let trimmedWord = [];

    // filter out punctuation
    for (let i = 0; i < word.length; i++) {
        let char = adjustedWord[i];
        if (!(char >= 'a' && char <= 'z') && 
            !(char >= '0' && char <= '9')) {
            continue;
        } else {
            trimmedWord.unshift(char);
        }
    }
    // reverse string
    trimmedWord = trimmedWord.join("");
    for (let i = trimmedWord.length - 1; i >= 0; i--){
        string += trimmedWord.at(i);
    }

    // compare
    return (string === trimmedWord)? true : false;
};

// Do not edit below this line
module.exports = palindromes;
