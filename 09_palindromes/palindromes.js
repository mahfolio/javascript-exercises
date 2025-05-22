const palindromes = function (letters) {
    let cleanedLetters = letters.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversedLetters = [...cleanedLetters].reverse().join("");
    return reversedLetters === cleanedLetters;
};

// Do not edit below this line
module.exports = palindromes;
